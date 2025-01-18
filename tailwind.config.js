/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
	"./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {},
    extend: {
      colors:{
     'emerald': {
        '50': '#effef5',
        '100': '#dbfde8',
        '200': '#b8fad1',
        '300': '#81f4af',
        '400': '#43e584',
        '500': '#1acd63',
	'600': '#008001',		
        '700': '#108540',
        '800': '#126936',
        '900': '#11562f',
        '950': '#033018'
		},
      'greenleaf' : {
	'600' : '#008001' ,   
      }
	},
  },
  plugins: [],
}

