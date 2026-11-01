/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // NextGen Navigators Official Palette
        burgundy: {
          50: '#FDF7F8',
          100: '#F9EBEF',
          200: '#F2D3DC',
          300: '#E6ABC0',
          400: '#D57C9C',
          500: '#9B314B', // Secondary Burgundy
          600: '#7A1C33', // Primary Burgundy
          700: '#580C1F', // Deep Crimson
          800: '#4A0817', // Dark Burgundy
          900: '#330510',
          950: '#1F0208',
        },
        ivory: {
          DEFAULT: '#FAF6F0',
          50: '#FFFFFF',
          100: '#FAF6F0', // Warm Ivory background
          200: '#F3ECE1',
          300: '#E8DDCE',
          400: '#D6C4B0',
        },
        silver: {
          DEFAULT: '#D8D8DA',
          100: '#F2F2F3',
          200: '#E5E5E7',
          300: '#D8D8DA', // Metallic Silver
          400: '#BCBCC0',
          500: '#9E9EA4',
          600: '#7B7B83',
        },
        // Mapped Aliases for smooth component migration
        navy: {
          900: '#330510',
          800: '#4A0817', // Dark Burgundy
          700: '#580C1F', // Deep Crimson
          600: '#7A1C33', // Primary Burgundy
        },
        brand: {
          indigo: '#7A1C33', // Primary Burgundy
          violet: '#9B314B', // Secondary Burgundy
          purple: '#580C1F', // Deep Crimson
          accent: '#9B314B',
          light: '#F9EBEF',  // Soft Burgundy tint
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(74, 8, 23, 0.05), 0 2px 6px -1px rgba(74, 8, 23, 0.03)',
        'card': '0 10px 30px -4px rgba(74, 8, 23, 0.08), 0 4px 10px -2px rgba(74, 8, 23, 0.03)',
        'metallic': '0 4px 14px 0 rgba(122, 28, 51, 0.25)',
        'glow': '0 0 25px -5px rgba(122, 28, 51, 0.35)',
      }
    },
  },
  plugins: [],
}
