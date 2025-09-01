import { FC } from 'react';
import {
    PaginationButton,
    PaginationContainer,
} from '@/components/Pagination/styles/Pagination.style.ts';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    hasNext: boolean;
    hasPrev: boolean;
}

export const Pagination: FC<PaginationProps> = ({
    currentPage,
    totalPages,
    onPageChange,
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
                    disabled={!hasPrev}
                >
                    {'<'}
                </PaginationButton>

                <PaginationButton>{currentPage}</PaginationButton>

                {/* Next Page */}
                <PaginationButton
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={!hasNext}
                >
                    {'>'}
                </PaginationButton>

                {/* Last Page */}
                <PaginationButton
                    onClick={() => onPageChange(totalPages)}
                    disabled={!hasNext}
                >
                    {'>>'}
                </PaginationButton>
            </PaginationContainer>
        </>
    );
};
