/** @type {import('tailwindcss').Config} */

// Define the color palettes
const colors = {
  // Dark Mode Base
  dark: '#1a1a1a',
  text_primary_dark: '#e0e0e0',
  text_secondary_dark: '#a0a0a0',
  border_light_dark: '#444444',
  border_dark_dark: '#2a2a2a',
  bg_subtle_dark: 'rgba(255, 255, 255, 0.05)',
  
  // Light Mode Base Removed
  // light: '#f8f9fa', 
  // text_primary_light: '#212529', 
  // text_secondary_light: '#6c757d', 
  // border_light_light: '#dee2e6',
  // border_dark_light: '#adb5bd',
  // bg_subtle_light: 'rgba(0, 0, 0, 0.03)',

  // Accents (Shared)
  accent_cyan: '#00ffff',
  accent_yellow: '#ffff00',
  accent_magenta: '#ff00ff',
  accent_blue: '#00a0ff',
  accent_orange: '#ff8c00',
  accent_green: '#32cd32',
  accent_red: '#ff4136',
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