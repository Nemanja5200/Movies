import { FC } from 'react';
import { Table } from '@/components/Table';
import { TableContainerStyle } from '@/pages/Home/styles/TableContainer.style.ts';
import { Pagination } from '@/components/Pagination/Pagination.tsx';
import { usePagination } from '@/hooks/usePagination.tsx';

export const Home: FC = () => {
    const { movies, currentPage, totalPages, hasNext, hasPrev, goToPage } =
        usePagination(20);

    return (
        <>
            <TableContainerStyle>
                <Table movies={movies} />
            </TableContainerStyle>
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                hasNext={hasNext}
                hasPrev={hasPrev}
                onPageChange={goToPage}
            />
        </>
    );
};
