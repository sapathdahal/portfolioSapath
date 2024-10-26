import { opacity } from '@cloudinary/url-gen/actions/adjust';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      fontFamily:{
        poppins:['Poppins','sans-serif']
      },
      colors:{
      primary:'#171635',
      },    
        
    },
  },
  plugins: [],
}

