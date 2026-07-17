export type LangCategory = 'zh' | 'en'

export type FontDownload =
  | { mode: 'file'; url: string; filename: string }
  | { mode: 'page'; url: string }

export type FontSource =
  | { kind: 'zeoseven'; id: number; family: string }
  | { kind: 'google'; family: string; cssFamily: string }
  | { kind: 'local'; family: string; files: string[] }

export interface FontItem {
  id: string
  name: string
  nameEn?: string
  category: LangCategory
  description: string
  license: string
  source: FontSource
  defaultText: string
  download: FontDownload
}

export const DEFAULT_ZH = '人生易如反掌'
export const DEFAULT_EN = 'have a nice day'

const zsPage = (id: number): FontDownload => ({
  mode: 'page',
  url: `https://fonts.zeoseven.com/items/${id}/`,
})

const gfFile = (path: string, filename: string): FontDownload => ({
  mode: 'file',
  url: `https://raw.githubusercontent.com/google/fonts/main/${path}`,
  filename,
})

/** 已排除：台湾教育部标准隶书、fzm Old Typewriter、Radio Newsman 等 */
export const FONTS: FontItem[] = [
  {
    id: 'huiwen-mincho',
    name: '汇文明朝体',
    nameEn: 'Huiwen Mincho',
    category: 'zh',
    description: '经典明朝体风格',
    license: '作者声明（可免费商用）',
    source: { kind: 'zeoseven', id: 256, family: 'Huiwen-mincho' },
    defaultText: DEFAULT_ZH,
    download: zsPage(256),
  },
  {
    id: 'kinghwa-oldsong',
    name: '京华老宋体',
    nameEn: 'KingHwa OldSong',
    category: 'zh',
    description: '老式宋体，复古感强',
    license: '作者声明（可免费商用）',
    source: { kind: 'zeoseven', id: 309, family: 'KingHwaOldSong' },
    defaultText: DEFAULT_ZH,
    download: zsPage(309),
  },
  {
    id: 'nzgr-kangxi',
    name: '润植家康熙字典美化体',
    nameEn: 'nzgrKangxi',
    category: 'zh',
    description: '康熙字典风格美化',
    license: '作者声明（可免费商用）',
    source: { kind: 'zeoseven', id: 661, family: 'nzgrKangxi' },
    defaultText: DEFAULT_ZH,
    download: zsPage(661),
  },
  {
    id: 'qijic',
    name: '黄令东齐伋复刻体',
    nameEn: 'QIJIC',
    category: 'zh',
    description: '复古刻体复刻',
    license: 'OFL-1.1（可免费商用）',
    source: { kind: 'zeoseven', id: 81, family: 'QIJIC' },
    defaultText: DEFAULT_ZH,
    download: {
      mode: 'page',
      url: 'https://github.com/LingDong-/qiji-font',
    },
  },
  {
    id: 'xiangcui-daziji',
    name: '香萃打字机体',
    nameEn: 'Xiangcui Dazijiti',
    category: 'zh',
    description: '中文打字机风格',
    license: 'OFL-1.1（可免费商用）',
    source: { kind: 'zeoseven', id: 237, family: 'XiangcuiDazijitiW15' },
    defaultText: DEFAULT_ZH,
    download: {
      mode: 'file',
      url: 'https://raw.githubusercontent.com/Miiiller/Xiangcui-Dazijiti/main/%E9%A6%99%E8%90%83%E6%89%93%E5%AD%97%E6%9C%BA%E4%BD%93%20W15.rar',
      filename: 'XiangcuiDazijiti-W15.rar',
    },
  },
  {
    id: 'oradano-gsrr',
    name: 'Oradano-mincho-GSRR',
    nameEn: 'Oradano Mincho GSRR',
    category: 'zh',
    description: '日文印刷体',
    license: '作者声明（可免费商用）',
    source: { kind: 'zeoseven', id: 26, family: 'Oradano-mincho-GSRR' },
    defaultText: DEFAULT_ZH,
    download: zsPage(26),
  },
  {
    id: 'chill-huosong',
    name: '寒蝉活宋体',
    nameEn: 'ChillHuoSong',
    category: 'zh',
    description: '活字印刷宋体',
    license: 'OFL-1.1（可免费商用）',
    source: { kind: 'zeoseven', id: 875, family: 'ChillHuoSong_F' },
    defaultText: DEFAULT_ZH,
    download: {
      mode: 'file',
      url: 'https://github.com/Warren2060/ChillMovableType/releases/download/HuoSongv1.000/ChillHuoSong_F.zip',
      filename: 'ChillHuoSong_F.zip',
    },
  },
  {
    id: 'genwan-min',
    name: '源云明体',
    nameEn: 'GenWan Min',
    category: 'zh',
    description: '开源明体',
    license: 'OFL-1.1（可免费商用）',
    source: { kind: 'zeoseven', id: 301, family: 'GenWanMin2 TC R' },
    defaultText: DEFAULT_ZH,
    download: {
      mode: 'file',
      url: 'https://github.com/ButTaiwan/genwan-font/releases/download/v2.100/GenWanMin2TC-otf.zip',
      filename: 'GenWanMin2TC-otf.zip',
    },
  },
  {
    id: 'qiji-fallback',
    name: '黄令东齐伋体',
    nameEn: 'QIJIFALLBACK',
    category: 'zh',
    description: 'QIJIC 的 fallback 版本',
    license: 'OFL-1.1（可免费商用）',
    source: { kind: 'zeoseven', id: 742, family: 'QIJIFALLBACK' },
    defaultText: DEFAULT_ZH,
    download: {
      mode: 'page',
      url: 'https://github.com/LingDong-/qiji-font',
    },
  },
  {
    id: 'huiwen-fangsong',
    name: '汇文仿宋',
    nameEn: 'Huiwen Fangsong',
    category: 'zh',
    description: '仿宋体',
    license: '作者声明 / OFL（可免费商用）',
    source: { kind: 'zeoseven', id: 440, family: 'Huiwen-Fangsong' },
    defaultText: DEFAULT_ZH,
    download: zsPage(440),
  },
  {
    id: 'cormorant-sc',
    name: 'Cormorant SC',
    category: 'en',
    description: '优雅衬线体',
    license: 'OFL-1.1（可免费商用）',
    source: { kind: 'google', family: 'Cormorant+SC', cssFamily: 'Cormorant SC' },
    defaultText: DEFAULT_EN,
    download: { mode: 'page', url: 'https://fonts.google.com/specimen/Cormorant+SC' },
  },
  {
    id: 'gideon-roman',
    name: 'Gideon Roman',
    category: 'en',
    description: '罗马体',
    license: 'OFL-1.1（可免费商用）',
    source: { kind: 'google', family: 'Gideon+Roman', cssFamily: 'Gideon Roman' },
    defaultText: DEFAULT_EN,
    download: { mode: 'page', url: 'https://fonts.google.com/specimen/Gideon+Roman' },
  },
  {
    id: 'im-fell-sc',
    name: 'IM Fell Great Primer SC',
    category: 'en',
    description: '古典印刷体',
    license: 'OFL-1.1（可免费商用）',
    source: {
      kind: 'google',
      family: 'IM+Fell+Great+Primer+SC',
      cssFamily: 'IM Fell Great Primer SC',
    },
    defaultText: DEFAULT_EN,
    download: {
      mode: 'page',
      url: 'https://fonts.google.com/specimen/IM+Fell+Great+Primer+SC',
    },
  },
  {
    id: 'love-ya',
    name: 'Love Ya Like A Sister',
    category: 'en',
    description: '手写风格',
    license: 'OFL-1.1（可免费商用）',
    source: {
      kind: 'google',
      family: 'Love+Ya+Like+A+Sister',
      cssFamily: 'Love Ya Like A Sister',
    },
    defaultText: DEFAULT_EN,
    download: {
      mode: 'page',
      url: 'https://fonts.google.com/specimen/Love+Ya+Like+A+Sister',
    },
  },
  {
    id: 'special-elite',
    name: 'Special Elite',
    category: 'en',
    description: '经典打字机',
    license: 'Apache-2.0（可免费商用）',
    source: { kind: 'google', family: 'Special+Elite', cssFamily: 'Special Elite' },
    defaultText: DEFAULT_EN,
    download: gfFile(
      'apache/specialelite/SpecialElite-Regular.ttf',
      'SpecialElite-Regular.ttf',
    ),
  },
  {
    id: 'uncial-antiqua',
    name: 'Uncial Antiqua',
    category: 'en',
    description: '安色尔古风体',
    license: 'OFL-1.1（可免费商用）',
    source: { kind: 'google', family: 'Uncial+Antiqua', cssFamily: 'Uncial Antiqua' },
    defaultText: DEFAULT_EN,
    download: { mode: 'page', url: 'https://fonts.google.com/specimen/Uncial+Antiqua' },
  },
  {
    id: 'minya',
    name: 'Minya Regular',
    category: 'en',
    description: '粗糙打字机手感',
    license: 'CC0（可免费商用）',
    source: { kind: 'local', family: 'Minya', files: ['/fontcard/fonts/Minya.otf'] },
    defaultText: DEFAULT_EN,
    download: {
      mode: 'file',
      url: '/fontcard/fonts/Minya.otf',
      filename: 'Minya.otf',
    },
  },
]

