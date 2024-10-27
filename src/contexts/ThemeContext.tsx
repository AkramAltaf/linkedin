import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
  ReactNode,
} from "react";
import {
  ThemeProvider as StyledThemeProvider,
  DefaultTheme,
} from "styled-components";
import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
} from "@mui/material/styles";

// Light and Dark Themes for styled-components
const lightTheme: DefaultTheme = {
  colors: {
    primary: "#0a66c2",
    background: "#f3f2ef",
    textPrimary: "#000000",
    textSecondary: "#666666",
    border: "#e6e6e6",
  },
};

const darkTheme: DefaultTheme = {
  colors: {
    primary: "#0a66c2",
    background: "#1c1c1c",
    textPrimary: "#ffffff",
    textSecondary: "#b3b3b3",
    border: "#3a3a3a",
  },
};

// Light and Dark Themes for Material UI
const muiLightTheme = createTheme({
  palette: {
    primary: { main: "#0a66c2" },
    background: { default: "#f3f2ef" },
    text: { primary: "#000000", secondary: "#666666" },
    divider: "#e6e6e6",
  },
});

const muiDarkTheme = createTheme({
  palette: {
    primary: { main: "#0a66c2" },
    background: { default: "#1c1c1c" },
    text: { primary: "#ffffff", secondary: "#b3b3b3" },
    divider: "#3a3a3a",
  },
});

// Context and Hook Definitions
type ThemeContextType = {
  isDarkMode: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }
  return context;
};

// Helper Function to Get Initial Theme from LocalStorage
const getInitialTheme = (): boolean => {
  const savedTheme = localStorage.getItem("theme");
  return savedTheme ? savedTheme === "dark" : false;
};

// Theme Provider Component
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(getInitialTheme);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  useEffect(() => {
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const muiTheme = useMemo(
    () => (isDarkMode ? muiDarkTheme : muiLightTheme),
    [isDarkMode]
  );
  const styledTheme = useMemo(
    () => (isDarkMode ? darkTheme : lightTheme),
    [isDarkMode]
  );

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <MUIThemeProvider theme={muiTheme}>
        <StyledThemeProvider theme={styledTheme}>
          <div className={isDarkMode ? "dark" : ""}>{children}</div>{" "}
          {/* Tailwind dark mode */}
        </StyledThemeProvider>
      </MUIThemeProvider>
    </ThemeContext.Provider>
  );
};
