import { useSuspenseQuery } from '@tanstack/react-query';
import { gotNowPlayingMoviesOptions } from '@/queryOptions/gotNowPlayingMoviesOptions.ts';
import { useUrlState } from './useUrlState';

export const usePagination = (
    items: number,
    storageKey = 'pagination-current-page'
) => {
    const [currentPage,updateValue, clearCurrentPage ] = useUrlState({
        storageKey,
        defaultValue: 1,
        paramName: 'page',
    });

    const { data } = useSuspenseQuery(gotNowPlayingMoviesOptions(currentPage));

    const allMovies = data.results;
    const totalPages = data.total_pages;
    const apiCurrentPage = data.page;
    const currentMovies = allMovies;



    const goToPage = (page: number) => {
        const validPage = Math.max(1, Math.min(totalPages, page));
        updateValue(validPage);
    };
    const nextPage = () => hasNext && goToPage(currentPage + 1);
    const prevPage = () => hasPrev && goToPage(currentPage - 1);

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
            clearCurrentPage();
        },
    };
};
