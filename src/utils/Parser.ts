import {
    Movie,
    MoviesResponse,
    RawMovie,
    RawTMDBResponse,
} from '@/types/Movies.ts';
import { GENRE_NAMES, GenreId } from '@/types/Genres.ts';
import { ChartData } from '@/types/Chart.ts';
import { Details, RawDetails } from '@/types/Details.ts';
import { IMAGE_BASE_URL, IMAGE_POSTER_URL } from '@/utils/constants/Links.ts';

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

export const ParsePieChartResponse = (results: RawMovie[]): ChartData[] => {
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

export const ParseBarChartResponse = (results: RawDetails[]): ChartData[] => {
    const countryMap = results.reduce<Record<string, number>>((acc, movie) => {
        if (
            movie.production_countries &&
            Array.isArray(movie.production_countries)
        ) {
            movie.production_countries.forEach(country => {
                const countryName = country.name || country.iso_3166_1;
                if (countryName) {
                    acc[countryName] = (acc[countryName] || 0) + 1;
                }
            });
        }
        return acc;
    }, {});

    const chartData: ChartData[] = Object.entries(countryMap)
        .map(([country, count]) => ({
            name: country,
            value: count,
        }))

        .sort((a, b) => b.value - a.value)

        .slice(0, 10);

    return chartData;
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
        posterUrl: poster_path ? `${IMAGE_BASE_URL}${poster_path}` : null,
        backdropUrl: backdrop_path
            ? `${IMAGE_POSTER_URL}${backdrop_path}`
            : null,
        homepage,
        status,
        imdbId: imdb_id,
    };
};
