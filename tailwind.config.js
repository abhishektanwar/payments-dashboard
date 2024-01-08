module.exports = {
  content: ['./components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend:{
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      colors: {
        grayPrimary:'#D3D4D9',
        graySecondary:'#F2F2F2',
        grayTertiary:'#4D4D4D',
        grayBG:'#FAFAFA',
        sidebarBG:'#1E2640',
        hover:'#363C53',
        white:'#FFFFFF'
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
}

