import {
    Movie,
    MoviesResponse,
    PieChartMovies,
    RawMovie,
    RawTMDBResponse,
} from '@/types/Movies.ts';
import { GENRE_NAMES, GenreId } from '@/types/Genres.ts';

export const ParseMoviesResponse = (
    rawResponse: RawTMDBResponse
): MoviesResponse => {
    const { page, total_pages, results, total_results } = rawResponse;

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

export const ParseChartResponse = (results: RawMovie[]): PieChartMovies[] => {
    const pieChartMap = results.reduce<Record<string, number>>((acc, movie) => {
        movie.genre_ids.forEach(id => {
            const genreName = GENRE_NAMES[id as GenreId];
            if (genreName) {
                acc[genreName] = (acc[genreName] || 0) + 1;
            }
        });
        return acc;
    }, {});

    return Object.entries(pieChartMap).map(([name, value]) => ({
        name,
        value,
    }));
};
