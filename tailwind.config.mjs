/** @type {import('tailwindcss').Config} */

// Define the color palette
const colors = {
  // Base
  dark: '#1a1a1a', // Slightly softer dark background
  light: '#ffffff',
  // Text
  text_primary: '#e0e0e0', // Off-white for primary text
  text_secondary: '#a0a0a0', // Gray for secondary text
  // Accents (from retro palette)
  accent_cyan: '#00ffff',
  accent_yellow: '#ffff00',
  accent_magenta: '#ff00ff',
  // Other retro colors for potential use
  accent_blue: '#00a0ff',
  accent_orange: '#ff8c00',
  accent_green: '#32cd32',
  accent_red: '#ff4136',
  // Standard grays for borders, etc.
  border_light: '#444444',
  border_dark: '#2a2a2a',
  bg_subtle: 'rgba(255, 255, 255, 0.05)', // Subtle background for cards/hovers
};

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Make palette available to Tailwind
        dark: colors.dark,
        light: colors.light,
        text_primary: colors.text_primary,
        text_secondary: colors.text_secondary,
        accent_cyan: colors.accent_cyan,
        accent_yellow: colors.accent_yellow,
        accent_magenta: colors.accent_magenta,
        accent_blue: colors.accent_blue,
        accent_orange: colors.accent_orange,
        accent_green: colors.accent_green,
        accent_red: colors.accent_red,
        border_light: colors.border_light,
        border_dark: colors.border_dark,
        bg_subtle: colors.bg_subtle,
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      // Updated typography for new palette
      typography: (theme) => ({
        DEFAULT: { // Light Mode Styles (adjust if needed)
          css: {
            '--tw-prose-body': theme('colors.gray.700'),
            '--tw-prose-headings': theme('colors.gray.900'),
            '--tw-prose-links': theme('colors.accent_blue'),
            '--tw-prose-bold': theme('colors.gray.900'),
            '--tw-prose-code': theme('colors.accent_magenta'),
            '--tw-prose-pre-bg': theme('colors.gray.800'), 
            '--tw-prose-pre-code': theme('colors.gray.200'),
            // Add other light mode styles if default typography plugin isn't sufficient
          },
        },
        invert: { // Dark Mode Styles
          css: {
            '--tw-prose-body': colors.text_primary,
            '--tw-prose-headings': colors.accent_cyan,
            '--tw-prose-links': colors.accent_blue,
            '--tw-prose-bold': colors.accent_yellow,
            '--tw-prose-hr': colors.border_dark,
            '--tw-prose-quotes': colors.text_secondary,
            '--tw-prose-quote-borders': colors.border_light,
            '--tw-prose-code': colors.accent_magenta,
            '--tw-prose-pre-bg': colors.dark, // Use main dark bg for code blocks
            '--tw-prose-pre-code': colors.text_secondary,
            '--tw-prose-th-borders': colors.border_light,
            '--tw-prose-td-borders': colors.border_dark,
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 