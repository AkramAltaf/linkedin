import { createBrowserRouter, RouteObject } from "react-router-dom";
import Home from "../pages/Home";
import Jobs from "../pages/Jobs";
import MyNetwork from "../pages/MyNetwork";
import Messaging from "../pages/Messaging";
import Notifications from "../pages/Notifications";
import Signup from "../components/Singup";
import Login from "../components/Login";
import ProtectedRoute from "./ProtectedRoute"; // Protect private routes

const routes: RouteObject[] = [
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
  {
    path: "/",
    element: <ProtectedRoute />, // Ensure these routes are protected
    children: [
      { path: "feed", element: <Home /> },
      { path: "mynetwork", element: <MyNetwork /> },
      { path: "jobs", element: <Jobs /> },
      { path: "messaging", element: <Messaging /> },
      { path: "notifications", element: <Notifications /> },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
