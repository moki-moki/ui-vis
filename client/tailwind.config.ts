import type { Config } from 'tailwindcss';

export default {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
                'primary-main': 'var(--primary-main)',
                'accent-main': 'var(--accent-main)',
                'secondary-main': 'var(--secondary-main)',
                'border-color': 'var(--border-color)',
                'primary-color': 'var(--primary-color)',
                'secondary-color': 'var(--secondary-color)',
                'accent-color': 'var(--accent-color)',
                'text-color': 'var(--text-color)',
            },
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
        },
    },
    plugins: [],
} satisfies Config;
