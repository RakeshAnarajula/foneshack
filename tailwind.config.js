/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'], // Add Montserrat font
      },
      animation: {
        'slide-left': 'slideLeft 2s ease-out forwards',
        'slide-right': 'slideRight 2s ease-out forwards',
      },
      keyframes: {
        slideLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};


// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}", // Specify the files to scan for Tailwind CSS classes
//   ],
//   theme: {
//     extend: {
//       fontFamily: {
//         montserrat: ['Montserrat', 'sans-serif'], // Add Montserrat font
//       },
//       animation: {
//         'slide-left': 'slideLeft 2s ease-out forwards',
//         'slide-right': 'slideRight 2s ease-out forwards',
//       },
//       keyframes: {
//         slideLeft: {
//           '0%': { transform: 'translateX(-100%)', opacity: '0' },
//           '100%': { transform: 'translateX(0)', opacity: '1' },
//         },
//         slideRight: {
//           '0%': { transform: 'translateX(100%)', opacity: '0' },
//           '100%': { transform: 'translateX(0)', opacity: '1' },
//         },
//       },
//     },
//   },
//   plugins: [],
// };
