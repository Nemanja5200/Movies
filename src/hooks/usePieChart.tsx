import { useQuery } from '@tanstack/react-query';
import { getPieChartDataOptions } from '@/queryOptions/getPieChartDataOptions.tsx';
import { useAuth } from '@/context/Auth/useAuth.ts';

export const usePieChart = (year: number = 1900) => {
    const { isAuth } = useAuth();

    const { data } = useQuery(getPieChartDataOptions(year, isAuth));

    return {
        data,
    };
};
