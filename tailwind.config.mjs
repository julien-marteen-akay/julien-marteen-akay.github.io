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
  
  // Light Mode Base
  light: '#f8f9fa', // Slightly off-white background
  text_primary_light: '#212529', // Dark gray for primary text
  text_secondary_light: '#6c757d', // Lighter gray for secondary text
  border_light_light: '#dee2e6',
  border_dark_light: '#adb5bd',
  bg_subtle_light: 'rgba(0, 0, 0, 0.03)',

  // Accents (Shared, adjust text color based on background)
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
  darkMode: 'class',
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
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      // Updated typography for new palette
      typography: (theme) => ({
        DEFAULT: { // Light Mode Styles
          css: {
            '--tw-prose-body': colors.text_primary_light,
            '--tw-prose-headings': colors.text_primary_light,
            '--tw-prose-lead': colors.text_secondary_light,
            '--tw-prose-links': colors.accent_blue,
            '--tw-prose-bold': colors.text_primary_light,
            '--tw-prose-counters': colors.text_secondary_light,
            '--tw-prose-bullets': colors.border_dark_light,
            '--tw-prose-hr': colors.border_light_light,
            '--tw-prose-quotes': colors.text_primary_light,
            '--tw-prose-quote-borders': colors.border_light_light,
            '--tw-prose-captions': colors.text_secondary_light,
            '--tw-prose-code': colors.accent_magenta,
            '--tw-prose-pre-code': colors.text_secondary_dark, // Keep dark code text
            '--tw-prose-pre-bg': colors.dark, // Keep dark code background
            '--tw-prose-th-borders': colors.border_dark_light,
            '--tw-prose-td-borders': colors.border_light_light,
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