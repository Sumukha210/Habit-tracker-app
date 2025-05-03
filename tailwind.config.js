import { accentColors, palette } from './src/theme/palette';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  presets: [require('nativewind/preset')],
  darkMode: 'class', // Enable dark mode with class-based approach
  theme: {
    extend: {
      colors: {
        primary: palette.primary,
        'primary-dark': palette.primaryDark,
        'primary-light': palette.primaryLight,
        background: palette.background,
        'background-dark': palette.backgroundDark,
        'card-bg': palette.cardBackground,
        'card-bg-dark': palette.cardBackgroundDark,
        'input-bg': palette.inputBg,
        'text-primary': palette.textPrimary,
        'text-primary-dark': palette.textPrimaryDark,
        'text-secondary': palette.textSecondary,
        'text-secondary-dark': palette.textSecondaryDark,
        'switch-inactive': palette.switchInactive,
        'switch-active': palette.switchActive,
        'calendar-selected': palette.calendarSelected,
        'calendar-today': palette.calendarToday,
        'calendar-today-dark': palette.calendarTodayDark,
        blue: palette.blue,
        'blue-light': accentColors.blue.primaryLight,
        'blue-dark': accentColors.blue.primaryDark,
        yellow: palette.yellow,
        'yellow-light': accentColors.yellow.primaryLight,
        'yellow-dark': accentColors.yellow.primaryDark,
        'light-blue': palette.blueLight,
        'light-blue-light': accentColors.skyblue.primaryLight,
        'light-blue-dark': accentColors.skyblue.primaryDark,
        purple: palette.purple,
        teal: palette.teal,
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
      },
    },
  },
  plugins: [],
};
