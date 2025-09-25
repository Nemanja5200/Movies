import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import {
    BreadcrumbContainer,
    BreadcrumbLink,
    BreadcrumbSeparator,
    BreadcrumbCurrent,
} from '@/components/BreadCrumbs/style/BreadCrumbs.style.ts';
import { useQuery } from '@tanstack/react-query';
import { getDetailsOption } from '@/queryOptions/getDetailsOption.ts';

export const BreadCrumbs: FC = () => {
    const location = useLocation();

    const pathSegments = location.pathname.split('/').filter(Boolean);

    const isMovieDetailsPage = pathSegments[0] === 'movie' && pathSegments[1];
    const movieId = isMovieDetailsPage ? pathSegments[1] : null;

    const { data: movieData } = useQuery({
        ...getDetailsOption(Number(movieId)),
        enabled: !!movieId,
    });

    const breadcrumbs = pathSegments.map((segment, index) => {
        const path = '/' + pathSegments.slice(0, index + 1).join('/');
        let label = segment.charAt(0).toUpperCase() + segment.slice(1);
        if (isMovieDetailsPage && index === 1 && movieData) {
            label = movieData.title;
        }

        return { path, label };
    });

    return (
        <BreadcrumbContainer>
            <BreadcrumbLink to="/">Home</BreadcrumbLink>

            {breadcrumbs.map((crumb, index) => (
                <span key={crumb.path}>
                    <BreadcrumbSeparator>{'>'}</BreadcrumbSeparator>
                    {index === breadcrumbs.length - 1 ||
                    crumb.label === 'Movie' ? (
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
