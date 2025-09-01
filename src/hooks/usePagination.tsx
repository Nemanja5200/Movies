import { useState } from 'react';
import { useSuspenseQuery } from '@tanstack/react-query';
import { gotNowPlayingMoviesOptions } from '@/queryOptions/gotNowPlayingMoviesOptions.ts';

export const usePagination = (items: number) => {
    const [currentPage, setCurrentPage] = useState(1);


    const { data } = useSuspenseQuery(gotNowPlayingMoviesOptions(currentPage));


    const allMovies = data.results;


    const totalPages = data.total_pages;
    const apiCurrentPage = data.page;


    const currentMovies = allMovies;

    const goToPage = (page: number) => {
        setCurrentPage(Math.max(1, Math.min(totalPages, page)));
    };

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const hasNext = currentPage < totalPages;
    const hasPrev = currentPage > 1;

    return {
        movies: currentMovies,
        allMovies,

        currentPage,
        totalPages,
        apiCurrentPage,

        goToPage,
        nextPage,
        prevPage,

        hasNext,
        hasPrev,
    };
};