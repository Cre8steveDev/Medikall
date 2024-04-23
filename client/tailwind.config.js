/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
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
