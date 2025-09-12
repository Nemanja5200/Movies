import { useQueryClient, useSuspenseQuery } from '@tanstack/react-query';
import { getDetailsOption } from '@/queryOptions/getDetailsOption.ts';
import { getSimilarMovies } from '@/queryOptions/getSimilarMovies.ts';
import { RoutePath } from '@/utils/constants/routes.ts';
import { useNavigate } from 'react-router-dom';

export const useDetails = (id: string | undefined) => {
    const movieId = Number(id);
    const navigate = useNavigate();
    const { data } = useSuspenseQuery(getDetailsOption(Number(movieId)));

    const { data: similarMovies } = useSuspenseQuery(
        getSimilarMovies(Number(movieId))
    );

    const handleCarouselClick = (id: number) => {
        navigate(`${RoutePath.DETAILS.replace(':id', String(id))}`);
    };

    const queryClient = useQueryClient();
    const prefetchSimilarMovie = async (id: number) => {
        try {
            await queryClient.prefetchQuery(getSimilarMovies(id));
        } catch (error) {
            console.error('Prefetch Similar movies fails', error);
        }
    };

    return {
        data,
        similarMovies,
        handleCarouselClick,
        prefetchSimilarMovie,
    };
};
