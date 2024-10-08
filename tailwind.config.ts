import type { Config } from 'tailwindcss';

const config: Config = {
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: '550px',
        md: '950px',
        lg: '1128px',
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
      },
      maxWidth: {
        '8xl': '86rem',
      },
      keyframes: {
        slider: {
          '0%': { transform: 'translateX(0)' },
          '100%': {
            transform: 'translateX(calc(-100% / var(--slider-total-sets)))',
          },
        },
        'dot-pulse-before': {
          '0%': { boxShadow: '9984px 0 0 -5px' },
          '30%': { boxShadow: '9984px 0 0 2px' },
          '60%,100%': { boxShadow: '9984px 0 0 -5px' },
        },
        'dot-pulse': {
          '0%': { boxShadow: '9999px 0 0 -5px' },
          '30%': { boxShadow: '9999px 0 0 2px' },
          '60%,100%': { boxShadow: '9999px 0 0 -5px' },
        },
        'dot-pulse-after': {
          '0%': { boxShadow: '10014px 0 0 -5px' },
          '30%': { boxShadow: '10014px 0 0 2px' },
          '60%,100%': { boxShadow: '10014px 0 0 -5px' },
        },
        'slide-background-x': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        slider: 'slider 64s linear infinite',
        'dot-pulse-before': 'dot-pulse-before 1.5s infinite linear',
        'dot-pulse': 'dot-pulse 1.5s infinite linear',
        'dot-pulse-after': 'dot-pulse-after 1.5s infinite linear',
        'slide-background-x': 'slide-background-x 3s infinite ease-in-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;
