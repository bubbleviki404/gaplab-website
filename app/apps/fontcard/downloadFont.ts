import type { FontDownload, FontItem } from './fonts'

export async function downloadFontFile(font: FontItem): Promise<'saved' | 'opened'> {
  const target = font.download
  if (target.mode === 'page') {
    window.open(target.url, '_blank', 'noopener,noreferrer')
    return 'opened'
  }
  return saveRemoteFile(target)
}

async function saveRemoteFile(target: Extract<FontDownload, { mode: 'file' }>) {
  try {
    const res = await fetch(target.url)
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const blob = await res.blob()
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = target.filename
    a.rel = 'noopener'
    document.body.appendChild(a)
    a.click()
    a.remove()
    URL.revokeObjectURL(url)
    return 'saved' as const
  } catch {
    // Cross-origin or blocked: fall back to opening the URL.
    window.open(target.url, '_blank', 'noopener,noreferrer')
    return 'opened' as const
  }
}
