/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.jsx"],
  theme: {
    // ...
  },
  plugins: [
    require("@tailwindcss/typography"),
    // ...
  ],
};
