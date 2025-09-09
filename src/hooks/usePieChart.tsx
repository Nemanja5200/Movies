import { useSuspenseQuery } from '@tanstack/react-query';
import { getPieChartDataOptions } from '@/queryOptions/getPieChartDataOptions.tsx';
import { useAuth } from '@/context/Auth/useAuth.ts';

export const usePieChart = () => {
    const { isAuth } = useAuth();

    const { data } = useSuspenseQuery(getPieChartDataOptions(2024, isAuth));

    return {
        data,
    };
};
