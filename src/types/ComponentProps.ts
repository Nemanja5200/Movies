import { Movie } from '@/types/Movies.ts';

export interface PaginationProps {
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

export interface SearchBarProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface TableProps {
    movies: Movie[];
    handleRowClick: (id: number) => void;
}

export interface VideoPlayerModalProps {
    movieId: string | undefined;
    onClose: () => void;
}
