import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import styled from "styled-components";
import { Container } from "@mui/material";

const Layout: React.FC = () => (
  <>
    <Navbar />
    <FixedContainer>
      <MainLayout>
        <AsideLeft>Left Panel</AsideLeft>
        <MainContent>
          <Outlet />
        </MainContent>
        <AsideRight>Right Panel</AsideRight>
      </MainLayout>
    </FixedContainer>
  </>
);

export default Layout;

const FixedContainer = styled(Container)`
  // && {
  //   max-width: 100%;
  //   height: 100vh;
  //   display: flex;
  //   flex-direction: column;
  // }
`;

const MainLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  flex: 1;
  padding-top: 5rem;
  padding-bottom: 5rem;

  @media (min-width: 768px) {
    grid-template-columns: 1.2fr 3fr 1.5fr;
  }
`;

const AsideLeft = styled.aside`
  background-color: ${({ theme }) => theme.colors.bodyBackground};
  color: ${({ theme }) => theme.colors.textSecondary};
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  height: fit-content;
`;

const AsideRight = styled.aside`
  background-color: ${({ theme }) => theme.colors.bodyBackground};
  color: ${({ theme }) => theme.colors.textSecondary};
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  height: fit-content;
`;

const MainContent = styled.main`
  background-color: transparent;
  overflow-y: auto;
  min-height: 0; /* Prevent content from overflowing */
`;
