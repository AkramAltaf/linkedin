import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout: React.FC = () => (
  <div>
    <Navbar />
    <main className="p-6">
      <Outlet />
    </main>
  </div>
);

export default Layout;
