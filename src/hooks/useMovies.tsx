import { gotNowPlayingMoviesOptions } from '@/queryOptions/gotNowPlayingMoviesOptions.ts';
import { useSuspenseQuery } from '@tanstack/react-query';
import { getSearchTermMoviesOptions } from '@/queryOptions/gotSearchTermOptions.ts';
import { getFillterOptions } from '@/queryOptions/gotFillterOptions.ts';

export const useMovies = (searchTerm: string, currentPage: number) => {
    const isSearching = !!searchTerm;

    // const {data:FilterData} = useSuspenseQuery(getFillterOptions(1,2012));
    //
    // console.log(FilterData.results);

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
