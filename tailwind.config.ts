import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'gray': { 
    DEFAULT: '#6b7280', 
    100: '#f9fafb', 
    200: '#f3f4f6', 
    300: '#e5e7eb', 
    400: '#d1d5db', 
    500: '#9ca3af', 
    600: '#6b7280', 
    700: '#4b5563', 
    800: '#374151',
      },

      'black': '#1C1C1C',
      'bg': '#FFF7EE',
      'black_bean': { 
        DEFAULT: '#461b12', 
        100: '#0e0504', 
        200: '#1c0b07', 
        
        300: '#29100b', 
        400: '#37150e', 
        500: '#461b12', 
        600: '#883423', 
        700: '#cb4e35', 
        800: '#dc8978', 
        900: '#eec4bc' }, 
        'secondary': { 
          DEFAULT: '#639c51', 
          100: '#131f10', 
          200: '#273e20', 
          300: '#3a5d30', 400: '#4e7c40', 500: '#639c51', 600: '#7eb46e', 
          700: '#9ec792', 800: '#bfdab6', 900: '#dfecdb' }, 
          'complementary': { 
            DEFAULT: '#c1c75b', 100: '#2a2b0f', 200: '#54571e', 300: '#7e822c', 400: '#a8ad3b', 
            500: '#c1c75b', 600: '#ced27c', 700: '#dadd9d', 800: '#e6e9be', 900: '#f3f4de' }, 
          'primary': { 
            DEFAULT: '#e68f49', 100: '#351c07', 200: '#6a380e', 300: '#9f5316', 400: '#d46f1d', 
            500: '#e68f49', 600: '#eba56c', 700: '#f0bc91', 800: '#f5d2b5', 900: '#fae9da' }, 
          'buff': { 
            DEFAULT: '#e69e67', 100: '#391e09', 200: '#723c13', 300: '#ab5a1c', 400: '#dd792c', 
            500: '#e69e67', 600: '#ebb184', 700: '#f0c4a3', 800: '#f5d8c2', 900: '#faebe0' }
    },
    extend: {
      fontFamily: {
        base: ['Montserrat', 'sans-serif'],
        seaweed: ['Seaweed Script', 'cursive'],
        lora: ['Lora', 'serif'], 
      },
      animation: {
        'pulse-slow': 'pulse 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        //'bounce-slow': 'bounce 4s linear infinite',
        'bounce': 'bounce 4s linear infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      }
    },
  },
  plugins: [],
};
export default config;





