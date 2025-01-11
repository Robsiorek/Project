/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{html,js}'], // Dodano ścieżkę do index.html
  theme: {
    container: {
      center: true,
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1280px', // Nadal 1280px dla ekranów 1536px+
      },
    },
    extend: {
      fontFamily: {
        lato: ['Lato', 'Arial', 'sans-serif'], // Zmieniamy domyślną czcionkę "sans"
      },
    },
  },
  plugins: [],
};
