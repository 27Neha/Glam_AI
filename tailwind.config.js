/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#9b51e0', // Neon Purple
          dark: '#56287c',
          light: '#d08cf8',
        },
        secondary: {
          DEFAULT: '#2f80ed', // Neon Blue
        },
        dark: {
          DEFAULT: '#121212',
          surface: '#1E1E1E',
          card: 'rgba(30, 30, 30, 0.6)',
        },
        glass: 'rgba(255, 255, 255, 0.05)',
      },
    },
  },
  plugins: [],
}
