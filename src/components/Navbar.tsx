import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { useThemeContext } from "../contexts/ThemeContext";

const NavbarContainer = styled.nav`
  background-color: ${({ theme }) => theme.colors.navbarBackground};
  color: ${({ theme }) => theme.colors.navbarText};
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const Logo = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

const ThemeToggleButton = styled.button`
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  font-size: 16px;
`;

const Navbar: React.FC = () => {
  const { isDarkMode, toggleTheme } = useThemeContext();

  return (
    <NavbarContainer>
      <Logo>LinkedIn Clone</Logo>
      <Link to="/" className="mr-4">
        Home
      </Link>
      <Link to="/jobs">Jobs</Link>
      <ThemeToggleButton onClick={toggleTheme}>
        {isDarkMode ? <DarkModeOutlinedIcon /> : <DarkModeIcon />}
      </ThemeToggleButton>
    </NavbarContainer>
  );
};

export default Navbar;
