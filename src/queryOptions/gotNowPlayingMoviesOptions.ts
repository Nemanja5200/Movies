import { queryOptions } from '@tanstack/react-query';
import { tmdbService } from '@/service/tmdbService.ts';

export const gotNowPlayingMoviesOptions = (page: number) => {
    return queryOptions({
        queryKey: ['now-playing', page],
        queryFn: () => tmdbService.gotNowPlayingMovies(page),

        staleTime: 5 * 60 * 1000,
        gcTime: 10 * 60 * 1000,
        refetchOnWindowFocus: false,
    });
};
