/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "pulse-slow": {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.1)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        wave: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        "diagonal-wave": {
          "0%, 100%": { transform: "translateX(0) rotate(12deg)" },
          "50%": { transform: "translateX(50px) rotate(12deg)" },
        },
        "diagonal-wave-top": {
          "0%, 100%": { transform: "translateX(0) rotate(-12deg)" },
          "50%": { transform: "translateX(-50px) rotate(-12deg)" },
        },
      },
      animation: {
        "pulse-slow": "pulse-slow 6s ease-in-out infinite",
        "float-slow": "float-slow 8s ease-in-out infinite",
        wave: "wave 10s linear infinite",
        shimmer: "shimmer 3s linear infinite",
        "diagonal-wave": "diagonal-wave 5s ease-in-out infinite",
        "diagonal-wave-top": "diagonal-wave-top 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
