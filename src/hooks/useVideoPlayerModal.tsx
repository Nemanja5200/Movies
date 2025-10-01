import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useScrollLock } from '@/hooks/useScrollLock.tsx';
import { getTrailerOptions } from '@/queryOptions/getTrailerOptions.ts';
import { VideoType } from '@/utils/constants/VideoType.ts';

export const useVideoPlayerModal = (id: string | undefined) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [videoLink, setVideoLink] = useState({
        type: "" as VideoType | "",
        source: ""
    });
    useScrollLock(isModalOpen);

    const openModal = (type: VideoType, source:string) => {
        setIsModalOpen(true);
        setVideoLink({
            type: type,
            source: source,
        })
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const { data } = useQuery(getTrailerOptions(id as string));

    return {
        openModal,
        videoLink,
        closeModal,
        isModalOpen,
        trailerCode: data,
    };
};
