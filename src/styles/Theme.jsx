import { createTheme } from "@mui/material";

const colors = {
  primary: "#ee1515",
  secondary: "#f00000",
  body_bg: "#f0f0f0",
};

export const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
    background: {
      default: colors.body_bg,
    },
  },
});
