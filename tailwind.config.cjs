/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      }
    },
    "colors": {
      transp: 'transparent',
      white: 'white',
      "neutral": {
        50: "#ECE6E4",
        100: "#E2D8D4",
        200: "#CBB6AF",
        300: "#B6968B",
        400: "#A27667",
        500: "#805A4D",
        600: "#684A40",
        700: "#513B33",
        800: "#3B2B26",
        900: "#251C19"
      },
      "gray": {
        50: "#F3F2F2",
        100: "#E7E5E4",
        200: "#CCC9C7",
        300: "#B3AFAD",
        400: "#9B9692",
        500: "#807A76",
        600: "#68635F",
        700: "#4D4947",
        800: "#32302E",
        900: "#1B1918"
      },
      "primary": {
        50: "#FAF5F5",
        100: "#F7EEEE",
        200: "#EDDAD9",
        300: "#E2C2C0",
        400: "#D7AAA7",
        500: "#CA8A87",
        600: "#C17A76",
        700: "#B3605B",
        800: "#9B4F4B",
        900: "#6A3734"
      },
      "secondary": {
        50: "#F1F2ED",
        100: "#E1E3D9",
        200: "#C5C9B5",
        300: "#A6AD8F",
        400: "#8A946B",
        500: "#676E50",
        600: "#535940",
        700: "#404431",
        800: "#2C2F22",
        900: "#191B13"
      }
    },
    fontFamily: {
      display: ['Playfair Display', "ui-serif", 'Georgia', 'Cambria', "Times New Roman", 'Times', 'serif'],
      body: ['Sora, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji'],
      simple: ['Roboto, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji']
    },
    fontSize: {
      sm: ["clamp(0.875rem, calc(0.92rem + 0.39vw), 1rem)", "1.4"],
      base: ["clamp(1.13rem, calc(0.98rem + 0.73vw), 1.50rem)", "1.5"],
      lg: ["clamp(1.27rem, calc(1.03rem + 1.19vw), 1.88rem)", "1.4"],
      xl: ["clamp(1.42rem, calc(1.06rem + 1.80vw), 2.34rem)", "1.4"],
      "2xl": ["clamp(1.60rem, calc(1.08rem + 2.59vw), 2.93rem)", "1.2"],
      "3xl": ["clamp(1.80rem, calc(1.08rem + 3.63vw), 3.66rem)", "1.1"],
      "4xl": ["clamp(2.03rem, calc(1.03rem + 4.98vw), 4.58rem)", "1"],
      "5xl": ["clamp(2.28rem, calc(0.94rem + 6.71vw), 5.72rem)", "1"],
      "6xl": ["clamp(2.57rem, calc(0.78rem + 8.95vw), 7.15rem)", "1"],
    },
  },
  plugins: [],
}
