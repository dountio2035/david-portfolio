// Tailwind is kept for its base reset (preflight). The visual design lives in
// src/index.css as plain CSS with design tokens, so there are no theme
// extensions here.
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: { extend: {} },
  plugins: [],
}
