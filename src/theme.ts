import { DefaultTheme } from "styled-components";
import { createTheme } from "@mui/material/styles";

// Light Theme
export const lightTheme: DefaultTheme = {
  colors: {
    primary: "#0a66c2",
    background: "#f3f2ef",
    bodyBackground: "#ffffff",
    textPrimary: "#000000",
    textSecondary: "#666666",
    border: "#e6e6e6",
    navbarBackground: "#ffffff", // Navbar light background
    navbarText: "#0a66c2", // Navbar light text color
  },
};

// Dark Theme
export const darkTheme: DefaultTheme = {
  colors: {
    primary: "#0a66c2",
    background: "#1c1c1c",
    bodyBackground: "#121212",
    textPrimary: "#ffffff",
    textSecondary: "#b3b3b3",
    border: "#3a3a3a",
    navbarBackground: "#1c1c1c", // Navbar dark background
    navbarText: "#ffffff", // Navbar dark text color
  },
};

// Material UI Themes
export const muiLightTheme = createTheme({
  palette: {
    primary: { main: "#0a66c2" },
    background: { default: "#f3f2ef" },
    text: { primary: "#000000", secondary: "#666666" },
    divider: "#e6e6e6",
  },
});

export const muiDarkTheme = createTheme({
  palette: {
    primary: { main: "#0a66c2" },
    background: { default: "#1c1c1c" },
    text: { primary: "#ffffff", secondary: "#b3b3b3" },
    divider: "#3a3a3a",
  },
});
