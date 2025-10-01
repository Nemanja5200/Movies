import { useLocation } from 'react-router-dom';
import { RoutePath } from '@/utils/constants/routes.ts';
import { useAuth } from '@/context/Auth/useAuth.ts';

const HIDE_WIDGET_PATHS = [RoutePath.LOGIN];

export const useWidgetVisibility = () => {
    const { isAuth } = useAuth();
    const location = useLocation();
    const isOnHiddenPath = HIDE_WIDGET_PATHS.includes(
        location.pathname as RoutePath
    );

    return isAuth && !isOnHiddenPath;
};
