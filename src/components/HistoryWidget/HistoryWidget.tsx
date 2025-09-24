import { FC } from 'react';
import {
    CloseButton,
    HistoryContent,
    HistoryHeader,
    HistoryItem,
    HistoryPanel,
    MovieInfo,
    MoviePoster,
    MovieTitle,
    WidgetContainer,
} from '@/components/HistoryWidget/styles/HistoryWidget.style.ts';
import WidgetIcon from '@/assets/icons/WidgetIcon.svg?react';
import { useWidget } from '@/hooks/Widget/useWidget.tsx';

export const HistoryWidget: FC = () => {
    const { isExpanded, toggleExpanded, handleMovieClick, movieHistory } =
        useWidget();
    return (
        <>
            <WidgetContainer $isExpanded={isExpanded}>
                {!isExpanded ? (
                    <div onClick={toggleExpanded} style={{ cursor: 'pointer' }}>
                        <WidgetIcon />
                    </div>
                ) : (
                    <HistoryPanel>
                        <HistoryHeader>
                            <span>Recently Viewed</span>
                            <CloseButton onClick={toggleExpanded}>
                                ×
                            </CloseButton>
                        </HistoryHeader>

                        <HistoryContent>
                            {movieHistory.map(movie => (
                                <HistoryItem
                                    key={movie.id}
                                    onClick={() => {
                                        handleMovieClick(movie.id);
                                    }}
                                >
                                    <MovieInfo>
                                        <MovieTitle>{movie.title}</MovieTitle>
                                    </MovieInfo>
                                    <MoviePoster>
                                        <img
                                            src={movie.poster}
                                            alt={movie.title}
                                        />
                                    </MoviePoster>
                                </HistoryItem>
                            ))}
                        </HistoryContent>
                    </HistoryPanel>
                )}
            </WidgetContainer>
        </>
    );
};
