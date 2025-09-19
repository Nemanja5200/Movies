import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getTrailerOptions } from '@/queryOptions/getTrailerOptions.ts';

export const useVideoPlayerModal = (id: string | undefined) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const { data, isError } = useQuery(getTrailerOptions(id as string));

    return {
        openModal,
        closeModal,
        isModalOpen,
        trailerCode: data,
        isError,
    };
};
