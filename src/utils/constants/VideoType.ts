export const VIDEO_TYPES = {
    TRAILER: 'trailer',
    MOVIE: 'movie',
} as const;

export type VideoType = (typeof VIDEO_TYPES)[keyof typeof VIDEO_TYPES];
