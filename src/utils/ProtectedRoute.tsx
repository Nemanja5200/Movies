import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '@/context/Auth/useAuth.ts';

export const ProtectedRoute = () => {
    const { isAuth } = useAuth();
    return isAuth ? <Outlet /> : <Navigate to="/login" replace />;
};
