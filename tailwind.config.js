/** @type {import('tailwindcss').Config} */
function withOpacity(variable) {
  return `rgb(var(${variable}) / <alpha-value>)`;
}

export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'brand-orange': withOpacity('--brand-orange'),
        'brand-slate': withOpacity('--brand-slate'),
        'bg-dark': withOpacity('--bg-dark'),
        'bg-darker': withOpacity('--bg-darker'),
        surface: withOpacity('--surface'),
        'text-primary': withOpacity('--text-primary'),
        'text-muted': withOpacity('--text-muted'),
        subtle: withOpacity('--subtle'),
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
