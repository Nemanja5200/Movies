import {
    getSearchTermMoviesOptions,
    gotNowPlayingMoviesOptions,
} from '@/queryOptions/gotNowPlayingMoviesOptions.ts';
import { useSuspenseQuery } from '@tanstack/react-query';

export const useMovies = (searchTerm: string, currentPage: number) => {
    const isSearching = !!searchTerm;

    const { data } = useSuspenseQuery(
        isSearching
            ? getSearchTermMoviesOptions(searchTerm, currentPage)
            : gotNowPlayingMoviesOptions(currentPage)
    );

    return {
        currentMovies: data?.results || [],

        totalPages: data?.total_pages || 1,
        totalResults: data?.total_results || 0,
        apiCurrentPage: data?.page || currentPage,

        isSearching,
    };
};
