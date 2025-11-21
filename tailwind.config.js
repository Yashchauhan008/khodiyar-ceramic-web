/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'cormorant': ['Cormorant Garamond', 'serif'],
        'cormorant-bold': ['Cormorant Garamond', 'serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'poppins-light': ['Poppins', 'sans-serif'],
      },
      fontWeight: {
        'cormorant-bold': '700',
        'poppins-light': '300',
      },
      colors: {
        primary: '#1A191A',
        secondary: '#131313',
        accent: '#3B6E54',
        text: '#E9E8E8'
      },
      fontSize: {
        'body': 'clamp(0.875rem, 2.5vw, 1.125rem)',
        'heading': 'clamp(1.75rem, 5vw, 3rem)',
        'subheading': 'clamp(1.25rem, 3.5vw, 1.875rem)',
      },
      maxWidth: {
        'section': 'min(90vw, 1200px)',
      },
    },
  },
  plugins: [],
}