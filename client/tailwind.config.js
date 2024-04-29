/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fade-in 1s',
      },

      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(-300px)' },
          '100%': { opacity: '1', transform: 'translateY(0px)' },
        },
      },

      screens: {
        xs: '490px',
      },
      colors: {
        'primary-blue': '#4589F4',
        'primary-green': '#2AC28E',
        'secondary-blue': '#EDF7FF',
        'secondary-green': '#ECF7FF',
        'light-gray': '#EFEFFD',
        'dark-blue': '#031D36',
      },
    },
  },
  plugins: [],
};
