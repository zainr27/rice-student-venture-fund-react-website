import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export const ProtectedRoute = (_props: ProtectedRouteProps) => {
  // For now, we'll just redirect to home since we don't have authentication
  return <Navigate to="/" replace />;
};
