// hooks/usePagination.ts (Ultra clean version)
import { QueryClient, useSuspenseQuery } from '@tanstack/react-query';
import { gotNowPlayingMoviesOptions } from '@/queryOptions/gotNowPlayingMoviesOptions.ts';
import { useUrlState } from './useUrlState';

export const usePagination = (storageKey = 'pagination-current-page') => {
    const [currentPage, updateValue, clearCurrentPage] = useUrlState({
        storageKey,
        defaultValue: 1,
        paramName: 'page'
    });

    const { data } = useSuspenseQuery(gotNowPlayingMoviesOptions(currentPage));
    const queryClient = new QueryClient();

    const allMovies = data.results;
    const totalPages = data.total_pages;
    const apiCurrentPage = data.page;
    const currentMovies = allMovies;

    const updatePage = (newPage: number) => {
        const validPage = Math.max(1, Math.min(totalPages, newPage));
        updateValue(validPage);
    };

    const goToPage = (page: number) => updatePage(page);
    const nextPage = () => hasNext && updatePage(currentPage + 1);
    const prevPage = () => hasPrev && updatePage(currentPage - 1);

    const prefetchNextPage = async () => {
        if (hasNext) {
            try {
                await queryClient.prefetchQuery(
                    gotNowPlayingMoviesOptions(currentPage + 1)
                );
            } catch (error) {
                console.error('Prefetch failed', error);
            }
        }
    };


    const prefetchLastPage = async () => {
            try {
                await queryClient.prefetchQuery(
                    gotNowPlayingMoviesOptions(totalPages)
                );
            } catch (error) {
                console.error('Prefetch failed', error);
            }
    };


    const prefetchPrevPage = async () => {
        const prevPage = currentPage - 1;

        if (prevPage < 1) return;

        const queryKey = gotNowPlayingMoviesOptions(prevPage).queryKey;

        const isCached = queryClient.getQueryData(queryKey);

        if (!isCached) {
            try {
                await queryClient.prefetchQuery(gotNowPlayingMoviesOptions(prevPage));
            } catch (error) {
                console.error('Prefetch prev page failed', error);
            }
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
        prefetchNextPage,
        prefetchLastPage,
        prefetchPrevPage,
        hasNext,
        hasPrev,
        clearSavedPage: () => {
            clearCurrentPage();
        }
    };
};