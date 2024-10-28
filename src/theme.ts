import { DefaultTheme } from "styled-components";
import { createTheme } from "@mui/material/styles";

// Light Theme
export const lightTheme: DefaultTheme = {
  colors: {
    primary: "#0a66c2",
    background: "#f3f2ef",
    bodyBackground: "#f4f2ee",
    textPrimary: "#000000",
    textSecondary: "#666666",
    border: "#e6e6e6",
    navbarBackground: "#ffffff", 
    navbarText: "rgb(0 0 0 / .6);", 
    searchBarBackground: "#EDF3F8",
    textHover: "#191919"
  },
};

// Dark Theme
export const darkTheme: DefaultTheme = {
  colors: {
    primary: "#0a66c2",
    background: "#1c1c1c",
    bodyBackground: "#23272F",
    textPrimary: "#ffffff",
    textSecondary: "#b3b3b3",
    border: "#3a3a3a",
    navbarBackground: "#23272F", 
    navbarText: "#E6E7EB", 
    searchBarBackground: "#343945",
    textHover: "#E6E7EB"
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
