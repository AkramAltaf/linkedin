import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute: React.FC = () => {
  const isAuthenticated = false;

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
