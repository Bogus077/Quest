import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoutes = () => {
  const isAuthorized = true;

  return isAuthorized ? <Outlet /> : <Navigate to={'/login'} />;
};
