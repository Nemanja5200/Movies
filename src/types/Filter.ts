export const Sorting_Options = {
    POPULARITY_DESC: 'popularity.desc',
    POPULARITY_ASC: 'popularity.asc',
    VOTE_AVERAGE_DESC: 'vote_average.desc',
    VOTE_AVERAGE_ASC: 'vote_average.asc',
    RELEASE_DATE_DESC: 'release_date.desc',
    RELEASE_DATE_ASC: 'release_date.asc',
};

export type TMDBSortOption =
    (typeof Sorting_Options)[keyof typeof Sorting_Options];

export const SORT_DISPLAY_NAMES: Record<TMDBSortOption, string> = {
    'popularity.desc': 'Most Popular',
    'popularity.asc': 'Least Popular',
    'vote_average.desc': 'Highest Rated',
    'vote_average.asc': 'Lowest Rated',
    'release_date.desc': 'Newest First',
    'release_date.asc': 'Oldest First',
};

export const GENRES = {
    ACTION: 28,
    ADVENTURE: 12,
    ANIMATION: 16,
    COMEDY: 35,
    CRIME: 80,
    DOCUMENTARY: 99,
    DRAMA: 18,
    FAMILY: 10751,
    FANTASY: 14,
    HISTORY: 36,
    HORROR: 27,
    MUSIC: 10402,
    MYSTERY: 9648,
    ROMANCE: 10749,
    SCIENCE_FICTION: 878,
    TV_MOVIE: 10770,
    THRILLER: 53,
    WAR: 10752,
    WESTERN: 37,
} as const;

export type GenreId = (typeof GENRES)[keyof typeof GENRES];

export const GENRE_NAMES: Record<GenreId, string> = {
    28: 'Action',
    12: 'Adventure',
    16: 'Animation',
    35: 'Comedy',
    80: 'Crime',
    99: 'Documentary',
    18: 'Drama',
    10751: 'Family',
    14: 'Fantasy',
    36: 'History',
    27: 'Horror',
    10402: 'Music',
    9648: 'Mystery',
    10749: 'Romance',
    878: 'Science Fiction',
    10770: 'TV Movie',
    53: 'Thriller',
    10752: 'War',
    37: 'Western',
};

export interface FilterParams {
    genres?: GenreId[];
    year?: number;
    ratingMin?: number;
    sortBy?: TMDBSortOption;
}
