/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      container: {
        padding: '15px', // Adds 15px padding
      },
      maxWidth: {
        'custom': '1386px', // Custom max-width
      },
    }
  },
  plugins: [],
}

