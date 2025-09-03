import { queryOptions } from '@tanstack/react-query';
import { tmdbService } from '@/service/tmdbService.ts';
import { TMDBSortOption } from '@/types/Filter.ts';

export const getFillterOptions = (
    page: number = 1,
    year?: number,
    genres?: string,
    vote_average?: number,
    sortBy?: TMDBSortOption
) => {
    return queryOptions({
        queryKey: ['search-tearm', page, year, genres, vote_average, sortBy],
        queryFn: () =>
            tmdbService.getFilterMovies(
                page,
                year,
                genres,
                vote_average,
                sortBy
            ),

        staleTime: 5 * 60 * 1000,
        gcTime: 10 * 60 * 1000,
        refetchOnWindowFocus: false,
    });
};
