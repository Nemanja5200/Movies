import { FC } from 'react';
import { Table } from '@/components/Table';
import { TableContainerStyle } from '@/components/Table/style/TableContainer.style.ts';
import { Pagination } from '@/components/Pagination/Pagination.tsx';
import { usePagination } from '@/hooks/usePagination.tsx';
import { SearchBar } from '@/components/SearchBar/SearchBar.tsx';
import { HomeContainerStyle } from '@/pages/Home/styles/HomeContainer.style.tsx';

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

    return (
        <>
            <HomeContainerStyle>

            <TableContainerStyle>
                <SearchBar/>
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
        </>
    );
};
