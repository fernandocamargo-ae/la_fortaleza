/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'brand-orange': '#E2622F',
        'brand-slate': '#34495E',
        'bg-dark': '#1A1A1A',
        'bg-darker': '#111111',
        surface: '#2A2A2A',
        'text-primary': '#F5F5F5',
        'text-muted': '#9CA3AF',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
