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

export const Home: FC = () => {
    const { searchTerm, debouncedSearchTerm, handleChange } = useSearchTerm();
    const {
        openModal,
        closeModal,
        isModalOpen,
        toggleGenres,
        filterParams,
        updateFilter,
        onClear,
    } = useFilter();
    const [currentPage, updateValue, clearCurrentPage] = useUrlState({
        storageKey: 'pagination-current-page',
        defaultValue: 1,
        paramName: 'page',
        serialize: (value: number) => value.toString(),
        deserialize: (value: string) => {
            const parsed = parseInt(value, 10);
            return parsed > 0 && parsed <= 500 ? parsed : null;
        },
        validate: (value: number) => value >= 1 && value <= 500,
    });

    const { currentMovies, totalPages } = useMovies(
        debouncedSearchTerm,
        currentPage,
        filterParams
    );

    const {
        hasNext,
        hasPrev,
        goToPage,
        prefetchNextPage,
        prefetchLastPage,
        prefetchPrevPage,
        getPageRange,
    } = usePagination(totalPages, currentPage, updateValue, clearCurrentPage);

    return (
        <HomeContainerStyle>
            <TableContainerStyle>
                <FilterSearchContainer>
                    <SearchBar value={searchTerm} onChange={handleChange} />
                    <FilterBtn onClick={openModal} />
                    <FilterModal
                        isModal={isModalOpen}
                        onClose={closeModal}
                        toggleGenre={toggleGenres}
                        filterParams={filterParams}
                        updateFilter={updateFilter}
                        onClear={onClear}
                    />
                </FilterSearchContainer>
                <Table movies={currentMovies} />
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
