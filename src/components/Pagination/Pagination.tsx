import { FC } from 'react';
import { PaginationButton, PaginationContainer } from '@/components/Pagination/styles/Pagination.style.ts';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    hasNext: boolean;
    hasPrev: boolean;
}

export const Pagination: FC<PaginationProps> = () => {
  return (
    <>
        <PaginationContainer>
          <PaginationButton>
              {'<<'}
          </PaginationButton>
            <PaginationButton>
                {'<'}
            </PaginationButton>
            <PaginationButton>
                {'>'}
            </PaginationButton>
            <PaginationButton>
                {'>>'}
            </PaginationButton>
        </PaginationContainer>

    </>
  );
};



