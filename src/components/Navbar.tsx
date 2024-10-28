import React from "react";
import { Box, InputBase, Container } from "@mui/material";
import {
  Search,
  Work,
  Notifications,
  Chat,
  People,
  House,
  LinkedIn,
} from "@mui/icons-material";
import styled from "styled-components";
import ThemeToggle from "./ThemeToggle";
import { Link, NavLink } from "react-router-dom";
import AccountMenu from "./AccountMenu";

const Navbar: React.FC = () => {
  return (
    <NavbarWrapper>
      <Container>
        <div className="flex justify-between h-[60px]">
          <Box className="flex items-center gap-1 w-full">
            <Link to="/">
              <Logo>
                <LinkedIn />
              </Logo>
            </Link>
            <StyledSearch>
              <Search fontSize="small" className="text-gray-500" />
              <InputBase
                placeholder="Search"
                onChange={(e) => console.log("Value", e.target.value)}
              />
            </StyledSearch>
          </Box>

          <NavIcons>
            <NavLinkContainer to="/" className="icon">
              <House />
              <span>Home</span>
            </NavLinkContainer>
            <NavLinkContainer to="/mynetwork" className="icon">
              <People />
              <span>My Network</span>
            </NavLinkContainer>
            <NavLinkContainer to="/jobs" className="icon">
              <Work />
              <span>Jobs</span>
            </NavLinkContainer>
            <NavLinkContainer to="/messaging" className="icon">
              <Chat />
              <span>Messaging</span>
            </NavLinkContainer>
            <NavLinkContainer to="/notifications" className="icon">
              <Notifications />
              <span>Notifications</span>
            </NavLinkContainer>
            <AccountMenu />
            <ThemeToggle />
          </NavIcons>
        </div>
      </Container>
    </NavbarWrapper>
  );
};

export default Navbar;

const NavbarWrapper = styled.header`
  background-color: ${({ theme }) => theme.colors.navbarBackground};
  color: ${({ theme }) => theme.colors.navbarText};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 2rem;
  z-index: 999;
  height: 60px;
  min-height: 60px;
`;

const StyledSearch = styled(Box)`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.searchBarBackground};
  padding: 0px 2.5rem 0 1rem;
  border-radius: 4px;
  width: 100%;
  max-width: 280px;
  height: 34px;
  transition: max-width 0.3s ease-out;

  &:focus-within {
    max-width: 384px;
    outline: 2px solid ${({ theme }) => theme.colors.navbarText};
  }

  .MuiInputBase-root {
    flex-grow: 1;
    border: none;
    outline: none;
    background: none;
    padding: 4px;
    font-size: 14px;
  }
`;

const NavIcons = styled(Box)`
  display: flex;
  align-items: center;

  .icon {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    width: 80px;
    height: 100%;
    transition: color 0.2s ease-in-out;

    &:hover {
      color: ${({ theme }) => theme.colors.textHover};
    }
  }
`;

const Logo = styled.div`
  svg {
    font-size: 45px;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const NavLinkContainer = styled(NavLink)`
  border-bottom: 2px solid transparent;

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.colors.textHover};
  }
`;
