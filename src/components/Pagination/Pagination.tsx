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
    pageRange: (windowSize: number) => number[];
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
    pageRange,
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

                {pageRange(4).map(page => (
                    <PaginationButton
                        key={page}
                        onClick={() => onPageChange(page)}
                        disabled={page === currentPage}
                    >
                        {page}
                    </PaginationButton>
                ))}

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
