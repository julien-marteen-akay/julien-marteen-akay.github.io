/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class', // Use class strategy
  theme: {
    extend: {
      colors: {
        // Retro color palette from DESIGN_DOC.md
        'retro-blue': '#00a0ff',
        'retro-orange': '#ff8c00',
        'retro-green': '#32cd32',
        'retro-red': '#ff4136',
        'retro-cyan': '#00ffff',
        'retro-yellow': '#ffff00',
        'retro-magenta': '#ff00ff'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        // Add other fonts later if needed
      },
      // Extend typography styles for dark mode
      typography: (theme) => ({
        DEFAULT: {
          css: {
            // Light mode prose styles
            '--tw-prose-body': theme('colors.gray[700]'),
            '--tw-prose-headings': theme('colors.gray[900]'),
            '--tw-prose-lead': theme('colors.gray[600]'),
            '--tw-prose-links': theme('colors.retro-blue'), // Keep retro blue for links
            '--tw-prose-bold': theme('colors.gray[900]'),
            '--tw-prose-counters': theme('colors.gray[500]'),
            '--tw-prose-bullets': theme('colors.gray[300]'),
            '--tw-prose-hr': theme('colors.gray[200]'),
            '--tw-prose-quotes': theme('colors.gray[900]'),
            '--tw-prose-quote-borders': theme('colors.gray[200]'),
            '--tw-prose-captions': theme('colors.gray[500]'),
            '--tw-prose-code': theme('colors.retro-magenta'), // Keep retro magenta for code
            '--tw-prose-pre-code': theme('colors.gray[200]'),
            '--tw-prose-pre-bg': theme('colors.gray[800]'), // Keep dark code blocks? Or use light?
            '--tw-prose-th-borders': theme('colors.gray[300]'),
            '--tw-prose-td-borders': theme('colors.gray[200]'),
            // Explicitly define light mode vars matching above for clarity
            '--tw-prose-invert-body': theme('colors.gray[700]'), 
            '--tw-prose-invert-headings': theme('colors.gray[900]'),
            '--tw-prose-invert-lead': theme('colors.gray[600]'),
            '--tw-prose-invert-links': theme('colors.retro-blue'),
            '--tw-prose-invert-bold': theme('colors.gray[900]'),
            // ... add others if needed
          },
        },
        invert: {
          css: { // Dark mode prose styles (using retro colors)
            '--tw-prose-body': theme('colors.gray[300]'),
            '--tw-prose-headings': theme('colors.retro-cyan'),
            '--tw-prose-lead': theme('colors.gray[400]'),
            '--tw-prose-links': theme('colors.retro-blue'),
            '--tw-prose-bold': theme('colors.retro-yellow'),
            '--tw-prose-counters': theme('colors.gray[400]'),
            '--tw-prose-bullets': theme('colors.gray[600]'),
            '--tw-prose-hr': theme('colors.gray[700]'),
            '--tw-prose-quotes': theme('colors.gray[200]'),
            '--tw-prose-quote-borders': theme('colors.gray[700]'),
            '--tw-prose-captions': theme('colors.gray[400]'),
            '--tw-prose-code': theme('colors.retro-magenta'), 
            '--tw-prose-pre-code': theme('colors.gray[300]'), 
            '--tw-prose-pre-bg': '#2d2d2d', 
            '--tw-prose-th-borders': theme('colors.gray[600]'),
            '--tw-prose-td-borders': theme('colors.gray[700]'),
            // Redefine invert vars for dark mode explicitly
            '--tw-prose-invert-body': theme('colors.gray[300]'),
            '--tw-prose-invert-headings': theme('colors.retro-cyan'),
            '--tw-prose-invert-lead': theme('colors.gray[400]'),
            '--tw-prose-invert-links': theme('colors.retro-blue'),
            '--tw-prose-invert-bold': theme('colors.retro-yellow'),
            // ... add others
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 