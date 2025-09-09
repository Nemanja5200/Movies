import { GenreId } from '@/types/Genres.ts';

export const SORTING_OPTIONS = {
    POPULARITY_DESC: 'popularity.desc',
    POPULARITY_ASC: 'popularity.asc',
    VOTE_AVERAGE_DESC: 'vote_average.desc',
    VOTE_AVERAGE_ASC: 'vote_average.asc',
    RELEASE_DATE_DESC: 'release_date.desc',
    RELEASE_DATE_ASC: 'release_date.asc',
};

export type TMDBSortOption =
    (typeof SORTING_OPTIONS)[keyof typeof SORTING_OPTIONS];

export const SORT_DISPLAY_NAMES: Record<TMDBSortOption, string> = {
    'popularity.desc': 'Most Popular',
    'popularity.asc': 'Least Popular',
    'vote_average.desc': 'Highest Rated',
    'vote_average.asc': 'Lowest Rated',
    'release_date.desc': 'Newest First',
    'release_date.asc': 'Oldest First',
};

export interface FilterParams {
    genres?: GenreId[];
    year?: number;
    ratingMin?: number;
    sortBy?: TMDBSortOption;
}
