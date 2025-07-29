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
  
  // Light Mode Base Removed
  // light: '#f8f9fa', 
  // text_primary_light: '#212529', 
  // text_secondary_light: '#6c757d', 
  // border_light_light: '#dee2e6',
  // border_dark_light: '#adb5bd',
  // bg_subtle_light: 'rgba(0, 0, 0, 0.03)',

  // Refined Accents (More accessible, less harsh)
  accent_cyan: '#58a6ff',     // GitHub blue - professional yet vibrant
  accent_yellow: '#f9c23c',   // Warmer, less harsh yellow  
  accent_magenta: '#bc8cff',  // Softer purple/magenta
  accent_blue: '#409eff',     // Balanced blue
  accent_orange: '#ff9500',   // Apple orange
  accent_green: '#3fb950',    // GitHub green
  accent_red: '#f85149',      // Softer red
};

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class', // Keep class strategy, even though only dark is used
  theme: {
    extend: {
      colors: {
        // Make palettes available
        dark: colors.dark,
        // light: colors.light, // Removed
        text_primary_dark: colors.text_primary_dark,
        text_secondary_dark: colors.text_secondary_dark,
        border_light_dark: colors.border_light_dark,
        border_dark_dark: colors.border_dark_dark,
        bg_subtle_dark: colors.bg_subtle_dark,
        // text_primary_light: colors.text_primary_light, // Removed
        // text_secondary_light: colors.text_secondary_light, // Removed
        // border_light_light: colors.border_light_light, // Removed
        // border_dark_light: colors.border_dark_light, // Removed
        // bg_subtle_light: colors.bg_subtle_light, // Removed
        // Accents
        accent_cyan: colors.accent_cyan,
        accent_yellow: colors.accent_yellow,
        accent_magenta: colors.accent_magenta,
        accent_blue: colors.accent_blue,
        accent_orange: colors.accent_orange,
        accent_green: colors.accent_green,
        accent_red: colors.accent_red,
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      // Updated typography for dark mode only
      typography: (theme) => ({
        // DEFAULT (Light Mode) styles removed
        invert: { // Dark Mode Styles (becomes the default prose style now)
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