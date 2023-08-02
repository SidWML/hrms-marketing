/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        marquee: "marquee 100s linear infinite",
        backward1:"backward1 100s linear infinite",
        backward2:"backward2 100s linear infinite"
      },
      keyframes: {
        marquee: {
          from: {
            transform: 'translateX(0)',
          },
          to: {
            transform: 'translateX(calc(-100% - 2.5rem))',
          },
        },
        backward1:{
          from: {
            left: 'translateX(0)',
          },
          to: {
            transform: 'translateX(calc(100% - 2.5rem))',
          },
        },
        backward2:{
          from: {
            left: 'translateX(0)',
          },
          to: {
            transform: 'translateX(calc(100% - 2.5rem))',
          },
        }
      
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      transitionProperty:{
        "height":"height",
        "width":"width"
      }
    },
  },
  plugins: [],
}
