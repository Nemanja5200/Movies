import { QueryClient } from '@tanstack/react-query';
import { gotNowPlayingMoviesOptions } from '@/queryOptions/gotNowPlayingMoviesOptions.ts';
import { getFillterOptions } from '@/queryOptions/gotFillterOptions.ts';
import { FilterParams } from '@/types/Filter.ts';

export const usePagination = (
    totalPages: number,
    currentPage: number,
    updateValue: (value: number) => void,
    clearCurrentPage: () => void,
    isActive: () => boolean,
    currentFilterParams: FilterParams
) => {
    const queryClient = new QueryClient();

    const updatePage = (newPage: number) => {
        const validPage = Math.max(1, Math.min(totalPages, newPage));
        updateValue(validPage);
    };

    const goToPage = (page: number) => updatePage(page);
    const nextPage = () => hasNext && updatePage(currentPage + 1);
    const prevPage = () => hasPrev && updatePage(currentPage - 1);

    const prefetchNextPage = async () => {
        if (hasNext) {
            if (isActive()) {
                try {
                    await queryClient.prefetchQuery(
                        getFillterOptions(currentPage + 1, currentFilterParams)
                    );
                } catch (error) {
                    console.error('Prefetch prev filtered page failed', error);
                }

                return;
            }

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
        if (isActive()) {
            try {
                await queryClient.prefetchQuery(
                    getFillterOptions(totalPages, currentFilterParams)
                );
            } catch (error) {
                console.error('Prefetch prev filtered page failed', error);
            }

            return;
        }

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

        if (isActive()) {
            try {
                await queryClient.prefetchQuery(
                    getFillterOptions(prevPage, currentFilterParams)
                );
            } catch (error) {
                console.error('Prefetch prev filtered page failed', error);
            }

            return;
        }

        const queryKey = gotNowPlayingMoviesOptions(prevPage).queryKey;

        const isCached = queryClient.getQueryData(queryKey);

        if (!isCached) {
            try {
                await queryClient.prefetchQuery(
                    gotNowPlayingMoviesOptions(prevPage)
                );
            } catch (error) {
                console.error('Prefetch prev page failed', error);
            }
        }
    };

    const getPageRange = (windowSize = 4) => {
        let start = currentPage;
        let end = currentPage + windowSize - 1;

        if (end > totalPages) {
            end = totalPages;
            start = Math.max(1, end - windowSize + 1);
        }
        const pages = [];
        for (let i = start; i <= end; i++) {
            pages.push(i);
        }
        return pages;
    };

    const hasNext = currentPage < 500;
    const hasPrev = currentPage > 1;

    return {
        currentPage,
        totalPages,
        goToPage,
        nextPage,
        prevPage,
        prefetchNextPage,
        prefetchLastPage,
        prefetchPrevPage,
        getPageRange,
        hasNext,
        hasPrev,
        clearSavedPage: () => {
            clearCurrentPage();
        },
    };
};
