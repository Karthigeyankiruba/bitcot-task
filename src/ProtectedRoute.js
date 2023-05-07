import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
  const isAuthenticated = localStorage.getItem("token");
  const isStaticTokenValid = isAuthenticated === "static_token";

  return isStaticTokenValid ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace={true} />
  );
}

export default ProtectedRoute;
