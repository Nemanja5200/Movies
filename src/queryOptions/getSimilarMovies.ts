import { queryOptions } from '@tanstack/react-query';
import { getTime } from '@/utils/getTime.ts';
import { tmdbService } from '@/service/tmdbService.ts';

export const getSimilarMovies = (id: number) => {
    return queryOptions({
        queryKey: ['similar-movies', id],
        queryFn: () => tmdbService.getSimilarMovies(id),
        staleTime: getTime(5),
    });
};
