export type MovieHistoryItem = {
    id: number;
    title: string;
    poster: string;
};

export type MovieHistoryContextType = {
    movieHistory: MovieHistoryItem[];
    addToHistory: (movie: MovieHistoryItem) => void;
    removeFromHistory: (id: number) => void;
};
