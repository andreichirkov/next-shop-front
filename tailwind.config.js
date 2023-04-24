const plugin = require("tailwindcss/plugin")
const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      //default font
      sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
      //font can change by add class "font-poppins" on element
      poppins: ["Poppins", ...defaultTheme.fontFamily.sans]
    },
    // fontSize: {
    //   // [fontSize, lineHeight]
    //   xs: ['13px', '1.3'],
    //   sm: ['15px', '1.3'],
    //   base: ['16px', '1.3'],
    //   lg: ['18px', '1.3'],
    //   xl: ['20px', '1.3'],
    //   '2xl': ['22px', '1.3'],
    // },
    container: {
      center: true,
      //set up max-width restriction
      screens: {
        // sm: "100%",
        // md: "100%",
        // lg: "1024px",
        // xl: "1280px"
        "2xl": "1600px"
      }
    },
    extend: {
      colors: {
        'link-blue-primary': '#06c',
        'insta-red': '#ed4956',
        'apple-black-opacity': 'rgba(22, 22, 23, .8)'
      },
      fontSize: {
        xxs: "0.5rem"
      },
      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5"
      },
      keyframes: {
        fade: {
          from: { opacity: 0 },
          to: { opacity: 1 }
        }
      },
      animation: {
        fade: "fade .5s ease-in-out"
      }
    }
  },
  plugins: [
    plugin(({ addComponents, addBase, addUtilities, theme }) => {
      addComponents({
        ".btn-primary": {
          color: "#FFF",
          borderRadius: "0.65rem",
          transition: "background-color .3s ease-in-out",
          "&:hover": {
            backgroundColor: "#ff0009"
          }
        },
        // ".link-primary": {
        //   color: "#06c",
        //   fontSize: theme('fontSize.lg'),
        //   "&:hover": {
        //     textDecoration: "underline"
        //   }
        // },
        ".text-link": {
          textUnderlineOffset: "4",
          color: "rgba(255, 255, 255, .9)",
          transition: "text-decoration-color .3s ease-in-out",
          textDecorationLine: "underline",
          textDecorationColor: "rgba(255, 255, 255, .2)",
          "&:hover": {
            textDecorationColor: "rgba(255, 255, 255, .9)"
          }
        },
        "air-block": {
          borderRadius: theme("borderRadius.layout"),
          backgroundColor: theme("colors.gray.950"),
          color: theme("colors.white"),
          boxShadow: theme("boxShadow.lg")
        }
      })
      addUtilities({
        ".flex-center-between": {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        },
        ".outline-border-none": {
          outline: "none",
          border: "none"
        },
        ".image-like-bg": {
          objectPosition: "center",
          objectFit: "cover",
          pointerEvents: "none"
        }
      })
    })
  ]
}
