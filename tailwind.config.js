const { palette } = require('./src/theme/palette');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  presets: [require('nativewind/preset')],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          primary: palette.background.primary,
          secondary: palette.background.secondary,
          tertiary: palette.background.tertiary,
        },
        text: {
          primary: palette.text.primary,
          secondary: palette.text.secondary,
          disabled: palette.text.disabled,
        },
        accent: {
          primary: palette.accent.primary,
          light: palette.accent.light,
          shadow: palette.accent.shadow,
        },
        border: {
          light: palette.border.light,
          accent: palette.border.accent,
        },
        status: {
          success: palette.status.success,
          pending: palette.status.pending,
        },
      },
      borderRadius: {},
    },
  },
  plugins: [],
};
