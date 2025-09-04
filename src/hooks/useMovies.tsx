import { gotNowPlayingMoviesOptions } from '@/queryOptions/gotNowPlayingMoviesOptions.ts';
import { useSuspenseQuery } from '@tanstack/react-query';
import { getSearchTermMoviesOptions } from '@/queryOptions/gotSearchTermOptions.ts';
import { getFillterOptions } from '@/queryOptions/gotFillterOptions.ts';
import { FilterParams } from '@/types/Filter.ts';

export const useMovies = (
    searchTerm: string,
    currentPage: number,
    appliedFilters: FilterParams
) => {
    const isSearching = !!searchTerm;
    const isFiltering = !!(
        appliedFilters.genres?.length ||
        appliedFilters.year ||
        appliedFilters.ratingMin ||
        appliedFilters.sortBy
    );

    const queryOptions = isFiltering
        ? getFillterOptions(currentPage, appliedFilters)
        : isSearching
          ? getSearchTermMoviesOptions(searchTerm, currentPage)
          : gotNowPlayingMoviesOptions(currentPage);

    const { data } = useSuspenseQuery(queryOptions);

    return {
        currentMovies: data?.results || [],
        totalPages: Math.min(data?.total_pages || 1, 500),
        totalResults: data?.total_results || 0,
        apiCurrentPage: data?.page || currentPage,

        isSearching,
    };
};
