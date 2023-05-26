/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
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
        }
      },
      keyframes: {
        ping: {
          ' 75%, 100%': { transform: 'scale(1.3)',opacity: '0'}
        },
      }
    },

  },
  plugins: [],
}
