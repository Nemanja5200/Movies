import { ReactNode, useEffect, useState } from 'react';
import { MovieHistoryItem } from '@/types/HistoryWidget.ts';
import { MovieHistoryWidgetContext } from '@/context/HistoryWiget/MovieHistoryWidgetContext.ts';

export const MovieHistoryWidgetProvider = ({
    children,
}: {
    children: ReactNode;
}) => {
    const MAX_MOVIES_IN_HISTORY = 5;
    const [movieHistory, setMovieHistory] = useState<MovieHistoryItem[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem('movieHistory');
        if (saved) {
            const parsed = JSON.parse(saved);
            setMovieHistory(parsed);
        }

        setIsLoaded(true);
    }, []);

    useEffect(() => {
        if (isLoaded) {
            localStorage.setItem('movieHistory', JSON.stringify(movieHistory));
        }
    }, [isLoaded, movieHistory]);

    const addToHistory = (movie: MovieHistoryItem) => {
        setMovieHistory(prevState => {
            const filtered = prevState.filter(curr => curr.id !== movie.id);
            const updated = [movie, ...filtered];

            return updated.slice(0, MAX_MOVIES_IN_HISTORY);
        });
    };

    const removeFromHistory = (id: number) => {
        setMovieHistory(prev => prev.filter(curr => curr.id !== id));
    };

    return (
        <MovieHistoryWidgetContext.Provider
            value={{
                movieHistory,
                addToHistory,
                removeFromHistory,
            }}
        >
            {children}
        </MovieHistoryWidgetContext.Provider>
    );
};
