import { FC } from 'react';
import styled from 'styled-components';
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';

const ChartContainer = styled.div`
    width: 30%;
    height: 400px;
    padding: 20px;
    background: #0A0E12;
    color: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    @media (max-width: 768px) {
        width: 100%;  // Make it full width on mobile
        height: 300px;
        padding: 10px;
    }
`;

export const MoviePieChart: FC = () => {
    const data = [
        { name: 'Action', value: 400 },
        { name: 'Comedy', value: 300 },
        { name: 'Drama', value: 300 },
        { name: 'Horror', value: 200 },
    ];

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    return (
        <ChartContainer>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent as number * 100).toFixed(0)}%`}
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${entry.name}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </ChartContainer>
    );
};