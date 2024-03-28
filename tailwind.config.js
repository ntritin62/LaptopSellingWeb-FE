const withMT = require('@material-tailwind/react/utils/withMT');
export default withMT({
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    '../node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}',
    '../node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      scale: {
        102: '1.02',
      },
      colors: {
        primary: '#f8ab16',
        secondary: '#54595F',
        text: '#7A7A7A',
      },
      screens: {
        xxl: { max: '1400px' },
        xl: { max: '1200px' },
        lg: { max: '992px' },
        md: { max: '768px' },
        sm: { max: '576px' },
      },
      container: {
        center: true,
        padding: '1.5rem',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
});
