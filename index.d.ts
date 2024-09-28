// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { TypeBackground } from "@mui/material/styles/createPalette";

// Example add custom type for MUI theme
declare module "@mui/material/styles/createPalette" {
  interface TypeBackground {
    secondary: string;
    light: string
  }
}
