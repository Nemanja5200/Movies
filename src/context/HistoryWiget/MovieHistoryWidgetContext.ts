import { createContext } from 'react';
import { MovieHistoryContextType } from '@/types/HistoryWidget.ts';

export const MovieHistoryWidgetContext = createContext<
    MovieHistoryContextType | undefined
>(undefined);
