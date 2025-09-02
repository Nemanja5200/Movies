import { FC } from 'react';
import { Table } from '@/components/Table';
import { TableContainerStyle } from '@/components/Table/style/TableContainer.style.ts';
import { Pagination } from '@/components/Pagination/Pagination.tsx';
import { usePagination } from '@/hooks/usePagination.tsx';
import { SearchBar } from '@/components/SearchBar';
import { HomeContainerStyle } from '@/pages/Home/styles/HomeContainer.style.tsx';
import { useSearchTerm } from '@/hooks/useSearchTerm.tsx';
import { useMovies } from '@/hooks/useMovies.tsx';
import { useUrlState } from '@/hooks/useUrlState.tsx';

export const Home: FC = () => {
    const { searchTerm, debouncedSearchTerm ,handleChange } = useSearchTerm();
    const [currentPage, updateValue, clearCurrentPage] = useUrlState({
        storageKey: 'pagination-current-page',
        defaultValue: 1,
        paramName: 'page',
    });

    const {currentMovies, totalPages} = useMovies(debouncedSearchTerm,currentPage)

    const {
        hasNext,
        hasPrev,
        goToPage,
        prefetchNextPage,
        prefetchLastPage,
        prefetchPrevPage,
        getPageRange,
    } = usePagination(totalPages,currentPage,updateValue,clearCurrentPage);





    return (
        <HomeContainerStyle>
            <TableContainerStyle>
                <SearchBar
                    value={searchTerm}
                    onChange={handleChange}
                />
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
