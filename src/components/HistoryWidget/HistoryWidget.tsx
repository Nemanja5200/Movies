import { FC, useState } from 'react';
import {
    CloseButton, HistoryContent,
    HistoryHeader, HistoryItem,
    HistoryPanel, MovieInfo, MoviePoster, MovieTitle,
    WidgetContainer,
} from '@/components/HistoryWidget/styles/HistoryWidget.style.ts';
import WidgetIcon from '@/assets/icons/WidgetIcon.svg?react';

export const HistoryWidget: FC = () => {

    const movieHistory = [
        {
            id: 1,
            title: 'The Dark Knight',
            year: 2008,
            genre: 'Action, Crime, Drama',
            rating: 9.0,
            poster: 'https://via.placeholder.com/60x90/333/fff?text=TDK',
            watchedDate: new Date('2024-01-15T20:30:00'),
            duration: 152,
        },
        {
            id: 2,
            title: 'Inception',
            year: 2010,
            genre: 'Sci-Fi, Thriller',
            rating: 8.8,
            poster: 'https://via.placeholder.com/60x90/333/fff?text=INC',
            watchedDate: new Date('2024-01-14T19:15:00'),
            duration: 148,
        },
        {
            id: 3,
            title: 'Pulp Fiction',
            year: 1994,
            genre: 'Crime, Drama',
            rating: 8.9,
            poster: 'https://via.placeholder.com/60x90/333/fff?text=PF',
            watchedDate: new Date('2024-01-12T21:00:00'),
            duration: 154,
        },
        {
            id: 4,
            title: 'The Matrix',
            year: 1999,
            genre: 'Action, Sci-Fi',
            rating: 8.7,
            poster: 'https://via.placeholder.com/60x90/333/fff?text=MTX',
            watchedDate: new Date('2024-01-10T18:45:00'),
            duration: 136,
        },
    ];

    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpanded = () => {
        setIsExpanded(!isExpanded);
    };

    


    return (
        <>
            <WidgetContainer $isExpanded={isExpanded}>
                {!isExpanded? (
                    <div onClick={toggleExpanded} style={{ cursor: 'pointer' }}>
                        <WidgetIcon />
                    </div>
                ):(
                    <HistoryPanel>
                        <HistoryHeader>
                            <span>Recently Viwed</span>
                            <CloseButton onClick={toggleExpanded}>×</CloseButton>
                        </HistoryHeader>

                        <HistoryContent>
                            {movieHistory.map(movie => (
                                <HistoryItem
                                    key={movie.id}
                                >
                                <MovieInfo>
                                    <MovieTitle>{movie.title}</MovieTitle>
                                </MovieInfo>
                                    <MoviePoster>
                                        <img src={movie.poster} alt={movie.title} />
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
