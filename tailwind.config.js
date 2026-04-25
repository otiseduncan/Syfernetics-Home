/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#0F172A',
          bg2: '#111827',
          panel: '#1F2937',
          text: '#F8FAFC',
          muted: '#94A3B8',
          accent: '#14B8A6',
          accentHover: '#0D9488',
        },
        bg: '#0F172A',
        panel: '#111827',
        card: '#1F2937',
        fg: '#F8FAFC',
        muted: '#94A3B8',
        accent: '#14B8A6',
        'accent-dark': '#0D9488',
      },
      boxShadow: {
        soft: '0 20px 60px rgba(0, 0, 0, 0.35)',
        teal: '0 0 0 1px rgba(20,184,166,0.18), 0 18px 55px rgba(20,184,166,0.08)',
      },
      backgroundImage: {
        'hero-grid': 'radial-gradient(circle at 1px 1px, rgba(148,163,184,0.14) 1px, transparent 0)',
      },
    },
  },
  plugins: [],
}
