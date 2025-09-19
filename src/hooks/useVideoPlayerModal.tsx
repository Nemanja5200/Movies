import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getTrailerOptions } from '@/queryOptions/getTrailerOptions.tsx';
import { useScrollLock } from '@/hooks/useScrollLock.tsx';

export const useVideoPlayerModal = (id: string | undefined) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    useScrollLock(isModalOpen);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const { data } = useQuery(getTrailerOptions(id as string));

    return {
        openModal,
        closeModal,
        isModalOpen,
        trailerCode: data,
    };
};
