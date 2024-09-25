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
      paper: '#18191D'
    },
  },
  typography: {
    fontFamily: "var(--font-geist-mono)",
  },
});

export default theme;
