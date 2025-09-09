import { FC } from 'react';
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';
import { usePieChart } from '@/hooks/usePieChart.tsx';
import { COLORS } from '@/utils/constants/PiceChartColors.ts';
import {
    ChartPageWrapper,
    ChartsContainer,
} from '@/components/Charts/PieChart/style/MoviePieChart.style.ts';
import { FilterBtn } from '@/components/Fillter/FilterBtn';
import { FilterModal } from '@/components/Fillter/FilterModal';
import { useFilter } from '@/hooks/useFilter.tsx';

export const MoviePieChart: FC = () => {
    const {
        isModalOpen,
        openModal,
        closeModal,
        clearFilters,
        appliedFilters,
        isActive,
        updateFilter,
        applyFilters,
        filterParams,
    } = useFilter();

    const { filtered, prefetchChartData } = usePieChart(
        appliedFilters,
        filterParams,
        isActive
    );

    return (
        <>
            <FilterModal
                isModal={isModalOpen}
                onClose={closeModal}
                filterParams={filterParams}
                updateFilter={updateFilter}
                prefetchChartData={prefetchChartData}
                onClear={clearFilters}
                onApply={applyFilters}
                sections={{
                    showGenres: false,
                    showYear: true,
                    showRating: false,
                    showSort: false,
                }}
            />
            <ChartPageWrapper>
                <FilterBtn onClick={openModal} />

                <ChartsContainer>
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={filtered}
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
                                {filtered?.map((entry, index) => (
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
        </>
    );
};
