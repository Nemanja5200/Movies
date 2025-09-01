import { FC } from 'react';
import { Table } from '@/components/Table';
import { TableContainerStyle } from '@/components/Table/style/TableContainer.style.ts';
import { Pagination } from '@/components/Pagination/Pagination.tsx';
import { usePagination } from '@/hooks/usePagination.tsx';
import { SearchBar } from '@/components/SearchBar';
import { HomeContainerStyle } from '@/pages/Home/styles/HomeContainer.style.tsx';
import { useSearchTerm } from '@/hooks/useSearchTerm.tsx';

export const Home: FC = () => {
    const {
        movies,
        currentPage,
        totalPages,
        hasNext,
        hasPrev,
        goToPage,
        prefetchNextPage,
        prefetchLastPage,
        prefetchPrevPage,
        getPageRange,
    } = usePagination();


    const { searchTerm, handleChange } = useSearchTerm();

    return (
        <HomeContainerStyle>
            <TableContainerStyle>
                <SearchBar
                    value={searchTerm}
                    onChange={handleChange}
                />
                <Table movies={movies} />
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
