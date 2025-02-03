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
<<<<<<< HEAD
        primary: 'rgb(13 148 136)',
=======
        primary: '#62C9C6',
>>>>>>> 1c915e6 (change logo and primary color)
        secondary: '#54595F',
        background: 'rgb(250 250 250)',
        'bg-secondary': 'rgb(243 244 246)',
        text: '#7A7A7A',
        'bold-text': '#609966',
        border: '#40513B',
        'rose-900': 'rgb(225 29 72)',
      },
      screens: {
        sm: { max: '576px' },
        xxl: { max: '1400px' },
        xl: { max: '1200px' },
        lg: { max: '992px' },
        md: { max: '768px' },
      },
      container: {
        center: true,
        padding: '1.5rem',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
});
