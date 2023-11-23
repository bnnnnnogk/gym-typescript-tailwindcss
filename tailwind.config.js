/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'gray-20': '#F8F4EB',
        'gray-50': '#EFE6E6',
        'gray-100': '#DFCCCC',
        'gray-500': '#5E0000',
        'primary-100': '#FFE1E0',
        'primary-300': '#FFA6A3',
        'primary-500': '#FF6B66',
        'secondary-400': '#FFCD5B',
        'secondary-500': '#FFC132',
      },
      backgroundImage: (theme) => ({
        'gradient-yellowred': 'linear-gradient(90deg, #FF616A 0%, #FFC837 100%)',
        'mobile-home': "url('./assets/HomePageGraphic.png')",
      }),
      fontFamily: {
        dmsans: ['DM Sans', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      content: {
        evolvetext: "url('./assets/EvolveText.png')",
        abstractwaves: "url('./assets/AbstractWaves.png')",
        sparkles: "url('./assets/Sparkles.png')",
        circles: "url('./assets/Circles.png')",
        bg: "url('./src/assets/icons/bg.svg')",
        blob: "url('./src/assets/icons/blob-01.svg')",
        group: "url('./src/assets/icons/Group.svg')",
        google: "url('./src/assets/icons/Google.svg)",
        github: "url('./src/assets/icons/GitHub.svg)",
      },
    },
    screens: {
      xs: '480px',
      sm: '768px',
      md: '1060px',
    },
  },
  plugins: [],
}
