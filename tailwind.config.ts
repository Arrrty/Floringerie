import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "selector",
  theme: {
    extend: {
      keyframes: {
          logo: {
              '0%, 100%': {
                  color: '#1e293b',
              },
              '50%': { 
                  color: '#c3899b',
              },
          },
          'logo-dark': {
              '0%, 100%': {
                  color: '#c3899b',
              },
              '50%': { 
                  color: '#fff',
              },
          }
      },
      animation: {
          logo: 'logo 10s ease-in-out infinite',
          'logo-dark': 'logo-dark 10s ease-in-out infinite',
          'spin-slow': 'spin 3s linear infinite',
      },
    },
  },
  plugins: [],
};
export default config;
