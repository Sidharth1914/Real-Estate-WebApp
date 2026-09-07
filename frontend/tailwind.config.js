module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
          950: '#022c22',
        },
      },
      boxShadow: {
        soft: '0 1px 2px rgba(28, 25, 23, 0.06), 0 1px 3px rgba(28, 25, 23, 0.08)',
        card: '0 4px 16px rgba(28, 25, 23, 0.06), 0 2px 6px rgba(28, 25, 23, 0.06)',
        lifted: '0 12px 32px rgba(28, 25, 23, 0.12), 0 4px 12px rgba(28, 25, 23, 0.08)',
      },
    },
  },
  plugins: [],
}
