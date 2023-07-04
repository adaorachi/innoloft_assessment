const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        navbar: "70px",
        sidebar: "250px",
      },
      boxShadow: {
        button: "0 14px 24px 0 rgb(62 57 107 / 26%)",
        section:
          "0 0.46875rem 2.1875rem rgb(59 62 102 / 3%), 0 0.9375rem 1.40625rem rgb(59 62 102 / 3%), 0 0.25rem 0.53125rem rgb(59 62 102 / 5%), 0 0.125rem 0.1875rem rgb(59 62 102 / 3%)",
        drawer:
          "0 3px 5px -1px rgb(0 0 0 / 20%), 0 5px 8px 0 rgb(0 0 0 / 14%), 0 1px 14px 0 rgb(0 0 0 / 12%)",
      },
    },
    colors: {
      primary: "var(--primary-color)",
      ...colors,
    },
  },
  plugins: [],
};
