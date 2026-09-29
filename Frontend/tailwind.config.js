/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#3b000e",
        "primary-container": "#5a1020",
        "on-primary": "#ffffff",
        "on-primary-container": "#dd7683",
        "inverse-primary": "#ffb2b9",
        "primary-fixed": "#ffdadc",
        "primary-fixed-dim": "#ffb2b9",
        "on-primary-fixed": "#400010",
        "on-primary-fixed-variant": "#7c2a38",

        "secondary": "#b4243d",
        "secondary-container": "#fc5b6d",
        "on-secondary": "#ffffff",
        "on-secondary-container": "#600017",
        "secondary-fixed": "#ffdada",
        "secondary-fixed-dim": "#ffb3b6",
        "on-secondary-fixed": "#40000c",
        "on-secondary-fixed-variant": "#920128",

        "tertiary": "#735c00",
        "tertiary-container": "#cca830",
        "on-tertiary": "#ffffff",
        "on-tertiary-container": "#4f3e00",
        "tertiary-fixed": "#ffe088",
        "tertiary-fixed-dim": "#e9c349",
        "on-tertiary-fixed": "#241a00",
        "on-tertiary-fixed-variant": "#574500",

        "background": "#faf9f6",
        "on-background": "#1a1c1a",
        "surface": "#faf9f6",
        "surface-dim": "#dbdad7",
        "surface-bright": "#faf9f6",
        "surface-variant": "#e3e2e0",
        "surface-tint": "#9a414e",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#f4f3f1",
        "surface-container": "#efeeeb",
        "surface-container-high": "#e9e8e5",
        "surface-container-highest": "#e3e2e0",

        "on-surface": "#1a1c1a",
        "on-surface-variant": "#544244",
        "inverse-surface": "#2f312f",
        "inverse-on-surface": "#f2f1ee",

        "outline": "#877273",
        "outline-variant": "#dac0c2",

        "error": "#ba1a1a",
        "error-container": "#ffdad6",
        "on-error": "#ffffff",
        "on-error-container": "#93000a"
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "sm": "0.125rem",
        "md": "0.375rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
        "full": "9999px"
      },
      spacing: {
        "margin-desktop": "48px",
        "container-max-width": "1280px",
        "gutter": "24px",
        "margin-mobile": "16px",
        "unit": "8px"
      },
      fontFamily: {
        "display-lg": ["Bodoni Moda", "serif"],
        "headline-lg": ["Bodoni Moda", "serif"],
        "headline-md": ["Bodoni Moda", "serif"],
        "headline-lg-mobile": ["Bodoni Moda", "serif"],
        "body-lg": ["Montserrat", "sans-serif"],
        "body-md": ["Montserrat", "sans-serif"],
        "label-sm": ["Montserrat", "sans-serif"]
      },
      fontSize: {
        "headline-md": ["28px", { "lineHeight": "36px", "fontWeight": "500" }],
        "body-md": ["16px", { "lineHeight": "24px", "fontWeight": "400" }],
        "headline-lg": ["40px", { "lineHeight": "48px", "fontWeight": "600" }],
        "display-lg": ["64px", { "lineHeight": "72px", "letterSpacing": "-0.02em", "fontWeight": "700" }],
        "label-sm": ["12px", { "lineHeight": "16px", "letterSpacing": "0.1em", "fontWeight": "600" }],
        "body-lg": ["18px", { "lineHeight": "28px", "letterSpacing": "0.01em", "fontWeight": "400" }],
        "headline-lg-mobile": ["32px", { "lineHeight": "40px", "fontWeight": "600" }]
      }
    }
  },
  plugins: []
}