/** 卡片底色 + 文字色配对（来自用户附件色卡） */
export const CARD_COLORS = [
  { id: 'malibu', label: '奶油蓝', value: '#F2F0E0', ink: '#3068A4' },
  { id: 'summer', label: '夏日橙', value: '#F5F0A8', ink: '#DC4044' },
  { id: 'noir', label: '墨底粉', value: '#1A181A', ink: '#D480A8' },
  { id: 'navy', label: '宝蓝白', value: '#284090', ink: '#FFFFFF' },
  { id: 'mono', label: '黑白', value: '#FFFFFF', ink: '#111111' },
  { id: 'sky', label: '天蓝黑', value: '#90C8F0', ink: '#111111' },
  { id: 'hotpink', label: '雾粉玫', value: '#D6C6C6', ink: '#E85078' },
] as const

export function isDarkCardBg(hex: string): boolean {
  const n = hex.replace('#', '')
  if (n.length !== 6) return false
  const r = parseInt(n.slice(0, 2), 16)
  const g = parseInt(n.slice(2, 4), 16)
  const b = parseInt(n.slice(4, 6), 16)
  return (r * 299 + g * 587 + b * 114) / 1000 < 128
}

export function getCssFamily(font: FontItem): string {
  if (font.source.kind === 'google') return font.source.cssFamily
  return font.source.family
}

export const EXCLUDED_FONTS = [
  {
    name: '台湾教育部标准隶书',
    reason: 'CC BY-ND 3.0 TW；官方要求「其他使用需求」书面申请，Web 嵌入再分发风险较高',
  },
  {
    name: 'Huiwen-Tsukiji-5-mincho',
    reason: '可商用，但暂无稳定 WebFonts CDN；待补源后加入',
  },
  {
    name: 'fzm Old Typewriter',
    reason: '授权文件缺失，无法确认可免费商用',
  },
  {
    name: 'Radio Newsman',
    reason: '作者声明仅限个人使用，商用需另行授权',
  },
  {
    name: 'X Typewriter',
    reason: 'OFL 可商用，但暂无可靠可再分发字体文件源',
  },
  {
    name: 'GNU Typewriter',
    reason: 'GPL 可商用，但暂无可靠可再分发字体文件源',
  },
  {
    name: 'True Typewriter Polyglott',
    reason: 'OFL 可商用，但暂无可靠可再分发字体文件源',
  },
] as const
