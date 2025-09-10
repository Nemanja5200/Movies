import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getPieChartDataOptions } from '@/queryOptions/getPieChartDataOptions.tsx';
import { useAuth } from '@/context/Auth/useAuth.ts';
import { FilterParams } from '@/types/Filter.ts';
import { PieChartMovies } from '@/types/Movies.ts';
import { useMemo } from 'react';

export const usePieChart = (
    appliedFilters: FilterParams,
    isActive: () => boolean
) => {
    const { isAuth } = useAuth();
    const queryClient = useQueryClient();

    const year = appliedFilters.year ?? 1900;

    const { data } = useQuery(getPieChartDataOptions(year, isAuth));
    const total = data?.reduce((sum, item) => sum + item.value, 0) ?? 0;

    const processedData = useMemo(() => {
        if (!data || total === 0) return [];

        const threshold = 3; // percentage threshold
        const visableData: PieChartMovies[] = [];
        const otherItems: PieChartMovies[] = [];

        data.forEach(item => {
            const presentage = (item.value / total) * 100;
            if (presentage >= threshold) {
                visableData.push(item);
            } else {
                otherItems.push(item);
            }
        });

        const otherItemsValue = otherItems.reduce(
            (total, item) => total + item.value,
            0
        );
        if (otherItems.length > 0) {
            visableData.push({
                name: 'Other',
                value: otherItemsValue,
            });
        }

        return visableData;
    }, [data, total]);

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
        filtered: processedData,
        prefetchChartData,
    };
};
