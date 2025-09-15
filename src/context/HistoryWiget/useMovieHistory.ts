import { useContext } from 'react';
import { MovieHistoryWidgetContext } from '@/context/HistoryWiget/MovieHistoryWidgetContext.ts';

export const useMovieHistory = () => {
    const context = useContext(MovieHistoryWidgetContext);
    if (!context) {
        throw new Error(
            'useHistoryWidgetContext must be used within an MovieHistoryWidgetProvider'
        );
    }
    return context;
};
