import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './providers/AuthProvider';

interface ProtectedRouteProps {
    element: React.ReactNode;
    path?: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {

    const { isAuthenticated } = useAuth();
    const location = useLocation();

    if (!isAuthenticated) {
        return <Navigate to="/" state={{ from: location }} />;
    }

    return (
        <>{element}</>
    );
};

export default ProtectedRoute;
