import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getPieChartDataOptions } from '@/queryOptions/getPieChartDataOptions.tsx';
import { useAuth } from '@/context/Auth/useAuth.ts';
import { FilterParams } from '@/types/Filter.ts';

export const usePieChart = (
    appliedFilters: FilterParams,
    currentFilterParams: FilterParams,
    isActive: () => boolean
) => {
    const { isAuth } = useAuth();
    const queryClient = useQueryClient();

    const year = appliedFilters.year ?? 1900;

    const { data } = useQuery(getPieChartDataOptions(year, isAuth));
    const total = data?.reduce((sum, item) => sum + item.value, 0) ?? 0;

    const visibleData = data?.filter(item => (item.value / total) * 100 >= 1);

    const prefetchChartData = async (yearToPrefetch: number) => {
        if (isActive()) {
            try {
                console.log(yearToPrefetch);

                await queryClient.prefetchQuery(
                    getPieChartDataOptions(yearToPrefetch, isAuth)
                );
            } catch (error) {
                console.error('Prefetching pie chart data failed:', error);
            }
        }
    };

    return {
        filtered: visibleData,
        prefetchChartData,
    };
};
