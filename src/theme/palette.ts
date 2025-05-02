// palette.ts

const palette = {
  // Primary Colors - Default Teal
  primary: "#3AAEBB", // Teal/turquoise color from the selected date and floating action button
  primaryLight: "#BDE9EF", // Lighter version for selections/backgrounds
  primaryDark: "#2A96A6", // Darker version for active states

  // UI Colors
  background: "#F8F9FA", // App background (light gray)
  backgroundDark: "#121212", // Dark mode background
  cardBackground: "#FFFFFF", // Task card background
  cardBackgroundDark: "#1E1E1E", // Dark mode card background

  // Text Colors
  textPrimary: "#202124", // Primary text (Today header)
  textPrimaryDark: "#E1E1E1", // Dark mode primary text
  textSecondary: "#5F6368", // Secondary text (dates)
  textSecondaryDark: "#A1A1A1", // Dark mode secondary text
  textAccent: "#E94C89", // Accent text color (the pink "Task" label)

  // Interactive Elements
  tabBarBackground: "#F1F3F4", // Bottom tab bar background
  tabBarBackgroundDark: "#2D2D2D", // Dark mode tab bar background
  tabBarActive: "#3AAEBB", // Active tab indicator
  tabBarInactive: "#5F6368", // Inactive tab color
  tabBarInactiveDark: "#8E8E8E", // Dark mode inactive tab color

  // Functional Colors
  calendarSelected: "#3AAEBB", // Selected calendar date background
  calendarToday: "#E8EAED", // Today's date background (if not selected)
  calendarTodayDark: "#2D2D2D", // Dark mode today's date background
  actionButton: "#3AAEBB", // Floating action button
  premiumBadge: "#E8F4F6", // Premium badge background
  premiumBadgeDark: "#253739", // Dark mode premium badge background

  // Switch elements
  switchInactive: "#E1E1E1", // Inactive switch background
  switchActive: "#3AAEBB", // Active switch background

  // Accent color options
  blue: "#1A73E8", // Blue accent
  blueLight: "#3AAEBB", // Light blue accent (our default teal)
  yellow: "#F9AB00", // Yellow accent
};

// Accent color palettes - variations for each accent
export const accentColors = {
  blue: {
    primary: "#1A73E8",
    primaryLight: "#D2E3FC",
    primaryDark: "#1967D2",
    calendarSelected: "#1A73E8",
    actionButton: "#1A73E8",
    switchActive: "#1A73E8",
  },
  lightBlue: {
    primary: "#3AAEBB",
    primaryLight: "#BDE9EF",
    primaryDark: "#2A96A6",
    calendarSelected: "#3AAEBB",
    actionButton: "#3AAEBB",
    switchActive: "#3AAEBB",
  },
  yellow: {
    primary: "#F9AB00",
    primaryLight: "#FEF7E0",
    primaryDark: "#E09600",
    calendarSelected: "#F9AB00",
    actionButton: "#F9AB00",
    switchActive: "#F9AB00",
  },
};

export default palette;
