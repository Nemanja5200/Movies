import { useLocation } from 'react-router-dom';
import { RoutePath } from '@/utils/constants/routes';

const HIDE_WIDGET_PATHS = [RoutePath.LOGIN];

export const useWidgetVisibility = () => {
    const location = useLocation();
    return !HIDE_WIDGET_PATHS.includes(location.pathname);
};
