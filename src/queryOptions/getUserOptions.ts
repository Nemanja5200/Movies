import { queryOptions } from '@tanstack/react-query';
import { tmdbService } from '@/service/tmdbService.ts';

export const getUserOptions = (token: string) => {
    return queryOptions({
        queryKey: ['auth-user'],
        queryFn: () => tmdbService.getUserData(token),
        enabled: !!localStorage.getItem('token'),
        staleTime: 5 * 60 * 1000,
        refetchOnWindowFocus: false,
    });
};
