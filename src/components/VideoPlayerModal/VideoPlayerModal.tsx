import { FC } from 'react';
import {
    CloseButton,
    ModalContent,
    ModalOverlay,
    VideoContainer,
    VideoIframe,
} from '@/components/VideoPlayerModal/styled/VideoPlayerModal.style.ts';
import { YOUTUBE_URL } from '@/utils/constants/Links.ts';
import { VideoPlayerModalPropsType } from '@/types/ComponentProps.ts';
import { VIDEO_TYPES } from '@/utils/constants/VideoType.ts';

export const VideoPlayerModal: FC<VideoPlayerModalPropsType> = ({
    movieId,
    onClose,
    videoType,
}) => {
    return (
        <>
            <ModalOverlay>
                <ModalContent>
                    <CloseButton onClick={() => onClose()}>×</CloseButton>
                    <VideoContainer>
                        {videoType === VIDEO_TYPES.TRAILER ? (
                            <VideoIframe
                                src={`${YOUTUBE_URL}${movieId}`}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            />
                        ) : videoType === VIDEO_TYPES.MOVIE ? (
                            <VideoIframe
                                src={`${import.meta.env.VITE_MOVIE_LINK}${movieId}`}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            />
                        ) : null}
                    </VideoContainer>
                </ModalContent>
            </ModalOverlay>
        </>
    );
};
