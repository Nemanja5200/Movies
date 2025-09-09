import { FC } from 'react';

import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';
import { usePieChart } from '@/hooks/usePieChart.tsx';
import { COLORS } from '@/utils/constants/PiceChartColors.ts';
import {
    ChartPageWrapper,
    ChartsContainer,
} from '@/components/Charts/PieChart/style/MoviePieChart.style.ts';
import { FilterBtn } from '@/components/Fillter/FilterBtn';

export const MoviePieChart: FC = () => {
    const { data } = usePieChart();
    return (
        <ChartPageWrapper>
            <FilterBtn />
            <ChartsContainer>
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius={120}
                            fill="#8884d8"
                            dataKey="value"
                            label={({ name, percent }) =>
                                `${name} ${((percent as number) * 100).toFixed(0)}%`
                            }
                        >
                            {data?.map((entry, index) => (
                                <Cell
                                    key={`cell-${entry.name}`}
                                    fill={COLORS[index % COLORS.length]}
                                />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </ChartsContainer>
        </ChartPageWrapper>
    );
};
