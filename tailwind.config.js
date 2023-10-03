const { fontFamily } = require('tailwindcss/defaultTheme')
const { stone, white } = require('tailwindcss/colors')

const hexToRgb = hex => {
  hex = hex.replace('#', '')
  hex = hex.length === 3 ? hex.replace(/./g, '$&$&') : hex
  const r = parseInt(hex.substring(0, 2), 16)
  const g = parseInt(hex.substring(2, 4), 16)
  const b = parseInt(hex.substring(4, 6), 16)
  return `${r} ${g} ${b}`
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './content/**/*.{md,mdx}'
  ],
  darkMode: ['class'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--my-font)']
      },
      typography: ({ theme }) => ({
        pink: {
          css: {
            '--tw-prose-body': theme('colors.pink[800]'),
            '--tw-prose-headings': theme('colors.pink[900]'),
            '--tw-prose-lead': theme('colors.pink[700]'),
            '--tw-prose-links': theme('colors.pink[900]'),
            '--tw-prose-bold': theme('colors.pink[900]'),
            '--tw-prose-counters': theme('colors.pink[600]'),
            '--tw-prose-bullets': theme('colors.pink[400]'),
            '--tw-prose-hr': theme('colors.pink[300]'),
            '--tw-prose-quotes': theme('colors.pink[900]'),
            '--tw-prose-quote-borders': theme('colors.pink[300]'),
            '--tw-prose-captions': theme('colors.pink[700]'),
            '--tw-prose-code': theme('colors.pink[900]'),
            '--tw-prose-pre-code': theme('colors.pink[100]'),
            '--tw-prose-pre-bg': theme('colors.pink[900]'),
            '--tw-prose-th-borders': theme('colors.pink[300]'),
            '--tw-prose-td-borders': theme('colors.pink[200]'),
            '--tw-prose-invert-body': theme('colors.pink[200]'),
            '--tw-prose-invert-headings': theme('white'),
            '--tw-prose-invert-lead': theme('colors.pink[300]'),
            '--tw-prose-invert-links': theme('white'),
            '--tw-prose-invert-bold': theme('white'),
            '--tw-prose-invert-counters': theme('colors.pink[400]'),
            '--tw-prose-invert-bullets': theme('colors.pink[600]'),
            '--tw-prose-invert-hr': theme('colors.pink[700]'),
            '--tw-prose-invert-quotes': theme('colors.pink[100]'),
            '--tw-prose-invert-quote-borders': theme('colors.pink[700]'),
            '--tw-prose-invert-captions': theme('colors.pink[400]'),
            '--tw-prose-invert-code': theme('white'),
            '--tw-prose-invert-pre-code': theme('colors.pink[300]'),
            '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
            '--tw-prose-invert-th-borders': theme('colors.pink[600]'),
            '--tw-prose-invert-td-borders': theme('colors.pink[700]')
          },
          stone: {
            css: {
              '--tw-prose-body': stone[700],
              '--tw-prose-headings': stone[900],
              '--tw-prose-lead': stone[600],
              '--tw-prose-links': stone[900],
              '--tw-prose-bold': stone[900],
              '--tw-prose-counters': stone[500],
              '--tw-prose-bullets': stone[300],
              '--tw-prose-hr': stone[200],
              '--tw-prose-quotes': stone[900],
              '--tw-prose-quote-borders': stone[200],
              '--tw-prose-captions': stone[500],
              '--tw-prose-kbd': stone[900],
              '--tw-prose-kbd-shadows': hexToRgb(stone[900]),
              '--tw-prose-code': stone[900],
              '--tw-prose-pre-code': stone[200],
              '--tw-prose-pre-bg': stone[800],
              '--tw-prose-th-borders': stone[300],
              '--tw-prose-td-borders': stone[200],
              '--tw-prose-invert-body': stone[300],
              '--tw-prose-invert-headings': white,
              '--tw-prose-invert-lead': stone[400],
              '--tw-prose-invert-links': white,
              '--tw-prose-invert-bold': white,
              '--tw-prose-invert-counters': stone[400],
              '--tw-prose-invert-bullets': stone[600],
              '--tw-prose-invert-hr': white[900],
              '--tw-prose-invert-quotes': stone[100],
              '--tw-prose-invert-quote-borders': stone[700],
              '--tw-prose-invert-captions': stone[400],
              '--tw-prose-invert-kbd': white,
              '--tw-prose-invert-kbd-shadows': hexToRgb(white),
              '--tw-prose-invert-code': white,
              '--tw-prose-invert-pre-code': stone[300],
              '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
              '--tw-prose-invert-th-borders': stone[600],
              '--tw-prose-invert-td-borders': stone[700],
              '--tw-ring-color': stone[700]
            }
          }
        }
      })
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
