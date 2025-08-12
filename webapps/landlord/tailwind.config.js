/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}'
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...require('tailwindcss/defaultTheme').fontFamily.sans]
      }
    }
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.popover-content-width-same-as-its-trigger': {
          width: 'var(--radix-popover-trigger-width)',
          'max-height': 'var(--radix-popover-content-available-height)'
        }
      });
    },
    require('tailwindcss-animate')
  ]
};
