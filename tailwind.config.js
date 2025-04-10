/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'olive': {
          50: '#f9f9f1',
          100: '#f1f0d5',
          200: '#e1e0aa',
          300: '#c9c87a',
          400: '#b3ae55',
          500: '#8c8738',
          600: '#6d692e',
          700: '#544f28',
          800: '#3c3721',
          900: '#2a261c',
          950: '#171510',
        },
        'earth': {
          50: '#f8f7f2',
          100: '#ece7d9',
          200: '#dcd1b4',
          300: '#c6b388',
          400: '#b3996b',
          500: '#a08353',
          600: '#856a45',
          700: '#6b533a',
          800: '#564332',
          900: '#45382b',
          950: '#271f18',
        },
        'sage': {
          50: '#f4f7f4',
          100: '#e3ebe3',
          200: '#c8d8c8',
          300: '#a2bea2',
          400: '#7a9e7a',
          500: '#5c805c',
          600: '#48664a',
          700: '#3a513a',
          800: '#324332',
          900: '#2a382a',
          950: '#121f13',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#333',
            a: {
              color: '#6d692e',
              '&:hover': {
                color: '#544f28',
              },
            },
            h1: {
              color: '#3c3721',
            },
            h2: {
              color: '#3c3721',
            },
            h3: {
              color: '#544f28',
            },
            blockquote: {
              color: '#6b533a',
              borderLeftColor: '#c6b388',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
