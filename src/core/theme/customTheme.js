import { createTheme } from "@mui/material";
import "@fontsource/montserrat";

export const customTheme = createTheme({
  typography: {
    fontFamily: "Montserrat",
    fontSize: 18,
    button: {
      textTransform: "none",
    },
  },
  palette: {
    // mode:"dark",
    primary: {
      main: "rgba(36, 175, 122, 0.9)",
      light: "rgba(172, 226, 200, 1)",
      dark: "rgba(172, 226, 200, 1)",
    },
    background: {
      default: "#ACE2C8",
    },
    text: {
      primary: "rgba(255, 255, 255, 1)",
      secondary: "rgba(255, 255, 255, 0.8)",
    },
    action: {
      active: "rgba(255, 255, 255, 0.8)",
    },
  },
});
