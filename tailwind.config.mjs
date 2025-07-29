/** @type {import('tailwindcss').Config} */

// Define the color palettes
const colors = {
  // Dark Mode Base
  dark: '#0d1117',          // Slightly bluer dark (like GitHub dark)
  text_primary_dark: '#f0f6fc',     // Softer white
  text_secondary_dark: '#8b949e',   // Warmer gray
  border_light_dark: '#30363d',     // Lighter border
  border_dark_dark: '#21262d',      // Darker border
  bg_subtle_dark: 'rgba(255, 255, 255, 0.03)', // More subtle
  
  // Light Mode Base
  light: '#ffffff', 
  text_primary_light: '#000000', 
  text_secondary_light: '#4a5568', 
  border_light_light: '#e2e8f0',
  border_dark_light: '#a0aec0',
  bg_subtle_light: 'rgba(0, 0, 0, 0.04)',

  // Refined Accents (More accessible, less harsh)
  accent_cyan: '#58a6ff',     // GitHub blue - professional yet vibrant
  accent_yellow: '#f9c23c',   // Warmer, less harsh yellow  
  accent_magenta: '#bc8cff',  // Softer purple/magenta
  accent_blue: '#409eff',     // Balanced blue
  accent_orange: '#ff9500',   // Apple orange
  accent_green: '#3fb950',    // GitHub green
  accent_red: '#f85149',      // Softer red

  // Light Mode Accent Colors (darker for contrast on white)
  accent_cyan_light: '#0366d6',    // Darker blue for light mode
  accent_yellow_light: '#d1a000',  // Darker yellow for light mode
  accent_blue_light: '#0056b3',    // Darker blue for light mode
  accent_orange_light: '#d45d00',  // Darker orange for light mode
};

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class', // Keep class strategy, even though only dark is used
  theme: {
    extend: {
      colors: {
        // Make palettes available
        dark: colors.dark,
        light: colors.light,
        text_primary_dark: colors.text_primary_dark,
        text_secondary_dark: colors.text_secondary_dark,
        border_light_dark: colors.border_light_dark,
        border_dark_dark: colors.border_dark_dark,
        bg_subtle_dark: colors.bg_subtle_dark,
        text_primary_light: colors.text_primary_light,
        text_secondary_light: colors.text_secondary_light,
        border_light_light: colors.border_light_light,
        border_dark_light: colors.border_dark_light,
        bg_subtle_light: colors.bg_subtle_light,
        // Accents
        accent_cyan: colors.accent_cyan,
        accent_yellow: colors.accent_yellow,
        accent_magenta: colors.accent_magenta,
        accent_blue: colors.accent_blue,
        accent_orange: colors.accent_orange,
        accent_green: colors.accent_green,
        accent_red: colors.accent_red,
        // Light mode accents
        accent_cyan_light: colors.accent_cyan_light,
        accent_yellow_light: colors.accent_yellow_light,
        accent_blue_light: colors.accent_blue_light,
        accent_orange_light: colors.accent_orange_light,
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      // Updated typography for both light and dark modes
      typography: (theme) => ({
        DEFAULT: { // Light Mode Styles
          css: {
            '--tw-prose-body': colors.text_primary_light,
            '--tw-prose-headings': colors.accent_cyan_light,
            '--tw-prose-lead': colors.text_secondary_light,
            '--tw-prose-links': colors.accent_blue_light,
            '--tw-prose-bold': colors.accent_yellow_light,
            '--tw-prose-hr': colors.border_dark_light,
            '--tw-prose-quotes': colors.text_primary_light,
            '--tw-prose-quote-borders': colors.border_light_light,
            '--tw-prose-code': colors.accent_magenta,
            '--tw-prose-pre-bg': colors.light,
            '--tw-prose-pre-code': colors.text_secondary_light,
            '--tw-prose-th-borders': colors.border_light_light,
            '--tw-prose-td-borders': colors.border_dark_light,
          },
        },
        invert: { // Dark Mode Styles
          css: {
            '--tw-prose-body': colors.text_primary_dark,
            '--tw-prose-headings': colors.accent_cyan,
            '--tw-prose-lead': colors.text_secondary_dark,
            '--tw-prose-links': colors.accent_blue,
            '--tw-prose-bold': colors.accent_yellow,
            '--tw-prose-hr': colors.border_dark_dark,
            '--tw-prose-quotes': colors.text_primary_dark,
            '--tw-prose-quote-borders': colors.border_light_dark,
            '--tw-prose-code': colors.accent_magenta,
            '--tw-prose-pre-bg': colors.dark,
            '--tw-prose-pre-code': colors.text_secondary_dark,
            '--tw-prose-th-borders': colors.border_light_dark,
            '--tw-prose-td-borders': colors.border_dark_dark,
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 