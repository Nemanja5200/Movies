import { queryOptions } from '@tanstack/react-query';
import { tmdbService } from '@/service/tmdbService.ts';
import { getTime } from '@/utils/getTime.ts';

export const getSearchTermMoviesOptions = (
    searchTerm: string,
    page: number
) => {
    return queryOptions({
        queryKey: ['search-tearm', searchTerm, page],
        queryFn: () => tmdbService.getSearchTermMovies(searchTerm, page),

        staleTime: getTime(5),
        gcTime: getTime(5),
        refetchOnWindowFocus: false,
    });
};
