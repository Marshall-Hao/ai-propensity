/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      googleBold: ['googleBold', 'sans']
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        gblue: {
          light: '#E8F0FE',
          normal: '#4285F4',
          dark: '#174EA6'
        },
        grey: '#9FA1A1'
      },
      animation: {
        'float': 'float 2s ease-in-out infinite',
        'float-delay': 'float 2s 1s ease-in-out infinite',
      },
      keyframes: {
        ping: {
           '75%, 100%': { transform: 'scale(1.3)',opacity: '0'}
        },
        float: {
          '0%, 100%': {transform: 'translateY(-2%)'},
          '50%': {transform: 'translateY(0)'}
        }
      }
    },

  },
  plugins: [],
}
