import { FC } from 'react';
import {
    CloseButton,
    ModalContent,
    ModalOverlay,
    VideoContainer,
    VideoIframe,
} from '@/components/VideoPlayerModal/styled/VideoPlayerModal.style.ts';
import { YOUTUBE_URL } from '@/utils/constants/Links.ts';
import { VideoPlayerModalProps } from '@/types/ComponentProps.ts';

export const VideoPlayerModal: FC<VideoPlayerModalProps> = ({
    movieId,
    onClose,
}) => {
    return (
        <>
            <ModalOverlay>
                <ModalContent>
                    <CloseButton onClick={() => onClose()}>×</CloseButton>
                    <VideoContainer>
                        <VideoIframe
                            src={`${YOUTUBE_URL}${movieId}`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        />
                    </VideoContainer>
                </ModalContent>
            </ModalOverlay>
        </>
    );
};
