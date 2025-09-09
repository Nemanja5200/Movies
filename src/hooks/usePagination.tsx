import { useQueryClient } from '@tanstack/react-query';
import { getNowPlayingMoviesOptions } from '@/queryOptions/getNowPlayingMoviesOptions.ts';
import { getFillterOptions } from '@/queryOptions/getFilterOptions.ts';
import { FilterParams } from '@/types/Filter.ts';

export const usePagination = (
    totalPages: number,
    currentPage: number,
    updateValue: (value: number) => void,
    clearCurrentPage: () => void,
    isActive: () => boolean,
    currentFilterParams: FilterParams
) => {
    const queryClient = useQueryClient();

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
                    getNowPlayingMoviesOptions(currentPage + 1)
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
                getNowPlayingMoviesOptions(totalPages)
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

        const queryKey = getNowPlayingMoviesOptions(prevPage).queryKey;

        const isCached = queryClient.getQueryData(queryKey);

        if (!isCached) {
            try {
                await queryClient.prefetchQuery(
                    getNowPlayingMoviesOptions(prevPage)
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
