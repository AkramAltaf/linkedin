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

const isAuthenticated = true;

const routes: RouteObject[] = [
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
];

const router = createBrowserRouter(routes);

export default router;
