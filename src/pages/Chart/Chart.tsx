import { FC } from 'react';
import { MoviePieChart } from '@/components/Charts/PieChart/MoviePieChart.tsx';
import { ChartWrapper } from '@/pages/Chart/styles/Chart.style.ts';

export const Chart: FC = () => {
    return (
        <>
            <ChartWrapper>
                <MoviePieChart />
            </ChartWrapper>
        </>
    );
};
