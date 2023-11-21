module.exports = {
  content: ['./index.html', './src/**/*.{jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn .3s ease-in-out',
      },

      keyframes: () => ({
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      }),
    },
  },
  plugins: [],
};
