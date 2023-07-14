/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        'main-bg': "#0F172A",
        'text-color': "rgba(250, 249, 246)",
        'subtext-color': "rgba(250, 249, 246, 0.70)",
        'btn-color': "rgba(87, 131, 219, 0.70)"
      }
    },
  },
  plugins: [],
}
