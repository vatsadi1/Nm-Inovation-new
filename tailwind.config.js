/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          darkest: '#080C14',
          dark: '#0E1422',
          surface: '#151D2F',
          surfaceLight: '#1C273E',
          border: 'rgba(255, 255, 255, 0.08)',
          borderHover: 'rgba(255, 255, 255, 0.16)',
          accent: '#2563EB',
          accentHover: '#1D4ED8',
          accentLight: '#60A5FA',
          accentMuted: 'rgba(37, 99, 235, 0.12)',
          accentCyan: '#0284C7',
          ivory: '#F8F9FA',
          ivoryMuted: '#E2E8F0',
          slateMuted: '#94A3B8',
          slateDark: '#64748B',
          graphite: '#334155'
        }
      },
      fontFamily: {
        display: ['Montserrat', 'sans-serif'],
        sans: ['Montserrat', 'sans-serif'],
        heading: ['Sarabun', 'sans-serif'],
        body: ['Sarabun', 'sans-serif']
      },
      animation: {
        'pulse-subtle': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}
