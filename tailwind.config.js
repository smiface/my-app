/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx, css, js, jsx}",
    "./pages/*.{ts,tsx, css, js, jsx}",
    "./public/**/*.html",
    "./components//*.{ts,tsx, css, js, jsx}",
    "./layouts//*.{ts,tsx, css, js, jsx}",
  ],
  plugins: [],
  theme: {},
};
