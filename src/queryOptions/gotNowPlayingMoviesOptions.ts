import { queryOptions } from '@tanstack/react-query';
import { tmdbService } from '@/service/tmdbService.ts';

export const gotNowPlayingMoviesOptions = () => {
    return queryOptions({
        queryKey: ['now-playing'],
        queryFn: () => tmdbService.gotNowPlayingMovies(),
    });
};
