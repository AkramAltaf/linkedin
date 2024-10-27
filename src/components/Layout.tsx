import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout: React.FC = () => (
  <div>
    <header className="p-4 bg-blue-600 text-white">
      <nav>
        <Link to="/" className="mr-4">
          Home
        </Link>
        <Link to="/jobs">Jobs</Link>
      </nav>
    </header>

    <main className="p-6">
      <Outlet />
    </main>

    <footer className="p-4 bg-gray-800 text-white text-center">
      &copy; 2024 LinkedIn Clone
    </footer>
  </div>
);

export default Layout;
