import { queryOptions } from '@tanstack/react-query';
import { tmdbService } from '@/service/tmdbService.ts';

export const getPieChartDataOptions = (year: number, isAuth: boolean) => {
    return queryOptions({
        queryKey: ['pieChartData', year],
        queryFn: () => tmdbService.getPieChartData(year),
        enabled: isAuth,
        staleTime: 5 * 60 * 1000,
        refetchOnWindowFocus: false,
    });
};
