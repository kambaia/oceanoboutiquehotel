/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "deep-gray": "#1B1B1B",
        "primary-blue": "#4C96FF",
        "accent-green": "#10B981",
        "soft-yellow": "#FACC15",
        "warm-red": "#EF4444",
        "cool-purple": "#8B5CF6",
      }
    },
  },
  plugins: [],
}
