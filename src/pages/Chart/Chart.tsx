import { FC } from 'react';
import { MoviePieChart } from '@/components/Charts/PieChart/MoviePieChart.tsx';
import { ChartWrapper, ButtonRow } from '@/pages/Chart/styles/Chart.style.ts';
import { MovieBarChart } from '@/components/Charts/BarChart';
import { FilterBtn } from '@/components/Fillter/FilterBtn';
import { FilterModal } from '@/components/Fillter/FilterModal';
import { useFilter } from '@/hooks/useFilter.tsx';
import { usePieChart } from '@/hooks/usePieChart.tsx';

export const Chart: FC = () => {
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
            <ChartWrapper>
                <ButtonRow>
                    <FilterBtn onClick={openModal} />
                </ButtonRow>
                <MoviePieChart filtered={filtered} />
                <MovieBarChart />
            </ChartWrapper>
        </>
    );
};
