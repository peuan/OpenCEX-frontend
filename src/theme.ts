"use client"
import { createTheme } from "@mui/material/styles"

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#D33536",
    },
    background: {
      default: "#18191D",
      paper: "#141416",
    },
  },
  typography: {
    fontFamily: "var(--font-prompt-regular)",
  },
})

export default theme
