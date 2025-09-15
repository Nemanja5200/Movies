import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from '@/utils/constants/routes.ts';
import { useMovieHistory } from '@/context/HistoryWiget/useMovieHistory.ts';

export const useWidget = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const { addToHistory, movieHistory } = useMovieHistory();

    const toggleExpanded = () => {
        setIsExpanded(!isExpanded);
    };

    const navigate = useNavigate();

    const handleMovieClick = (id: number) => {
        navigate(`${RoutePath.DETAILS.replace(':id', String(id))}`);
    };
    return {
        isExpanded,
        toggleExpanded,
        handleMovieClick,
        addToHistory,
        movieHistory,
    };
};
