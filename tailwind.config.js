/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{jsx,js}","./src/**/**/*.{jsx,js}"],
  theme: {
    extend: {
      fontFamily : {
        "rock-salt" : "Rock Salt" ,
        "pecita" : "Pecita"
      },
      backgroundImage : {
        "about-bg":"url('C:/Users/balag/OneDrive/Desktop/Projects/Quix/QuixPortfolio/src/Components/AboutUs/image2.png')"
      }
    },
  },
  plugins: [],
}

