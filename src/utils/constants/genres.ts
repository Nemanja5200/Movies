import { GENRE_NAMES, GENRES } from '@/types/Filter.ts';

export const GENRE_LIST = Object.values(GENRES).map(id => ({
    id,
    name: GENRE_NAMES[id],
}));
