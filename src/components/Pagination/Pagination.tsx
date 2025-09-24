import { FC } from 'react';
import {
    PaginationButton,
    PaginationContainer,
} from '@/components/Pagination/styles/Pagination.style.ts';
import { PaginationPropsType } from '@/types/ComponentProps.ts';

export const Pagination: FC<PaginationPropsType> = ({
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
        <PaginationContainer>
            {/* First Page */}
            {hasPrev ? (
                <PaginationButton
                    onClick={() => onPageChange(1)}
                    disabled={!hasPrev}
                >
                    {'<<'}
                </PaginationButton>
            ) : null}

            {/* Previous Page */}
            {hasPrev ? (
                <PaginationButton
                    onClick={() => onPageChange(currentPage - 1)}
                    onMouseEnter={() => preFetchPrevPage()}
                    disabled={!hasPrev}
                >
                    {'<'}
                </PaginationButton>
            ) : null}

            {/* Page Range */}
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
            {hasNext ? (
                <PaginationButton
                    onClick={() => onPageChange(currentPage + 1)}
                    onMouseEnter={() => preFetchNextPage()}
                    disabled={!hasNext}
                >
                    {'>'}
                </PaginationButton>
            ) : null}

            {/* Last Page */}
            {hasNext && (
                <PaginationButton
                    onClick={() => onPageChange(totalPages)}
                    onMouseEnter={() => preFetchLastPage()}
                    disabled={!hasNext}
                >
                    {'>>'}
                </PaginationButton>
            )}
        </PaginationContainer>
    );
};
