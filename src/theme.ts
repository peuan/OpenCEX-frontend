"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#D33536",
    },
    background: {
      default: "#18191D",
      paper: "#141416",
      secondary: "#17191D",
      light: "#23262F",
    },
  },
  typography: {
    fontFamily: "var(--font-prompt-regular)",
  },
  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: false,
      },
    },
  },
});

export default theme;
