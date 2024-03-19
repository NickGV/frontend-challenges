/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      Bai: "Bai Jamjuree",
    },
    textColor: {
      "Dark-grayish-blue": "hsl(210, 10%, 33%)",
      "Grayish-Blue": "hsl(201, 11%, 66%)",
      "Strong-Cyan": "hsl(171, 66%, 44%)",
      "white": "white"
    },
    backgroundColor: {
      "Strong-Cyan": "hsl(171, 66%, 44%)",
      "Light-Blue": " hsl(233, 100%, 69%)",
      "footer-bg": "#F1F5F9",
    },
    extend: {},
  },
  plugins: [],
};
