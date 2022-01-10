module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        exchanges: '#EAEFFF',
        games: '#F5F5F5',
        marketplaces: '#E2F9F3',
        defi: '#FFF3EC',
        collectibles: '#EBF5FF',
        utilities: '#F0EBFF',
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
