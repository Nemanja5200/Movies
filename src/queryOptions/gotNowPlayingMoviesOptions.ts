import { infiniteQueryOptions, queryOptions } from '@tanstack/react-query';
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

export const gotNowPlayingInfinityMoviesOptions = () => {
    return infiniteQueryOptions({
        queryKey: ['now-playing'],
        queryFn: ({ pageParam }) => tmdbService.gotNowPlayingMovies(pageParam),
        initialPageParam: 1,
        getNextPageParam: lastPage => {
            return lastPage.page !== lastPage.total_pages
                ? lastPage.page + 1
                : undefined;
        },
        getPreviousPageParam: firstPage => {
            return firstPage.page !== 1 ? firstPage.page - 1 : undefined;
        },
    });
};
