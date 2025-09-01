import { FC } from 'react';
import {
    PaginationButton,
    PaginationContainer,
} from '@/components/Pagination/styles/Pagination.style.ts';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    preFetchNextPage: () => void;
    preFetchLastPage: () => void;
    preFetchPrevPage: () => void;
    hasNext: boolean;
    hasPrev: boolean;
}

export const Pagination: FC<PaginationProps> = ({
    currentPage,
    totalPages,
    onPageChange,
    preFetchNextPage,
    preFetchLastPage,
    preFetchPrevPage,
    hasNext,
    hasPrev,
}) => {
    return (
        <>
            {/* First Page */}
            <PaginationContainer>
                <PaginationButton
                    onClick={() => onPageChange(1)}
                    disabled={!hasPrev}
                >
                    {'<<'}
                </PaginationButton>

                {/* Previus Page */}
                <PaginationButton
                    onClick={() => onPageChange(currentPage - 1)}
                    onMouseEnter={() => preFetchPrevPage()}
                    disabled={!hasPrev}
                >
                    {'<'}
                </PaginationButton>

                <PaginationButton>{currentPage}</PaginationButton>

                {/* Next Page */}
                <PaginationButton
                    onClick={() => onPageChange(currentPage + 1)}
                    onMouseEnter={() => preFetchNextPage()}
                    disabled={!hasNext}
                >
                    {'>'}
                </PaginationButton>

                {/* Last Page */}
                <PaginationButton
                    onClick={() => onPageChange(totalPages)}
                    onMouseEnter={() => preFetchLastPage()}
                    disabled={!hasNext}
                >
                    {'>>'}
                </PaginationButton>
            </PaginationContainer>
        </>
    );
};
