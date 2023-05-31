import { Navigate, Outlet } from "react-router-dom";

export const PrivateRouteLogin = ({user}) => {
    if (user && user?.status === false) {
      return <Navigate to="/" />;
    }
  
    return <Outlet />;
  };
  
  export const PrivateRouteUser = ({user}) => {
  
    if (user && user?.role === 'admin') {
      return <Navigate to={'/'} />;
    }
    return <Outlet />;
  };
  
  export const PrivateRouteAdmin = ({user}) => {

    if (user && user?.role === 'user') {
      return <Navigate to={'/'} />;
    }
    return <Outlet />;
  };