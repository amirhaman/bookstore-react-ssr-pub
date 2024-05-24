import { createTheme } from "@mui/material/styles";
import MuiTableCell from "./MuiTableCell";

export const ThemeFactory = (props: any) =>
  createTheme({
    name: props.name,
    typography: {
      fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
      h1: {
        fontSize: "3rem",
      },
      h2: {
        fontSize: "2.75rem",
      },
      h3: {
        fontSize: "2.5rem",
      },
      h4: {
        fontSize: "2.25rem",
      },
      h5: {
        fontSize: "2.0rem",
      },
      h6: {
        fontSize: "1.75rem",
      },
      body1: {
        fontSize: "1rem",
      },
      body2: {
        fontSize: "1rem",
      },
      subtitle1: {
        fontSize: "1rem",
      },
      subtitle2: {
        fontSize: "1rem",
      },
    },
    palette: {
      contrastThreshold: 4.5,
      primary: {
        main: props.palette.primary.main,
        light: props.palette.primary.light,
        dark: props.palette.primary.dark,
        contrastText: props.palette.primary.contrastText,
      },
      secondary: {
        main: props.palette.secondary.main,
        light: props.palette.secondary.light,
        dark: props.palette.secondary.dark,
        contrastText: props.palette.secondary.contrastText,
      },
      background: {
        default: props.palette.background.default,
        paper: props.palette.background.paper,
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
    components: {
      MuiTableCell: MuiTableCell,
    },
  });
