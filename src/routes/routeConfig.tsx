import { createBrowserRouter, RouteObject } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import Jobs from "../pages/Jobs";
import MyNetwork from "../pages/MyNetwork";
import Messaging from "../pages/Messaging";
import Notifications from "../pages/Notifications";
import ProtectedRoute from "./ProtectedRoute";
import Login from "../pages/Login";
import Signup from "../pages/Singup";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/mynetwork",
        element: <ProtectedRoute />, // Protect MyNetwork route
        children: [
          {
            path: "",
            element: <MyNetwork />,
          },
        ],
      },
      {
        path: "jobs",
        element: <Jobs />,
      },
      {
        path: "messaging",
        element: <Messaging />,
      },
      {
        path: "notifications",
        element: <Notifications />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />, // Directly render the Login component
  },
  {
    path: "/signup",
    element: <Signup />, // Directly render the Signup component
  },
];

const router = createBrowserRouter(routes);

export default router;
