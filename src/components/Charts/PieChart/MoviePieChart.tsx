import { FC } from 'react';
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import { COLORS } from '@/utils/constants/PiceChartColors.ts';
import {
    ChartPageWrapper,
    ChartsContainer,
} from '@/components/Charts/PieChart/style/MoviePieChart.style.ts';
import { ChartData } from '@/types/Chart.ts';

interface Props {
    filtered: ChartData[];
}
export const MoviePieChart: FC<Props> = ({ filtered }) => {
    return (
        <>
            <ChartPageWrapper>
                <ChartsContainer>
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={filtered}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                outerRadius={150}
                                fill="#8884d8"
                                dataKey="value"
                                label={({ name, percent }) =>
                                    `${name} ${((percent as number) * 100).toFixed(0)}%`
                                }
                            >
                                {filtered?.map((entry, index) => (
                                    <Cell
                                        key={`cell-${entry.name}`}
                                        fill={COLORS[index % COLORS.length]}
                                    />
                                ))}
                                activeIndex={null}
                                <Tooltip />
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </ChartsContainer>
            </ChartPageWrapper>
        </>
    );
};
