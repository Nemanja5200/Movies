import { ReactNode, useCallback, useEffect, useState } from 'react';
import { MovieHistoryItem } from '@/types/HistoryWidget.ts';
import { MovieHistoryWidgetContext } from '@/context/HistoryWiget/MovieHistoryWidgetContext.ts';

export const MovieHistoryWidgetProvider = ({
    children,
}: {
    children: ReactNode;
}) => {
    const MAX_MOVIES_IN_HISTORY = 5;

    const [movieHistory, setMovieHistory] = useState<MovieHistoryItem[]>(() => {
        try {
            const saved = localStorage.getItem('movieHistory');
            return saved ? JSON.parse(saved) : [];
        } catch {
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem('movieHistory', JSON.stringify(movieHistory));
    }, [movieHistory]);

    const addToHistory = useCallback((movie: MovieHistoryItem) => {
        setMovieHistory(prevState => {
            const filtered = prevState.filter(curr => curr.id !== movie.id);
            const updated = [movie, ...filtered];
            return updated.slice(0, MAX_MOVIES_IN_HISTORY);
        });
    }, []);

    const removeFromHistory = useCallback((id: number) => {
        setMovieHistory(prev => prev.filter(curr => curr.id !== id));
    }, []);

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
