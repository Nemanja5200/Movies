// Modified useFilter hook
import { useState } from 'react';
import { FilterParams, GenreId } from '@/types/Filter.ts';
import { useUrlState } from '@/hooks/useUrlState.tsx';
import { filterParamsSerializer } from '@/utils/urlStateSerializers.ts';

export const useFilter = () => {
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
        isActive,
    };
};
