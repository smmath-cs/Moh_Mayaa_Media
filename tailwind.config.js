/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#F7F2EA",
        "ivory-deep": "#EDE3D3",
        oxblood: "#6E1F2E",
        "oxblood-deep": "#571725",
        gold: "#B8925A",
        "gold-soft": "#D8BE93",
        ink: "#2A231F",
        "ink-soft": "#5C534B",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        body: ["Instrument Sans", "sans-serif"],
        deva: ["Noto Serif Devanagari", "serif"],
      },
    },
  },
  plugins: [],
}
