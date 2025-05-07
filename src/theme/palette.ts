export const palette = {
  primary: '#3AAEBB',
  primaryLight: '#BDE9EF',
  primaryDark: '#2A96A6',

  background: '#F8F9FA',
  backgroundDark: '#121212',
  cardBackground: '#FFFFFF',
  cardBackgroundDark: '#1E1E1E',

  textPrimary: '#202124',
  textPrimaryDark: '#E1E1E1',
  textSecondary: '#5F6368',
  textSecondaryDark: '#A1A1A1',
  textAccent: '#E94C89',

  tabBarBackground: '#F1F3F4',
  tabBarBackgroundDark: '#2D2D2D',
  tabBarActive: '#3AAEBB',
  tabBarInactive: '#5F6368',
  tabBarInactiveDark: '#8E8E8E',

  calendarSelected: '#3AAEBB',
  calendarToday: '#E8EAED',
  calendarTodayDark: '#2D2D2D',
  actionButton: '#3AAEBB',
  premiumBadge: '#E8F4F6',
  premiumBadgeDark: '#253739',

  switchInactive: '#E1E1E1',
  switchActive: '#3AAEBB',

  iconLightGray: '#A1A1A1',
  iconDarkGray: '#5F6368',

  blue: '#1A73E8',
  blueLight: '#3AAEBB',
  yellow: '#F9AB00',
};

export const accentColors = {
  blue: {
    primary: '#1A73E8',
    primaryLight: '#D2E3FC',
    primaryDark: '#1967D2',
    calendarSelected: '#1A73E8',
    actionButton: '#1A73E8',
    switchActive: '#1A73E8',
    bgTab: '#F3F8FE',
  },
  skyblue: {
    primary: '#3AAEBB',
    primaryLight: '#BDE9EF',
    primaryDark: '#2A96A6',
    calendarSelected: '#3AAEBB',
    actionButton: '#3AAEBB',
    switchActive: '#3AAEBB',
    bgTab: '#F1FBFC',
  },
  yellow: {
    primary: '#F9AB00',
    primaryLight: '#FEF7E0',
    primaryDark: '#E09600',
    calendarSelected: '#F9AB00',
    actionButton: '#F9AB00',
    switchActive: '#F9AB00',
    bgTab: '#FFFBEA',
  },
};

// Accent colors keys type
export type AccentColorVariantType = keyof (typeof accentColors)[keyof typeof accentColors];
