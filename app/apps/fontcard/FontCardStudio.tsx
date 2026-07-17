'use client'

import Link from 'next/link'
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type MouseEvent,
} from 'react'
import {
  CARD_COLORS,
  DEFAULT_EN,
  DEFAULT_ZH,
  FONTS,
  isDarkCardBg,
  type FontItem,
  type LangCategory,
} from './fonts'
import { downloadFontFile } from './downloadFont'
import { blobToDownloadUrl, renderCardPng } from './renderCard'
import { useCardMotion } from './useCardMotion'
import { useFontLoader } from './useFontLoader'
import './fontcard.css'

type Feedback = { type: 'ok' | 'err'; text: string } | null

export function FontCardStudio() {
  useEffect(() => {
    const id = 'fontcard-archivo'
    if (document.getElementById(id)) return
    const link = document.createElement('link')
    link.id = id
    link.rel = 'stylesheet'
    link.href =
      'https://fonts.googleapis.com/css2?family=Archivo:wght@500;600;700;800&family=Archivo+Black&display=swap'
    document.head.appendChild(link)
  }, [])

  const [category, setCategory] = useState<LangCategory>('zh')
  const fonts = useMemo(
    () => FONTS.filter((f) => f.category === category),
    [category],
  )
  const [selectedId, setSelectedId] = useState(fonts[0]?.id ?? '')
  const selected = useMemo(
    () => FONTS.find((f) => f.id === selectedId) ?? fonts[0],
    [selectedId, fonts],
  )

  const [text, setText] = useState(DEFAULT_ZH)
  const [colorId, setColorId] =
    useState<(typeof CARD_COLORS)[number]['id']>('malibu')
  const color = CARD_COLORS.find((c) => c.id === colorId) ?? CARD_COLORS[0]
  const inkOnDark = isDarkCardBg(color.value)

  const [feedback, setFeedback] = useState<Feedback>(null)
  const [busy, setBusy] = useState<'download' | 'copy' | null>(null)
  const [fontDownloadingId, setFontDownloadingId] = useState<string | null>(null)
  const cardRef = useRef<HTMLDivElement>(null)

  const previewText =
    text.trim() || (category === 'zh' ? DEFAULT_ZH : DEFAULT_EN)
  const { ready, loading, error: fontError, family } = useFontLoader(
    selected ?? null,
    previewText,
  )

  useCardMotion(cardRef)

  const switchCategory = useCallback((next: LangCategory) => {
    setCategory(next)
    const first = FONTS.find((f) => f.category === next)
    if (first) setSelectedId(first.id)
    setText(next === 'zh' ? DEFAULT_ZH : DEFAULT_EN)
  }, [])

  const flash = useCallback((type: 'ok' | 'err', message: string) => {
    setFeedback({ type, text: message })
    window.setTimeout(() => setFeedback(null), 2400)
  }, [])

  const captureBlob = useCallback(async () => {
    if (!selected) throw new Error('未选择字体')
    await document.fonts.ready
    return renderCardPng({
      text: previewText,
      family,
      background: color.value,
      ink: color.ink,
      metaLeft: selected.name,
      metaRight: 'https://vikigaplab.com/',
      darkBg: inkOnDark,
    })
  }, [color.ink, color.value, family, inkOnDark, previewText, selected])

  const handleDownload = useCallback(async () => {
    if (!selected) return
    setBusy('download')
    try {
      const blob = await captureBlob()
      const url = await blobToDownloadUrl(blob)
      const a = document.createElement('a')
      a.href = url
      const safeName = selected.name.replace(/[\\/:*?"<>|]+/g, '').trim()
      a.download = `${safeName}_${color.value}_${color.ink}.png`
      a.click()
      URL.revokeObjectURL(url)
      flash('ok', '已下载卡片 PNG')
    } catch {
      flash('err', '下载失败，请稍后重试')
    } finally {
      setBusy(null)
    }
  }, [captureBlob, color.ink, color.value, flash, selected])

  const handleCopy = useCallback(async () => {
    setBusy('copy')
    try {
      const blob = await captureBlob()
      if (navigator.clipboard && 'ClipboardItem' in window) {
        await navigator.clipboard.write([
          new ClipboardItem({ 'image/png': blob }),
        ])
        flash('ok', '已复制到剪贴板')
      } else {
        flash('err', '当前浏览器不支持复制图片，请改用下载')
      }
    } catch {
      flash('err', '复制失败，可改用下载')
    } finally {
      setBusy(null)
    }
  }, [captureBlob, flash])

  const handleFontDownload = useCallback(
    async (font: FontItem, event: MouseEvent) => {
      event.stopPropagation()
      setFontDownloadingId(font.id)
      try {
        const result = await downloadFontFile(font)
        flash(
          'ok',
          result === 'saved'
            ? `已开始下载「${font.name}」`
            : `已打开「${font.name}」下载页`,
        )
      } catch {
        flash('err', `「${font.name}」下载失败`)
      } finally {
        setFontDownloadingId(null)
      }
    },
    [flash],
  )

  const actionButtons = (
    <>
      <button
        type="button"
        className="fontcard-btn primary"
        onClick={() => void handleDownload()}
        disabled={!!busy || loading}
      >
        {busy === 'download' ? '导出中…' : '下载卡片'}
      </button>
      <button
        type="button"
        className="fontcard-btn ghost"
        onClick={() => void handleCopy()}
        disabled={!!busy || loading}
      >
        {busy === 'copy' ? '复制中…' : '复制图片'}
      </button>
    </>
  )

  return (
    <div className="fontcard-root">
      <div className="fontcard-atmosphere" aria-hidden="true" />
      <Link className="fontcard-back" href="/#projects">
        ← GapLab
      </Link>
      <header className="fontcard-topbar">
        <div className="fontcard-brand">
          <span className="fontcard-brand-mark">字</span>
          <div>
            <h1>Font Card</h1>
            <p>Commercial fonts · Card studio</p>
          </div>
        </div>
        <div className="fontcard-tabs" role="tablist" aria-label="字体语言">
          <button
            type="button"
            role="tab"
            aria-selected={category === 'zh'}
            className={category === 'zh' ? 'active' : ''}
            onClick={() => switchCategory('zh')}
          >
            中文
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={category === 'en'}
            className={category === 'en' ? 'active' : ''}
            onClick={() => switchCategory('en')}
          >
            英文
          </button>
        </div>
      </header>

      <div className="fontcard-workspace">
        <aside className="fontcard-font-panel">
          <div className="fontcard-panel-head">
            <h2>选择字体</h2>
            <span>{fonts.length} 款可商用</span>
          </div>
          <ul className="fontcard-font-list">
            {fonts.map((font) => {
              const active = font.id === selected?.id
              return (
                <li key={font.id} className="fontcard-font-row">
                  <button
                    type="button"
                    className={
                      active ? 'fontcard-font-item active' : 'fontcard-font-item'
                    }
                    onClick={() => setSelectedId(font.id)}
                  >
                    <span className="fontcard-font-item-name">{font.name}</span>
                    <span className="fontcard-font-item-desc">
                      {font.description}
                    </span>
                    <span className="fontcard-font-item-license">
                      {font.license}
                    </span>
                  </button>
                  <button
                    type="button"
                    className="fontcard-font-dl"
                    title={`获取字体文件 ${font.name}`}
                    aria-label={`获取字体文件 ${font.name}`}
                    disabled={fontDownloadingId === font.id}
                    onClick={(e) => void handleFontDownload(font, e)}
                  >
                    {fontDownloadingId === font.id ? '…' : '字体文件'}
                  </button>
                </li>
              )
            })}
          </ul>
        </aside>

        <section className="fontcard-preview-panel">
          <div className="fontcard-controls">
            <label className="fontcard-field">
              <span>预览文字</span>
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                rows={3}
                placeholder={category === 'zh' ? DEFAULT_ZH : DEFAULT_EN}
                maxLength={80}
              />
            </label>

            <div className="fontcard-field">
              <span>卡片颜色</span>
              <div
                className="fontcard-swatch-list"
                role="listbox"
                aria-label="卡片颜色"
              >
                {CARD_COLORS.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    role="option"
                    aria-selected={c.id === colorId}
                    className={
                      c.id === colorId
                        ? 'fontcard-swatch active'
                        : 'fontcard-swatch'
                    }
                    title={`${c.label} · ${c.value} / ${c.ink}`}
                    onClick={() => setColorId(c.id)}
                  >
                    <span
                      className="fontcard-swatch-chip"
                      style={{
                        background: `linear-gradient(135deg, ${c.value} 55%, ${c.ink} 55%)`,
                      }}
                    />
                    <span className="fontcard-swatch-label">{c.label}</span>
                  </button>
                ))}
              </div>
              <p className="fontcard-color-readout">
                {color.label} · {color.value} / {color.ink}
              </p>
            </div>

            <div className="fontcard-actions fontcard-actions-desktop">
              {actionButtons}
            </div>
            {feedback && (
              <p className={`fontcard-feedback ${feedback.type}`} role="status">
                {feedback.text}
              </p>
            )}
          </div>

          <div className="fontcard-stage">
            <div
              ref={cardRef}
              className={`fontcard-card ${inkOnDark ? 'dark' : ''}`}
              style={
                {
                  backgroundColor: color.value,
                  color: color.ink,
                } as CSSProperties
              }
            >
              <div className="fontcard-card-grain" aria-hidden="true" />
              <p
                key={`${selected?.id}-${family}`}
                className={`fontcard-card-text ${ready ? 'ready' : 'loading'}`}
                style={{
                  fontFamily: `"${family}", "Songti SC", "Noto Serif SC", serif`,
                  color: color.ink,
                }}
              >
                {previewText}
              </p>
              <footer
                className="fontcard-card-meta"
                style={{ color: color.ink }}
              >
                <span>{selected?.name}</span>
                <span>https://vikigaplab.com/</span>
              </footer>
            </div>
            <p className="fontcard-stage-hint">
              {loading
                ? '字体加载中…'
                : fontError
                  ? `字体加载异常：${fontError}`
                  : ready
                    ? '预览已就绪'
                    : '等待字体'}
            </p>
            <div className="fontcard-mobile-dock">{actionButtons}</div>
          </div>
        </section>
      </div>
    </div>
  )
}
