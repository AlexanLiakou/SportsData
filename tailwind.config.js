/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgMain: '#333333',
        customGreen: '#008f93',
        customDarkgreen: '#075052',
        customLightGreen: '#29A8AC',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}