import { queryOptions } from '@tanstack/react-query';
import { tmdbService } from '@/service/tmdbService.ts';
import { FilterParams } from '@/types/Filter.ts';
import { getTime } from '@/utils/getTime.ts';

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

        staleTime: getTime(5),
        gcTime: getTime(5),
        refetchOnWindowFocus: false,
    });
};
