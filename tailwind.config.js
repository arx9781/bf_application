/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "confetti-slow": "confetti 2.5s linear infinite",
        "confetti-fast": "confetti 2s linear infinite",
      },
      keyframes: {
        confetti: {
          "0%": { transform: "translateY(0) rotateX(0) rotateY(0)" },
          "100%": {
            transform: "translateY(100vh) rotateX(360deg) rotateY(360deg)",
          },
        },
      },
    },
  },
};
