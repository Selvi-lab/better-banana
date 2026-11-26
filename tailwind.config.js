/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        forest: { DEFAULT: "#1b5233", dark: "#14402a", light: "#2a6b45" },
        cream: { DEFAULT: "#fbf3e4", dark: "#f5e8cf" },
        sage: "#d6e3c0",
        gold: "#f0922b",
        leaf: "#8fb35a",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      keyframes: {
        float: { "0%,100%": { transform: "translateY(0) rotate(0deg)" }, "50%": { transform: "translateY(-10px) rotate(3deg)" } },
        sway: { "0%,100%": { transform: "rotate(-3deg)" }, "50%": { transform: "rotate(3deg)" } },
        marquee: { from: { transform: "translateX(0)" }, to: { transform: "translateX(-50%)" } },
        pulseRing: { "0%": { boxShadow: "0 0 0 0 rgba(240,146,43,.5)" }, "100%": { boxShadow: "0 0 0 14px rgba(240,146,43,0)" } },
        heroText: { from: { opacity: 0, transform: "translateY(24px)" }, to: { opacity: 1, transform: "none" } },
        pop: { "0%": { transform: "scale(.6)" }, "60%": { transform: "scale(1.25)" }, "100%": { transform: "scale(1)" } },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        sway: "sway 7s ease-in-out infinite",
        marquee: "marquee 22s linear infinite",
        pulseRing: "pulseRing 1.8s ease-out infinite",
        heroText: "heroText .8s cubic-bezier(.2,.7,.2,1) both",
        pop: "pop .35s ease-out",
      },
    },
  },
  plugins: [],
};
