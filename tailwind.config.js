/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary accent colors from the design
        primary: {
          50: '#F8FAFB',   // Very light variant
          100: '#E8F4F8',  // Light variant
          200: '#BDE5E0',  // Lighter
          300: '#92D5C8',  // Light
          400: '#67C5B0',  // Medium light
          500: '#52C4B0',  // Main accent color (teal)
          600: '#48B39C',  // Main accent darker
          700: '#3E9B87',  // Dark
          800: '#2F7A6B',  // Darker
          900: '#1F5E50',  // Darkest
        },
        
        // Background grays/dark colors
        dark: {
          50: '#F7F8FA',   // Very light
          100: '#E2E8F0',  // Light
          200: '#CBD5E0',  // Lighter gray
          300: '#A0AEC0',  // Light gray
          400: '#718096',  // Medium gray
          500: '#4A5568',  // Main gray
          600: '#2D3748',  // Dark gray
          700: '#2C3E50',  // Main background color
          800: '#1A252F',  // Darker background
          900: '#171923',  // Darkest
        },

        // Text colors for easy reference
        'text-primary': '#FFFFFF',    // White text
        'text-secondary': '#BDC3C7',  // Light gray
        'text-muted': '#95A5A6',      // Muted gray
        'text-accent': '#52C4B0',     // Teal accent
      },
      
      // Custom gradients
      backgroundImage: {
        'gradient-dark': 'linear-gradient(135deg, #2C3E50 0%, #34495E 100%)',
        'gradient-accent': 'linear-gradient(135deg, #52C4B0 0%, #48B39C 100%)',
      },

      // Custom shadows for dark theme
      boxShadow: {
        'dark': '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)',
        'dark-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.2)',
      }
    },
  },
  plugins: [],
}
