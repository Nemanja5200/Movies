import { FC } from 'react';
import {
    Bar,
    BarChart,
    CartesianGrid,
    Legend,
    Rectangle,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';
import {
    ChartsContainer,
    ChartTitle,
} from '@/components/Charts/PieChart/style/MoviePieChart.style.ts';
import { MovieBarChartPropsType } from '@/types/ComponentProps.ts';

export const MovieBarChart: FC<MovieBarChartPropsType> = ({ barChartData }) => {
    return (
        <>
            <ChartsContainer>
                <ChartTitle>
                    Number of movies by each Country by year
                </ChartTitle>
                <ResponsiveContainer width="90%" height="90%">
                    <BarChart
                        width={400}
                        height={100}
                        data={barChartData}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 60,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis
                            dataKey="name"
                            angle={-45}
                            textAnchor="end"
                            height={100}
                            interval={0}
                            tick={{
                                fontSize: 12,
                                fill: '#FFD700',
                            }}
                        />
                        <YAxis
                            label={{
                                value: 'Number of Movies',
                                angle: -90,
                                position: 'insideLeft',
                                fill: 'white',
                            }}
                        />
                        <Tooltip />
                        <Legend />
                        <Bar
                            name="Movie Count"
                            dataKey="value"
                            fill="#8884d8"
                            activeBar={<Rectangle fill="pink" stroke="blue" />}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </ChartsContainer>
        </>
    );
};
