import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routeConfig";

const App: React.FC = () => <RouterProvider router={router} />;

export default App;
