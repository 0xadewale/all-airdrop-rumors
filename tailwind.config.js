/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
      themes: [
          {
              light: {
                  "color-scheme": "light",
                  "primary": "#319bad",
                  "secondary": "#cc3c54",
                  "secondary-content": "oklch(98.71% 0.0106 342.55)",
                  "accent": "#ffbcb5",
                  "neutral": "#f3f4f6",
                  "neutral-content": "#D7DDE4",
                  "base-100": "oklch(100% 0 0)",
                  "base-200": "#F2F2F2",
                  "base-300": "#E5E6E6",
                  "base-content": "#1f2937",
              },
              dark: {
                  "color-scheme": "dark",
                  "primary": "#55AFBE",
                  "secondary": "#C1576B",
                  "accent": "#FCD3CF",
                  "neutral": "#2a323c",
                  "neutral-content": "#A6ADBB",
                  "base-100": "#1d232a",
                  "base-200": "#191e24",
                  "base-300": "#15191e",
                  "base-content": "#A6ADBB",
              }
          }
      ]
  }
}

