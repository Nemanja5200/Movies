import { useEffect, useState } from 'react';
import { useSuspenseQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import { gotNowPlayingMoviesOptions } from '@/queryOptions/gotNowPlayingMoviesOptions.ts';

export const usePagination = (
    items: number,
    storageKey = 'pagination-current-page'
) => {
    const [searchParams, setSearchParams] = useSearchParams();

    const getInitialPage = () => {
        const urlPage = searchParams.get('page');
        if (urlPage) {
            const parsed = parseInt(urlPage, 10);
            if (parsed > 0) return parsed;
        }

        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem(storageKey);
            if (saved) {
                const parsedPage = parseInt(saved, 10);
                return parsedPage > 0 ? parsedPage : 1;
            }
        }

        return 1;
    };

    const [currentPage, setCurrentPage] = useState(getInitialPage());
    useEffect(() => {
        const urlPage = searchParams.get('page');
        const urlPageNum = urlPage ? parseInt(urlPage, 10) : null;

        if (urlPageNum !== currentPage) {
            const newSearchParams = new URLSearchParams(searchParams);
            if (currentPage === 1) {
                newSearchParams.delete('page');
            } else {
                newSearchParams.set('page', currentPage.toString());
            }

            setSearchParams(newSearchParams);
        }
    }, [currentPage, searchParams, setSearchParams]);

    useEffect(() => {
        const urlPage = searchParams.get('page');
        const urlPageNum = urlPage ? parseInt(urlPage, 10) : 1;

        if (urlPageNum !== currentPage && urlPageNum > 0) {
            setCurrentPage(urlPageNum);
        }
    }, [searchParams]);

    const { data } = useSuspenseQuery(gotNowPlayingMoviesOptions(currentPage));

    const allMovies = data.results;

    const totalPages = data.total_pages;
    const apiCurrentPage = data.page;

    const currentMovies = allMovies;

    const updatePage = (newPage: number) => {
        const validPage = Math.max(1, Math.min(totalPages, newPage));
        setCurrentPage(validPage);

        if (typeof window !== 'undefined') {
            localStorage.setItem(storageKey, validPage.toString());
        }
    };

    const goToPage = (page: number) => {
        updatePage(page);
    };

    const nextPage = () => {
        if (hasNext) {
            updatePage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (hasPrev) {
            updatePage(currentPage - 1);
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
