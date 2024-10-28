import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout: React.FC = () => (
  <>
    <Navbar />
    <main className="pt-20">
      <Outlet />
    </main>
  </>
);

export default Layout;
