import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import styled from "styled-components";
import { Container } from "@mui/material";

const Layout: React.FC = () => (
  <>
    <Navbar />
    <Container>
      <MainLayout>
        <AsideLeft>Left Panel</AsideLeft>
        <MainContent>
          <Outlet />
        </MainContent>
        <AsideRight>Right Panel</AsideRight>
      </MainLayout>
    </Container>
  </>
);

export default Layout;

const MainLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  gap: 1rem;
  height: 100vh;
  padding-top: 5rem;
  overflow: hidden;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 3fr 1fr;
  }
`;

const MainContent = styled.div`
  background-color: #fff;
  padding: 1rem;
  overflow-y: auto;
`;

const AsideLeft = styled.aside`
  background-color: #f3f4f6;
  padding: 1rem;
  overflow-y: auto;
`;

const AsideRight = styled.aside`
  background-color: #f3f4f6;
  padding: 1rem;
  overflow-y: auto;
`;
