import { createTheme } from "@mui/material";
import "@fontsource/montserrat";

export const customTheme = createTheme({
  palette: {
    mode: "dark",
  },
  typography: {
    fontFamily: "Montserrat",
    fontSize: 18,
    button: {
      textTransform: "none",
    },
  },
});