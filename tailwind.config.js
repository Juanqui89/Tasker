/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'custom': {'min': '412px'},
      // => @media (min-width: 412px) { ... }
      'xs': {'max': '480px'},
      // => @media (max-width: 480px) { ... }
      'sm': {'min': '600px'},
      // => @media (min-width: 600px) { ... }
      'md': {'min': '768px'},
      // => @media (min-width: 768px) { ... }

      'lg': {'min': '1024px'},
      // => @media (min-width: 1024px) { ... }

      'xl': {'min': '1200px'},
      // => @media (min-width: 1200px) { ... }
      
      'custom1': {'min': '1366px'},
      // => @media (min-width: 1366px) { ... }

      'xxl': {'min': '1440px'},
      // => @media (min-width: 1440px) { ... }
    },
  },
  extend: {},
  plugins: [],
};
