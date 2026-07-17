import type { Metadata } from 'next'
import { FontCardStudio } from './FontCardStudio'

export const metadata: Metadata = {
  title: 'Font Card｜可商用字体卡片工作室',
  description:
    '挑选可免费商用的中英文字体，预览卡片配色，一键下载或复制 PNG。由 GapLab 制作。',
}

export default function FontCardPage() {
  return (
    <main className="fontcardPage">
      <FontCardStudio />
    </main>
  )
}
