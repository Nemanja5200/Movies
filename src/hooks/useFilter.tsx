import { useState } from 'react';
import { FilterParams, GenreId } from '@/types/Filter.ts';

export const useFilter = () => {
    const [filterParams, setFilterParams] = useState<FilterParams>({});
    const [isModalOpen, setIsModalOpen] = useState(false);

    const isActive = (): boolean => {
        return !!(
            (filterParams.genres && filterParams.genres.length > 0) ||
            filterParams.year ||
            filterParams.ratingMin ||
            filterParams.sortBy
        );
    };

    const onClear = () => {
        setFilterParams({});
    };

    const updateFilter = <K extends keyof FilterParams>(
        key: K,
        value: FilterParams[K]
    ) => {
        setFilterParams(prevState => ({
            ...prevState,
            [key]: value,
        }));
    };

    const toggleGenres = (genreId: GenreId) => {
        setFilterParams(prevState => ({
            ...prevState,
            genres: prevState.genres?.includes(genreId)
                ? prevState.genres.filter(id => id !== genreId)
                : [...(prevState.genres || []), genreId],
        }));
    };

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return {
        setFilterParams,
        isActive,
        onClear,
        updateFilter,
        toggleGenres,
        isModalOpen,
        openModal,
        closeModal,
    };
};
