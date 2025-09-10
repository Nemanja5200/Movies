import {
    Movie,
    MoviesResponse,
    RawDetails,
    RawMovie,
    RawTMDBResponse,
} from '@/types/Movies.ts';
import { GENRE_NAMES, GenreId } from '@/types/Genres.ts';
import { ChartData } from '@/types/Chart.ts';

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
