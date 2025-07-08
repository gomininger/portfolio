/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        gray: {
          50: '#F5F5F7',
          100: '#F0F0F2',
          200: '#E5E5E7',
          300: '#D1D1D6',
          400: '#8E8E93',
          500: '#6D6D70',
          600: '#48484A',
          700: '#3A3A3C',
          800: '#2C2C2E',
          900: '#1A1A1C',
        },
        blue: {
          50: '#E6F2FF',
          100: '#CCE5FF',
          200: '#99CBFF',
          300: '#66B0FF',
          400: '#3396FF',
          500: '#007AFF',
          600: '#0047AB',
          700: '#003D99',
          800: '#003366',
          900: '#002933',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};