import { createTheme } from "@mui/material/styles";

// Define the light theme
export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2", // Custom Primary Color (Blue)
    },
    secondary: {
      main: "#ff9800", // Custom Secondary Color (Orange)
    },
    background: {
      default: "#f4f6f8",
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
    h1: { fontSize: "2rem", fontWeight: 700 },
    h2: { fontSize: "1.75rem", fontWeight: 600 },
    body1: { fontSize: "1rem" },
  },
});

// Define the dark theme
export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9", // Light Blue for Dark Mode
    },
    secondary: {
      main: "#f48fb1", // Pink for Dark Mode
    },
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
    text: {
      primary: "#ffffff",
      secondary: "#b0bec5",
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
    h1: { fontSize: "2rem", fontWeight: 700 },
    h2: { fontSize: "1.75rem", fontWeight: 600 },
    body1: { fontSize: "1rem" },
  },
});
