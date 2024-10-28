import styled from "styled-components";
import { useThemeContext } from "../contexts/ThemeContext";
import { DarkModeOutlined, LightMode } from "@mui/icons-material";
import { Switch } from "@mui/material";

const ThemeToggle: React.FC = () => {
  const { isDarkMode, toggleTheme } = useThemeContext();

  return (
    // <ThemeToggleButton onClick={toggleTheme} className="icon">
    //   {isDarkMode ? <LightMode /> : <DarkModeOutlined />}
    //   <span>{isDarkMode ? "Light" : "Dark"}</span>
    // </ThemeToggleButton>
    <Switch
      checked={isDarkMode}
      onChange={toggleTheme}
      color="default"
      inputProps={{ "aria-label": "toggle theme" }}
    />
  );
};

export default ThemeToggle;

const ThemeToggleButton = styled.button`
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  font-size: 16px;
`;
