import { FC } from 'react';
import { Table } from '@/components/Table';
import { TableContainerStyle } from '@/components/Table/style/TableContainer.style.ts';
import { Pagination } from '@/components/Pagination/Pagination.tsx';
import { usePagination } from '@/hooks/usePagination.tsx';
import { SearchBar } from '@/components/SearchBar';
import {
    FilterSearchContainer,
    HomeContainerStyle,
} from '@/pages/Home/styles/HomeContainer.style.tsx';
import { useSearchTerm } from '@/hooks/useSearchTerm.tsx';
import { useMovies } from '@/hooks/useMovies.tsx';
import { useUrlState } from '@/hooks/useUrlState.tsx';
import { FilterBtn } from '@/components/Fillter/FilterBtn';
import { FilterModal } from '@/components/Fillter/FilterModal';
import { useFilter } from '@/hooks/useFilter.tsx';
import { createPageSerializer } from '@/utils/urlStateSerializers.ts';

export const Home: FC = () => {
    const { searchTerm, debouncedSearchTerm, handleChange } = useSearchTerm();

    const [currentPage, setCurrentPage, clearCurrentPage] = useUrlState({
        storageKey: 'pagination-current-page',
        defaultValue: 1,
        paramName: 'page',
        ...createPageSerializer(1, 500),
    });

    const {
        openModal,
        closeModal,
        isModalOpen,
        toggleGenre,
        clearFilters,
        appliedFilters,
        applyFilters,
        updateFilter,
        filterParams: currentFilterParams,
        prefetchFilter,
        isActive,
    } = useFilter(currentPage, setCurrentPage);

    const { currentMovies, totalPages, handleRowClick } = useMovies(
        debouncedSearchTerm,
        currentPage,
        appliedFilters
    );

    const {
        hasNext,
        hasPrev,
        goToPage,
        prefetchNextPage,
        prefetchLastPage,
        prefetchPrevPage,
        getPageRange,
    } = usePagination(
        totalPages,
        currentPage,
        setCurrentPage,
        clearCurrentPage,
        isActive,
        currentFilterParams,
        currentMovies.length
    );

    return (
        <HomeContainerStyle>
            <TableContainerStyle>
                <FilterSearchContainer>
                    <SearchBar value={searchTerm} onChange={handleChange} isActive={isActive()} />
                    <FilterBtn onClick={openModal} isActive={isActive()} />
                    <FilterModal
                        isModal={isModalOpen}
                        onClose={closeModal}
                        toggleGenre={toggleGenre}
                        filterParams={currentFilterParams}
                        updateFilter={updateFilter}
                        onClear={clearFilters}
                        onApply={applyFilters}
                        prefetchFilter={prefetchFilter}
                    />
                </FilterSearchContainer>
                <Table movies={currentMovies} handleRowClick={handleRowClick} />
            </TableContainerStyle>
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                preFetchNextPage={prefetchNextPage}
                preFetchLastPage={prefetchLastPage}
                preFetchPrevPage={prefetchPrevPage}
                pageRange={getPageRange}
                hasNext={hasNext}
                hasPrev={hasPrev}
                onPageChange={goToPage}
            />
        </HomeContainerStyle>
    );
};
