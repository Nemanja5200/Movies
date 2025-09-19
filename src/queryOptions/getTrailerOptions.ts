import { queryOptions } from '@tanstack/react-query';
import { tmdbService } from '@/service/tmdbService.ts';
import { getTime } from '@/utils/getTime.ts';

export const getTrailerOptions = (id: string) => {
    return queryOptions({
        queryKey: ['trailer-key', id],
        queryFn: () => tmdbService.getMovieTrailer(id),
        enabled: !!id,
        retry: 0,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        staleTime: getTime(5),
    });
};
