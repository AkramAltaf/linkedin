import { createBrowserRouter, RouteObject } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import Jobs from "../pages/Jobs";
import MyNetwork from "../pages/MyNetwork";
import Messaging from "../pages/Messaging";
import Notifications from "../pages/Notifications";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "mynetwork",
        element: <MyNetwork />,
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
];

const router = createBrowserRouter(routes);

export default router;
