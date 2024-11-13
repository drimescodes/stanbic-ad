/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      blur: {
        md: "12px",
        lg: "16px",
        xl: "24px",
      },
    },
  },
  plugins: [],
  safelist: [
    "blur-md",
    "blur-lg",
    "blur-xl",
    "bg-blue-300",
    "bg-blue-400",
    "bg-blue-500",
  ],
};
