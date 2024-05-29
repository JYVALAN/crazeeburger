import { Navigate } from "react-router-dom";

export default function AuthGuard({ children }) {
  const isAdmin = false;

  if (!isAdmin) {
    return <Navigate to="/" />;
  }

  return children;
}
