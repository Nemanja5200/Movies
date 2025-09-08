import { queryOptions } from '@tanstack/react-query';
import { tmdbService } from '@/service/tmdbService.ts';
import { FilterParams } from '@/types/Filter.ts';

export const getFillterOptions = (
    page: number = 1,
    filterParams: FilterParams
) => {
    return queryOptions({
        queryKey: [
            'search-tearm',
            page,
            filterParams.year ?? 0,
            filterParams.genres?.join(',') ?? '',
            filterParams.ratingMin ?? 0,
            filterParams.sortBy ?? '',
        ],
        queryFn: () =>
            tmdbService.getFilterMovies(
                page,
                filterParams.year,
                filterParams.genres?.join(',') || '',
                filterParams.ratingMin,
                filterParams.sortBy
            ),

        staleTime: 5 * 60 * 1000,
        gcTime: 10 * 60 * 1000,
        refetchOnWindowFocus: false,
    });
};
