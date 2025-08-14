// postcss.config.js
export default {
  plugins: {
    '@tailwindcss/postcss': {}, // <-- This is the correct, updated plugin
    autoprefixer: {},
  },
};
