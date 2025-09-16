import { Navigate, Outlet } from 'react-router-dom';
import { RoutePath } from '@/utils/constants/routes.ts';
import { useAuth } from '@/context/Auth/useAuth.ts';

export const LoginRoute = () => {
    const { isAuth } = useAuth();

    if (isAuth) {
        return <Navigate to={RoutePath.HOME} replace />;
    }

    return <Outlet />;
};
