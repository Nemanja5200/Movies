import { queryOptions } from '@tanstack/react-query';
import { tmdbService } from '@/service/tmdbService.ts';

export const getBarChartOptions = (year: number, isAuth: boolean) => {
    return queryOptions({
        queryKey: ['barChartData', year],
        queryFn: () => tmdbService.getBarChartData(year),
        enabled: isAuth,
        staleTime: 5 * 60 * 1000,
        refetchOnWindowFocus: false,
    });
};
