import { queryOptions } from '@tanstack/react-query';
import { tmdbService } from '@/service/tmdbService.ts';

export const getSearchTermMoviesOptions = (
    searchTerm: string,
    page: number
) => {
    return queryOptions({
        queryKey: ['search-tearm', searchTerm, page],
        queryFn: () => tmdbService.getSearchTermMovies(searchTerm, page),

        staleTime: 5 * 60 * 1000,
        gcTime: 10 * 60 * 1000,
        refetchOnWindowFocus: false,
    });
};
