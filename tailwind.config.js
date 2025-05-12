/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
        colors: {
        primary: '#000000',       // Pure black
        secondary: '#1C1C1C',     // Dark gray
        background: '#FFFFFF',   // Pure white
        surface: '#F5F5F5',       // Light gray background
        text: '#111111',          // Near black for text
        muted: '#6B7280',         // Gray-500
        border: '#E5E7EB',        // Gray-200
        accent: '#D4D4D4',        // Gray-300
        error: '#DC2626',         // Red-600 (for contrast)
        success: '#16A34A',       // Green-600
      },
    },
  },
  plugins: [],
};
