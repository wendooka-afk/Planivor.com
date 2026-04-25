export type ThemeId = 'rainbow' | 'dinosaurs' | 'space' | 'animals' | 'pastel' | 'neutral'

export interface Theme {
  id: ThemeId
  name: string
  emoji: string
  headerBg: string
  headerText: string
  accentBg: string
  accentText: string
  chartBg: string
  cellBg: string
  borderColor: string
  textColor: string
  subtleText: string
  decorEmojis: string[]
  checkColor: string
  badgeBg: string
  badgeText: string
}

export const THEMES: Record<ThemeId, Theme> = {
  rainbow: {
    id: 'rainbow',
    name: 'Rainbow',
    emoji: '🌈',
    headerBg: '#FF6B6B',
    headerText: '#FFFFFF',
    accentBg: '#FFE66D',
    accentText: '#333333',
    chartBg: '#FFF9F0',
    cellBg: '#FFFFFF',
    borderColor: '#FFDAB9',
    textColor: '#333333',
    subtleText: '#888888',
    decorEmojis: ['🌈', '⭐', '🎨', '✨', '🌟'],
    checkColor: '#FF6B6B',
    badgeBg: '#FFE66D',
    badgeText: '#333333',
  },
  dinosaurs: {
    id: 'dinosaurs',
    name: 'Dinosaurs',
    emoji: '🦕',
    headerBg: '#388E3C',
    headerText: '#FFFFFF',
    accentBg: '#C8E6C9',
    accentText: '#1B5E20',
    chartBg: '#F1F8E9',
    cellBg: '#FFFFFF',
    borderColor: '#A5D6A7',
    textColor: '#1B5E20',
    subtleText: '#558B2F',
    decorEmojis: ['🦕', '🦖', '🌿', '🥚', '🌴'],
    checkColor: '#388E3C',
    badgeBg: '#C8E6C9',
    badgeText: '#1B5E20',
  },
  space: {
    id: 'space',
    name: 'Space',
    emoji: '🚀',
    headerBg: '#283593',
    headerText: '#FFFFFF',
    accentBg: '#C5CAE9',
    accentText: '#1A237E',
    chartBg: '#E8EAF6',
    cellBg: '#FFFFFF',
    borderColor: '#9FA8DA',
    textColor: '#1A237E',
    subtleText: '#5C6BC0',
    decorEmojis: ['🚀', '⭐', '🌙', '🪐', '☄️'],
    checkColor: '#3949AB',
    badgeBg: '#C5CAE9',
    badgeText: '#1A237E',
  },
  animals: {
    id: 'animals',
    name: 'Animals',
    emoji: '🐾',
    headerBg: '#E65100',
    headerText: '#FFFFFF',
    accentBg: '#FFE0B2',
    accentText: '#BF360C',
    chartBg: '#FFF8E1',
    cellBg: '#FFFFFF',
    borderColor: '#FFCC80',
    textColor: '#3E2723',
    subtleText: '#795548',
    decorEmojis: ['🐶', '🐱', '🐻', '🐰', '🦊'],
    checkColor: '#E65100',
    badgeBg: '#FFE0B2',
    badgeText: '#BF360C',
  },
  pastel: {
    id: 'pastel',
    name: 'Minimal Pastel',
    emoji: '🌸',
    headerBg: '#EC407A',
    headerText: '#FFFFFF',
    accentBg: '#FCE4EC',
    accentText: '#880E4F',
    chartBg: '#FDF6FF',
    cellBg: '#FFFFFF',
    borderColor: '#F48FB1',
    textColor: '#4A148C',
    subtleText: '#AD1457',
    decorEmojis: ['🌸', '🌷', '🦋', '☁️', '🌺'],
    checkColor: '#EC407A',
    badgeBg: '#FCE4EC',
    badgeText: '#880E4F',
  },
  neutral: {
    id: 'neutral',
    name: 'Neutral Clean',
    emoji: '✏️',
    headerBg: '#37474F',
    headerText: '#FFFFFF',
    accentBg: '#ECEFF1',
    accentText: '#263238',
    chartBg: '#FAFAFA',
    cellBg: '#FFFFFF',
    borderColor: '#CFD8DC',
    textColor: '#212121',
    subtleText: '#607D8B',
    decorEmojis: ['⭐', '✓', '📋', '🏆', '🌟'],
    checkColor: '#37474F',
    badgeBg: '#ECEFF1',
    badgeText: '#263238',
  },
}

export const THEME_LIST = Object.values(THEMES)
