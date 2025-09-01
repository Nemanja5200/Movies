import { queryOptions } from '@tanstack/react-query';
import { tmdbService } from '@/service/tmdbService.ts';

export const gotNowPlayingMoviesOptions = (page: number) => {
    return queryOptions({
        queryKey: ['now-playing' , page ],
        queryFn: () => tmdbService.gotNowPlayingMovies(page),
    });
};
