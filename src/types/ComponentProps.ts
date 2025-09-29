import { Movie } from '@/types/Movies.ts';
import { ChartData } from '@/types/Chart.ts';
import { RefObject } from 'react';

export interface PaginationPropsType {
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

export interface SearchBarPropsType {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface TablePropsType {
    movies: Movie[];
    handleRowClick: (id: number) => void;
}

export interface VideoPlayerModalPropsType {
    movieId: string | undefined;
    onClose: () => void;
}

export interface CarouselPropsType {
    movies: Movie[];
    handleCarouselClick: (id: number) => void;
}

export interface MoviePieChartPropsType {
    filtered: ChartData[];
    radius: number;
    containerRef: RefObject<HTMLDivElement | null>;
}

export interface MovieBarChartPropsType {
    barChartData?: ChartData[];
}
