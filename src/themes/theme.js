import { createTheme } from "@material-ui/core";

export const theme = createTheme({
  typography: {
    fontFamily: "Open Sans, sans-serif",
    fontSize: 16,
    fontWeight: "600",
    button: {
      fontFamily: "Montserrat, sans-serif",
      textTransform: "none",
      letterSpacing: 0,
      fontSize: 12,
      fontWeight: "600",
    },
  },

  palette: {
    primary: { main: "#3A8DFF" },
    secondary: { main: "#B0B0B0" },
  },
});
