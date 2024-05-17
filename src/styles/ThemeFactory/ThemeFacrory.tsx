import { createTheme } from "@mui/material/styles";


export const ThemeFactory = (props: any) =>

  createTheme({
    typography: {
      fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
      h1: {
        fontSize: '3rem',
      },
      h2: {
        fontSize: '2.75rem',
      },
      h3: {
        fontSize: '2.5rem',
      },
      h4: {
        fontSize: '2.25rem',
      },
      h5: {
        fontSize: '2.0rem',
      },
      h6: {
        fontSize: '1.75rem',
      },
      body1: {
        fontSize: '1rem'
      },
      body2: {
        fontSize: '1rem'
      },
      subtitle1: {
        fontSize: '1rem'
      },
      subtitle2: {
        fontSize: '1rem'
      }
    },
    palette: {
      contrastThreshold: 4.5,
      primary: {
        main: "#3b3b3b",
        light: "#a8a8a8",
        dark: "yellow",
        contrastText: "#3b3b3b",
      },
      secondary: {
        main: "#3b3b3b",
        light: "#a8a8a8",
        dark: "yellow",
        contrastText: "#3b3b3b",
      },
      background: {
        default: "white",
        paper: "gray",
      },
    },
    transitions: {
      duration: {
        shortest: 150,
        shorter: 200,
        short: 250,
        standard: 300,
        complex: 375,
        enteringScreen: 225,
        leavingScreen: 195,
      },
      easing: {
        easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
        easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
        easeIn: "cubic-bezier(0.4, 0, 1, 1)",
        sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
      },
    },
  });
