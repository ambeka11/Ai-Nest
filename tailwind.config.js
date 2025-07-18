/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        slideUp: {
          "0%": { opacity: 0, transform: "translateY(40px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        "scroll-loop": "scroll 60s linear infinite",
        slideUpFast: "slideUp 0.6s ease-out forwards",
        slideUpSlow: "slideUp 0.9s ease-out forwards",
      },
    },
  },
  plugins: [],
};
