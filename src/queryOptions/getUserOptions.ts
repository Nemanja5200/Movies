import { queryOptions } from '@tanstack/react-query';
import { tmdbService } from '@/service/tmdbService.ts';
import { getTime } from '@/utils/getTime.ts';

export const getUserOptions = (token: string) => {
    return queryOptions({
        queryKey: ['auth-user'],
        queryFn: () => tmdbService.getUserData(token),
        enabled: !!localStorage.getItem('token'),
        staleTime: getTime(5),
        refetchOnWindowFocus: false,
    });
};
