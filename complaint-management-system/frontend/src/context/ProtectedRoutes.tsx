import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './AuthContext';


const ProtectedRoute: React.FC = () => {
  const { user } = useAuth();
  const [shouldRedirect, setShouldRedirect] = useState(false);

  useEffect(() => {
    if (!user) {
      const timer = setTimeout(() => {
        setShouldRedirect(true);
      }, 1000); 

      return () => clearTimeout(timer);
    }
  }, [user]);

  if (!user && shouldRedirect) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;