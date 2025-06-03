// tailwind.config.js
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",   // For App Router pages/components
    "./src/components/**/*.{js,ts,jsx,tsx}", // Your components folder
    // add other folders if you have
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
