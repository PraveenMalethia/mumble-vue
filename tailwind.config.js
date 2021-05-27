module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: 'class',
  theme: {
    extend: {},
    container: {
      center: true,
      padding: '2rem',
    },
  },
  variants: {
    backgroundColor: [
      'dark',
      'dark-hover',
      'dark-group-hover',
      'dark-even',
      'dark-odd',
      'hover',
    ],
    borderColor: ['dark', 'dark-focus', 'dark-focus-within'],
    textColor: ['hover', 'dark', 'dark-hover', 'dark-active'],
  },
  plugins: [require('tailwindcss-dark-mode')()],
}
