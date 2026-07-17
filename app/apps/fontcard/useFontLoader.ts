import { useEffect, useRef, useState } from 'react'
import type { FontItem } from './fonts'
import { getCssFamily } from './fonts'

const loadedKeys = new Map<string, Promise<void>>()

function prefersLocalZsftProxy() {
  if (typeof window === 'undefined') return false
  const host = window.location.hostname
  // ZeoSeven returns 204 for Origin http://127.0.0.1:* ; production hosts work direct.
  return host === '127.0.0.1' || host === '0.0.0.0'
}

function zeosevenCssUrl(id: number) {
  if (prefersLocalZsftProxy()) return `/zsft/${id}/main/result.css`
  return `https://fontsapi.zeoseven.com/${id}/main/result.css`
}

function zeosevenBaseUrl(id: number) {
  if (prefersLocalZsftProxy()) return `/zsft/${id}/main/`
  return `https://fontsapi.zeoseven.com/${id}/main/`
}

/** Strip local() so installed same-name fonts cannot shadow CDN subsets. */
function rewriteZeosevenCss(css: string, baseUrl: string): string {
  return css
    .replace(/local\([^)]*\)\s*,?\s*/gi, '')
    .replace(/src:\s*,/gi, 'src:')
    .replace(/url\(["']?\.\/([^"')]+)["']?\)/g, `url("${baseUrl}$1")`)
}

function injectStylesheet(href: string, key: string): Promise<void> {
  const existing = loadedKeys.get(key)
  if (existing) return existing

  const found = document.querySelector(
    `link[data-font-key="${key}"]`,
  ) as HTMLLinkElement | null

  if (found) {
    if (!found.sheet || found.dataset.fontReady !== '1') {
      found.remove()
    } else {
      loadedKeys.set(key, Promise.resolve())
      return loadedKeys.get(key)!
    }
  }

  const done = new Promise<void>((resolve, reject) => {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = href
    link.dataset.fontKey = key
    link.addEventListener(
      'load',
      () => {
        link.dataset.fontReady = '1'
        resolve()
      },
      { once: true },
    )
    link.addEventListener(
      'error',
      () => reject(new Error(`样式表加载失败: ${href}`)),
      { once: true },
    )
    document.head.appendChild(link)
  })

  loadedKeys.set(key, done)
  return done.catch((err) => {
    loadedKeys.delete(key)
    throw err
  })
}

async function injectZeosevenFont(id: number): Promise<void> {
  const key = `zs:${id}`
  const existing = loadedKeys.get(key)
  if (existing) return existing

  const found = document.querySelector(
    `style[data-font-key="${key}"]`,
  ) as HTMLStyleElement | null
  if (found?.dataset.fontReady === '1') {
    loadedKeys.set(key, Promise.resolve())
    return loadedKeys.get(key)!
  }
  found?.remove()
  // Drop any previous link-based attempt for the same font.
  document.querySelector(`link[data-font-key="${key}"]`)?.remove()

  const done = (async () => {
    const href = zeosevenCssUrl(id)
    const res = await fetch(href)
    if (!res.ok) {
      throw new Error(`字体 CSS 加载失败 (${res.status}): ${href}`)
    }
    const raw = await res.text()
    if (!raw.includes('@font-face') && !raw.includes('font-family')) {
      throw new Error('字体 CSS 为空或被拦截，请确认通过 npm run dev 启动')
    }
    const style = document.createElement('style')
    style.dataset.fontKey = key
    style.textContent = rewriteZeosevenCss(raw, zeosevenBaseUrl(id))
    document.head.appendChild(style)
    style.dataset.fontReady = '1'
  })()

  loadedKeys.set(key, done)
  return done.catch((err) => {
    loadedKeys.delete(key)
    throw err
  })
}

function injectLocalFont(family: string, files: string[]): Promise<void> {
  const key = `local:${family}`
  if (loadedKeys.has(key)) return loadedKeys.get(key)!

  const existing = document.querySelector(`style[data-font-key="${key}"]`)
  if (existing) {
    loadedKeys.set(key, Promise.resolve())
    return loadedKeys.get(key)!
  }

  const style = document.createElement('style')
  style.dataset.fontKey = key
  const urls = files
    .map((file) => {
      const format = file.endsWith('.otf')
        ? 'opentype'
        : file.endsWith('.woff2')
          ? 'woff2'
          : 'truetype'
      return `url("${file}") format("${format}")`
    })
    .join(', ')
  style.textContent = `
    @font-face {
      font-family: "${family}";
      src: ${urls};
      font-display: swap;
      font-weight: 400;
      font-style: normal;
    }
  `
  document.head.appendChild(style)
  const done = Promise.resolve()
  loadedKeys.set(key, done)
  return done
}

async function waitForFamily(family: string, sample: string) {
  if (!document.fonts?.load) {
    await new Promise((r) => setTimeout(r, 500))
    return
  }
  const text = sample || '字Aa'
  const deadline = Date.now() + 12000
  while (Date.now() < deadline) {
    await document.fonts.load(`72px "${family}"`, text)
    await document.fonts.ready
    const faces = [...document.fonts].filter((f) => {
      const name = f.family.replace(/^["']|["']$/g, '')
      return name === family
    })
    const loadedForSample =
      faces.length > 0 &&
      document.fonts.check(`72px "${family}"`, text) &&
      faces.some((f) => f.status === 'loaded')
    if (loadedForSample) return
    await new Promise((r) => setTimeout(r, 150))
  }
}

export function useFontLoader(font: FontItem | null, sampleText: string) {
  const [ready, setReady] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const requestId = useRef(0)

  useEffect(() => {
    if (!font) return
    const id = ++requestId.current
    // Sync loading flags when the selected font changes (async load follows).
    // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional request reset
    setLoading(true)
    setReady(false)
    setError(null)

    const family = getCssFamily(font)
    let cancelled = false

    const run = async () => {
      try {
        if (font.source.kind === 'zeoseven') {
          await injectZeosevenFont(font.source.id)
        } else if (font.source.kind === 'google') {
          await injectStylesheet(
            `https://fonts.googleapis.com/css2?family=${font.source.family}:wght@400;500;600;700&display=swap`,
            `gf:${font.source.family}`,
          )
        } else {
          await injectLocalFont(font.source.family, font.source.files)
        }

        await waitForFamily(family, sampleText)
      } catch (e) {
        if (!cancelled && id === requestId.current) {
          setError(e instanceof Error ? e.message : '字体加载失败')
        }
      } finally {
        if (!cancelled && id === requestId.current) {
          setReady(true)
          setLoading(false)
        }
      }
    }

    void run()
    return () => {
      cancelled = true
    }
  }, [font, sampleText])

  return { ready, loading, error, family: font ? getCssFamily(font) : '' }
}
