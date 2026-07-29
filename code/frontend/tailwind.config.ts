import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        'primary-dark': 'var(--primary-dark)',
        accent: 'var(--accent)',
        'bg-light': 'var(--bg-light)',
        'bg-card': 'var(--bg-card)',
        text: 'var(--text)',
        'text-muted': 'var(--text-muted)',
        error: 'var(--error)',
        success: 'var(--success)',
        border: 'var(--border)',
        'input-bg': 'var(--input-bg)',
        'social-bg': 'var(--social-bg)',
        heart: 'var(--heart)',
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      borderRadius: {
        DEFAULT: '12px',
        pill: '50px',
        'icon-wrap': '16px',
        input: '8px',
        avatar: '50%',
      },
      boxShadow: {
        DEFAULT: '0 4px 24px rgba(0,0,0,0.06)',
        lg: '0 12px 40px rgba(0,0,0,0.10)',
        avatar: '0 4px 14px rgba(79,70,229,0.20)',
        'btn-hover': '0 8px 24px rgba(79,70,229,0.35)',
        nav: '0 2px 20px rgba(0,0,0,0.06)',
        drawer: '-4px 0 20px rgba(0,0,0,0.08)',
      },
      maxWidth: {
        container: '1100px',
      },
      spacing: {
        section: '100px',
        'section-mobile': '70px',
      },
      transitionDuration: {
        hover: '200ms',
        'card-lift': '300ms',
        'fade-in': '700ms',
        drawer: '350ms',
        spinner: '600ms',
      },
      keyframes: {
        float: {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(30px, -30px)' },
        },
        'gradient-shift': {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
        spin: {
          to: { transform: 'rotate(360deg)' },
        },
        'pop-in': {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        pulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
        },
      },
      animation: {
        float: 'float 8s ease-in-out infinite alternate',
        'float-slow': 'float 10s ease-in-out infinite alternate-reverse',
        'gradient-shift': 'gradient-shift 6s ease-in-out infinite alternate',
        spin: 'spin 600ms linear infinite',
        'pop-in': 'pop-in 400ms cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        pulse: 'pulse 1.5s ease infinite',
      },
    },
  },
  plugins: [],
};

export default config;
