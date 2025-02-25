/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      xs: '0.6rem',
      sm: '0.8rem',
      base: '1rem',
      xl: '1.777rem',
      '2xl': '2.369rem',
      '3xl': '3.157rem',
      '4xl': '4.209rem',
      '5xl': '5.61rem',
    },
    extend: {
      colors: {
        'background-color': 'var(--background-color)',
        'primary-color': 'var(--primary-color)',
        'secondary-color': 'var(--secondary-color)',
        'accent-color': 'var(--accent-color)',
        'text-color': 'var(--text-color)',
        'secondary-faded-color': 'var(--secondary-faded-color)',
      },
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
    },
  },
  plugins: [],
};
