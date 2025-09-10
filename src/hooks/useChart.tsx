import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getPieChartDataOptions } from '@/queryOptions/getPieChartDataOptions.tsx';
import { useAuth } from '@/context/Auth/useAuth.ts';
import { FilterParams } from '@/types/Filter.ts';
import { useMemo } from 'react';
import { ChartData } from '@/types/Chart.ts';
import { getBarChartOptions } from '@/queryOptions/getBarChartOptions.ts';

export const useChart = (
    appliedFilters: FilterParams,
    isActive: () => boolean
) => {
    const { isAuth } = useAuth();
    const queryClient = useQueryClient();

    const year = appliedFilters.year ?? 1900;

    const { data: pieChartdata } = useQuery(
        getPieChartDataOptions(year, isAuth)
    );
    const { data: barChartData } = useQuery(getBarChartOptions(year, isAuth));

    const total = pieChartdata?.reduce((sum, item) => sum + item.value, 0) ?? 0;

    const processedPieChartData = useMemo(() => {
        if (!pieChartdata || total === 0) return [];

        const threshold = 3; // percentage threshold
        const visibleData: ChartData[] = [];
        const otherItems: ChartData[] = [];

        pieChartdata.forEach(item => {
            const percentage = (item.value / total) * 100;
            if (percentage >= threshold) {
                visibleData.push(item);
            } else {
                otherItems.push(item);
            }
        });

        const otherItemsValue = otherItems.reduce(
            (total, item) => total + item.value,
            0
        );
        if (otherItems.length > 0) {
            visibleData.push({
                name: 'Other',
                value: otherItemsValue,
            });
        }

        return visibleData;
    }, [pieChartdata, total]);

    const prefetchPieChartData = async (yearToPrefetch: number) => {
        if (isActive()) {
            try {
                console.log(yearToPrefetch);

                await queryClient.prefetchQuery(
                    getPieChartDataOptions(yearToPrefetch, isAuth)
                );

                await queryClient.prefetchQuery(
                    getBarChartOptions(yearToPrefetch, isAuth)
                );
            } catch (error) {
                console.error('Prefetching pie chart data failed:', error);
            }
        }
    };

    return {
        filtered: processedPieChartData,
        prefetchChartData: prefetchPieChartData,
        barChartData,
    };
};
