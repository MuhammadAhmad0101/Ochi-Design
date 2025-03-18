/** @type {import('tailwindcss').Config} */
export default {
      content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
      theme: {
            extend: {
                  fontFamily: {
                        Chilax: ["Chillax", "sans-serif"],
                        Cabinet: ["Cabinet Grotesk", "sans-serif"],
                        Satoshi: ["Satoshi", "sans-serif"],
                        Robot: ["Roboto", " sans-serif"],
                  },
            },
      },
      plugins: [],
};
