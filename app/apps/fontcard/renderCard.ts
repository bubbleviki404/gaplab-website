export interface CardExportInput {
  text: string
  family: string
  background: string
  ink: string
  metaLeft: string
  metaRight: string
  darkBg?: boolean
  width?: number
  height?: number
  pixelRatio?: number
}

function paintGrain(ctx: CanvasRenderingContext2D, w: number, h: number, dark: boolean) {
  const tile = 128
  const noise = document.createElement('canvas')
  noise.width = tile
  noise.height = tile
  const nctx = noise.getContext('2d')
  if (!nctx) return
  const image = nctx.createImageData(tile, tile)
  const data = image.data
  for (let i = 0; i < data.length; i += 4) {
    const v = Math.random() * 255
    data[i] = v
    data[i + 1] = v
    data[i + 2] = v
    data[i + 3] = 255
  }
  nctx.putImageData(image, 0, 0)

  ctx.save()
  ctx.globalAlpha = dark ? 0.12 : 0.14
  ctx.globalCompositeOperation = dark ? 'screen' : 'multiply'
  const pattern = ctx.createPattern(noise, 'repeat')
  if (pattern) {
    ctx.fillStyle = pattern
    ctx.fillRect(0, 0, w, h)
  }
  ctx.restore()
}

function wrapLines(
  ctx: CanvasRenderingContext2D,
  text: string,
  maxWidth: number,
): string[] {
  const lines: string[] = []
  const paragraphs = text.split(/\n/)
  for (const para of paragraphs) {
    if (!para) {
      lines.push('')
      continue
    }
    let line = ''
    for (const ch of para) {
      const next = line + ch
      if (ctx.measureText(next).width > maxWidth && line) {
        lines.push(line)
        line = ch
      } else {
        line = next
      }
    }
    if (line) lines.push(line)
  }
  return lines.length ? lines : ['']
}

export async function renderCardPng(input: CardExportInput): Promise<Blob> {
  const width = input.width ?? 1200
  const height = input.height ?? 800
  const ratio = input.pixelRatio ?? 2
  const canvas = document.createElement('canvas')
  canvas.width = width * ratio
  canvas.height = height * ratio
  const ctx = canvas.getContext('2d')
  if (!ctx) throw new Error('Canvas 不可用')

  ctx.scale(ratio, ratio)
  ctx.fillStyle = input.background
  ctx.fillRect(0, 0, width, height)
  paintGrain(ctx, width, height, Boolean(input.darkBg))

  await document.fonts.load(`64px "${input.family}"`, input.text)
  await document.fonts.ready

  const fontSize = Math.min(72, Math.max(36, Math.floor(width / Math.max(8, input.text.length * 0.9))))
  ctx.fillStyle = input.ink
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.font = `${fontSize}px "${input.family}", "Courier New", monospace`

  const maxTextWidth = width * 0.82
  const lines = wrapLines(ctx, input.text, maxTextWidth)
  const lineHeight = fontSize * 1.28
  const blockHeight = lines.length * lineHeight
  const startY = height / 2 - blockHeight / 2 + lineHeight / 2
  lines.forEach((line, i) => {
    ctx.fillText(line, width / 2, startY + i * lineHeight)
  })

  ctx.font = `11px "IBM Plex Mono", ui-monospace, monospace`
  ctx.textAlign = 'left'
  ctx.textBaseline = 'alphabetic'
  ctx.globalAlpha = 0.55
  ctx.fillText(input.metaLeft.toUpperCase(), 36, height - 28)
  ctx.textAlign = 'right'
  ctx.fillText(input.metaRight, width - 36, height - 28)
  ctx.globalAlpha = 1

  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => (blob ? resolve(blob) : reject(new Error('导出失败'))),
      'image/png',
    )
  })
}

export async function blobToDownloadUrl(blob: Blob): Promise<string> {
  return URL.createObjectURL(blob)
}
