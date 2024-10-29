import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useSelector } from "react-redux";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import Jobs from "../pages/Jobs";
import MyNetwork from "../pages/MyNetwork";
import Messaging from "../pages/Messaging";
import Notifications from "../pages/Notifications";
import ProtectedRoute from "./ProtectedRoute";
import Login from "../pages/Login";
import Signup from "../pages/Singup";
import { RootState } from "../store/store";

const Routes: React.FC = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProtectedRoute isAuthenticated={isAuthenticated} />,
      children: [
        {
          path: "/",
          element: <Layout />,
          children: [
            { path: "/", element: <Home /> },
            { path: "mynetwork", element: <MyNetwork /> },
            { path: "jobs", element: <Jobs /> },
            { path: "messaging", element: <Messaging /> },
            { path: "notifications", element: <Notifications /> },
          ],
        },
      ],
    },
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <Signup /> },
  ]);

  return <RouterProvider router={router} />;
};

export default Routes;
