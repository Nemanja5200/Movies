import {
    Movie,
    MoviesResponse,
    RawMovie,
    RawTMDBResponse,
} from '@/types/Movies.ts';

export const ParseMoviesResponse = (
    rawResponce: RawTMDBResponse
): MoviesResponse => {
    const { page, total_pages, results, total_results } = rawResponce;

    return {
        page,
        total_pages,
        total_results,
        results: results.map(movie => ParseMovie(movie)),
    };
};

export const ParseMovie = (rawMovie: RawMovie): Movie => {
    const { id, title, overview, poster_path } = rawMovie;
    return {
        id,
        title,
        overview,
        poster: poster_path,
    };
};
