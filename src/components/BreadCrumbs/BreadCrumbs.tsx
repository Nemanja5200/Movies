import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import {
    BreadcrumbContainer,
    BreadcrumbLink,
    BreadcrumbSeparator,
    BreadcrumbCurrent,
} from '@/components/BreadCrumbs/style/BreadCrumbs.style.ts';

export const BreadCrumbs: FC = () => {
    const location = useLocation();

    const pathSegments = location.pathname.split('/').filter(Boolean);

    const breadcrumbs = pathSegments.map((segment, index) => {
        const path = '/' + pathSegments.slice(0, index + 1).join('/');
        const label = segment.charAt(0).toUpperCase() + segment.slice(1);

        return { path, label };
    });

    return (
        <BreadcrumbContainer>
            <BreadcrumbLink to="/">Home</BreadcrumbLink>

            {breadcrumbs.map((crumb, index) => (
                <span key={crumb.path}>
                    <BreadcrumbSeparator>{'>'}</BreadcrumbSeparator>
                    {index === breadcrumbs.length - 1 ? (
                        <BreadcrumbCurrent>{crumb.label}</BreadcrumbCurrent>
                    ) : (
                        <BreadcrumbLink to={crumb.path}>
                            {crumb.label}
                        </BreadcrumbLink>
                    )}
                </span>
            ))}
        </BreadcrumbContainer>
    );
};
