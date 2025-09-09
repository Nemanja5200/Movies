// Modified useFilter hook
import { useState } from 'react';
import { FilterParams, GenreId } from '@/types/Filter.ts';
import { useUrlState } from '@/hooks/useUrlState.tsx';
import { filterParamsSerializer } from '@/utils/urlStateSerializers.ts';
import { getFillterOptions } from '@/queryOptions/getFilterOptions.ts';
import { QueryClient } from '@tanstack/react-query';
export const useFilter = (
    currentPage?: number,
    setCurrentPage?: (value: number) => void
) => {
    const [draftFilters, setDraftFilters] = useState<FilterParams>({});

    const [appliedFilters, setAppliedFilters] = useUrlState<FilterParams>({
        storageKey: 'filters',
        defaultValue: {},
        paramName: 'filters',
        ...filterParamsSerializer,
    });

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setDraftFilters(appliedFilters);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const updateFilter = <K extends keyof FilterParams>(
        key: K,
        value: FilterParams[K]
    ) => {
        setDraftFilters(prev => ({
            ...prev,
            [key]: value,
        }));
    };

    const toggleGenre = (genreId: GenreId) => {
        setDraftFilters(prev => ({
            ...prev,
            genres: prev.genres?.includes(genreId)
                ? prev.genres.filter(id => id !== genreId)
                : [...(prev.genres || []), genreId],
        }));
    };

    const applyFilters = () => {
        setAppliedFilters(draftFilters);
        if (setCurrentPage) {
            setCurrentPage(1);
        }
        closeModal();
    };

    const clearFilters = () => {
        setDraftFilters({});
    };

    const isActive = () => {
        return !!(
            appliedFilters.genres?.length ||
            appliedFilters.year ||
            appliedFilters.ratingMin ||
            appliedFilters.sortBy
        );
    };

    const queryClient = new QueryClient();
    const prefetchFilter = async () => {
        try {
            await queryClient.prefetchQuery(
                getFillterOptions(currentPage, draftFilters)
            );
        } catch (error) {
            console.error('Prefetch failed', error);
        }
    };

    return {
        filterParams: draftFilters,
        appliedFilters,
        isModalOpen,
        openModal,
        closeModal,
        updateFilter,
        toggleGenre,
        applyFilters,
        clearFilters,
        prefetchFilter,
        isActive,
    };
};
