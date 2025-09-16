/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand colors
        primary: {
          DEFAULT: '#646cff',
          hover: '#535bf2',
        },
        
        // Semantic text colors
        text: {
          primary: '#1f2937',      // gray-800 equivalent
          secondary: '#4b5563',    // gray-600 equivalent  
          muted: '#6b7280',        // gray-500 equivalent
          subtle: '#9ca3af',       // gray-400 equivalent
          disabled: '#d1d5db',     // gray-300 equivalent
        },
        
        // Background colors
        background: {
          primary: '#ffffff',      // white
          secondary: '#f9fafb',    // gray-50 equivalent
          elevated: '#f3f4f6',     // gray-100 equivalent
          overlay: '#111827',      // gray-900 equivalent
        },
        
        // Border colors
        border: {
          default: '#d1d5db',      // gray-300 equivalent
          subtle: '#e5e7eb',       // gray-200 equivalent
          strong: '#6b7280',       // gray-500 equivalent
        },
        
        // Dark mode variants
        dark: {
          text: {
            primary: '#ffffff',
            secondary: '#d1d5db',   // gray-300 equivalent
            muted: '#9ca3af',       // gray-400 equivalent
            subtle: '#6b7280',      // gray-500 equivalent
          },
          background: {
            primary: '#1f2937',     // gray-800 equivalent
            secondary: '#374151',   // gray-700 equivalent
            elevated: '#111827',    // gray-900 equivalent
          },
          border: {
            default: '#4b5563',     // gray-600 equivalent
            subtle: '#374151',      // gray-700 equivalent
            strong: '#6b7280',      // gray-500 equivalent
          }
        }
      }
    },
  },
  plugins: [],
}
