import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
  ReactNode,
} from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme, muiLightTheme, muiDarkTheme } from "../theme";

// Theme Context Type
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

// Get Initial Theme from LocalStorage
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

  // Memoized Themes
  const muiTheme = useMemo(
    () => (isDarkMode ? muiDarkTheme : muiLightTheme),
    [isDarkMode]
  );
  const styledTheme = useMemo(
    () => (isDarkMode ? darkTheme : lightTheme),
    [isDarkMode]
  );

  // Update body background-color whenever the theme changes
  useEffect(() => {
    document.body.style.backgroundColor = styledTheme.colors.bodyBackground;
  }, [styledTheme]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <MUIThemeProvider theme={muiTheme}>
        <StyledThemeProvider theme={styledTheme}>
          <div className={isDarkMode ? "dark" : ""}>{children}</div>
        </StyledThemeProvider>
      </MUIThemeProvider>
    </ThemeContext.Provider>
  );
};
