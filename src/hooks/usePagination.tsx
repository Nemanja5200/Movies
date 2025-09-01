import { useState } from 'react';
import { useSuspenseQuery } from '@tanstack/react-query';
import { gotNowPlayingMoviesOptions } from '@/queryOptions/gotNowPlayingMoviesOptions.ts';

export const usePagination = (
    items: number,
    storageKey = 'pagination-current-page'
) => {
    const [currentPage, setCurrentPage] = useState(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem(storageKey);
            if (saved) {
                const parsedPage = parseInt(saved, 10);
                return parsedPage > 0 ? parsedPage : 1;
            }
        }
        return 1;
    });

    const { data } = useSuspenseQuery(gotNowPlayingMoviesOptions(currentPage));

    const allMovies = data.results;

    const totalPages = data.total_pages;
    const apiCurrentPage = data.page;

    const currentMovies = allMovies;

    const goToPage = (page: number) => {
        const newPage = Math.max(1, Math.min(totalPages, page));
        setCurrentPage(newPage);

        if (typeof window !== 'undefined') {
            localStorage.setItem(storageKey, newPage.toString());
        }
    };

    const nextPage = () => {
        if (hasNext) {
            setCurrentPage(prevState => {
                const newPage = prevState + 1;

                if (typeof window !== 'undefined') {
                    localStorage.setItem(storageKey, newPage.toString());
                }
                return newPage;
            });
        }
    };

    const prevPage = () => {
        if (hasPrev) {
            setCurrentPage(prevState => {
                const newPage = prevState - 1;

                if (typeof window !== 'undefined') {
                    localStorage.setItem(storageKey, newPage.toString());
                }

                return newPage;
            });
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

        clearSavedPage: () => {
            if (typeof window !== 'undefined') {
                localStorage.removeItem(storageKey);
            }
            setCurrentPage(1);
        },
    };
};
