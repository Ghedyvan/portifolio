/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradiente-header": "linear-gradient(0deg, #050610 0%, #050610 100%)",
        "gradiente-hero":
          "linear-gradient(118deg, #00010C -3.67%, #000107 106.52%)",
        
      },
      colors: {
        "badge-blue": "rgba(101, 61, 245, 1)",
        "badge-item": "rgba(255, 255, 255, 0.06)",
        "loading-back": "#030917",
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      }
    },
  },
  plugins: [],
};
