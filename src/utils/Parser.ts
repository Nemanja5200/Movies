import {
    Movie,
    MoviesResponse,
    RawMovie,
    RawTMDBResponse,
} from '@/types/Movies.ts';
import { Details, RawDetails } from '@/types/Details.ts';

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

export const ParseDetails = (rawDetails: RawDetails): Details => {
    const {
        title,
        original_title,
        overview,
        tagline,
        release_date,
        runtime,
        genres,
        original_language,
        spoken_languages,
        production_countries,
        production_companies,
        budget,
        revenue,
        vote_average,
        vote_count,
        poster_path,
        backdrop_path,
        homepage,
        status,
        imdb_id,
    } = rawDetails;

    return {
        title,
        originalTitle: original_title,
        overview,
        tagline,
        releaseDate: release_date,
        runtime,
        genres: genres.map(({ name }) => name),
        language: original_language,
        spokenLanguages: spoken_languages.map(
            ({ english_name }) => english_name
        ),
        countries: production_countries.map(({ name }) => name),
        productionCompanies: production_companies.map(({ name }) => name),
        budget,
        revenue,
        voteAverage: vote_average,
        voteCount: vote_count,
        posterUrl: poster_path
            ? `https://image.tmdb.org/t/p/w500${poster_path}`
            : null,
        backdropUrl: backdrop_path
            ? `https://image.tmdb.org/t/p/w780${backdrop_path}`
            : null,
        homepage,
        status,
        imdbId: imdb_id,
    };
};
