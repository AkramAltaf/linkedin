import { createBrowserRouter, RouteObject } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import Jobs from "../pages/Jobs";

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
        path: "jobs",
        element: <Jobs />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
