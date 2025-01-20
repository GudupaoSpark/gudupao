import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
    './error.vue'
  ],
  theme: {
    extend: {
      colors: {
        'gudupao-blue': {
          50: '#e6f1ff',
          100: '#b3d7ff',
          200: '#80bdff',
          300: '#4da3ff',
          400: '#1a89ff',
          500: '#0070e6',
          600: '#0059b3',
          700: '#004080',
          800: '#00264d',
          900: '#000d1a'
        },
        'gudupao-gray': {
          50: '#f5f5f5',
          100: '#e6e6e6',
          200: '#d6d6d6',
          300: '#c6c6c6',
          400: '#b6b6b6',
          500: '#a6a6a6',
          600: '#969696',
          700: '#868686',
          800: '#767676',
          900: '#666666'
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Poppins', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        'gudupao-light': '0 4px 6px -1px rgba(0, 112, 230, 0.1), 0 2px 4px -1px rgba(0, 112, 230, 0.06)',
        'gudupao-dark': '0 10px 15px -3px rgba(0, 112, 230, 0.2), 0 4px 6px -2px rgba(0, 112, 230, 0.1)'
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.6s ease-out'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        }
      }
    }
  },
  plugins: []
} satisfies Config