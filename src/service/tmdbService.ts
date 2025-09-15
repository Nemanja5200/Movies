import { api, loginApi } from '../api/api.ts';
import { MoviesResponse } from '@/types/Movies.ts';
import {
    ParsePieChartResponse,
    ParseMoviesResponse,
    ParseBarChartResponse,
    ParseDetails,
} from '@/utils/Parser.ts';
import { TMDBSortOption } from '@/types/Filter.ts';
import { LoginInfo } from '@/types/LoginInfo.ts';
import { User } from '@/types/User.ts';
import { Details } from '@/types/Details.ts';
import { ChartData } from '@/types/Chart.ts';

const fetchMoviesByYear = async (year: number, maxPages: number = 50) => {
    const initialRes = await api.get('/discover/movie', {
        params: {
            page: 1,
            primary_release_year: year,
            sort_by: 'popularity.desc',
        },
    });

    const totalPages = Math.min(initialRes.data.total_pages, maxPages);
    const allResults = [...initialRes.data.results];

    const pagePromises = [];

    for (let page = 2; page <= totalPages; page++) {
        pagePromises.push(
            api.get('/discover/movie', {
                params: {
                    primary_release_year: year,
                    sort_by: 'popularity.desc',
                    page,
                },
            })
        );
    }

    const responses = await Promise.all(pagePromises);

    responses.forEach(res => {
        allResults.push(...res.data.results);
    });

    return allResults;
};

export const tmdbService = {
    gotNowPlayingMovies: async (page: number = 1): Promise<MoviesResponse> => {
        const response = await api.get('/movie/now_playing', {
            params: { page },
        });

        return ParseMoviesResponse(response.data);
    },

    getSearchTermMovies: async (
        query: string,
        page: number = 1
    ): Promise<MoviesResponse> => {
        const response = await api.get('/search/movie', {
            params: {
                query,
                page,
            },
        });
        return ParseMoviesResponse(response.data);
    },

    getFilterMovies: async (
        page: number = 1,
        year?: number,
        genres?: string,
        vote_average?: number,
        sortBy?: TMDBSortOption
    ): Promise<MoviesResponse> => {
        const response = await api.get('/discover/movie', {
            params: {
                page,
                primary_release_year: year,
                with_genres: genres,
                vote_average_gte: vote_average,
                sort_by: sortBy,
            },
        });
        return ParseMoviesResponse(response.data);
    },

    getAuthToken: async (loginInfo: LoginInfo): Promise<string> => {
        const response = await loginApi.post('/login', {
            username: loginInfo.username,
            password: loginInfo.password,
            code: loginInfo.code.toString(),
        });

        return response.data.token;
    },

    getUserData: async (token: string): Promise<User> => {
        const response = await loginApi.get('/user', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return response.data;
    },

    getPieChartData: async (year: number): Promise<ChartData[]> => {
        const movies = await fetchMoviesByYear(year, 50);
        return ParsePieChartResponse(movies);
    },

    getBarChartData: async (year: number): Promise<ChartData[]> => {
        const movies = await fetchMoviesByYear(year, 3);

        const BATCH_SIZE = 20;
        const movieDetails = [];

        for (let i = 0; i < movies.length; i += BATCH_SIZE) {
            const batch = movies.slice(i, i + BATCH_SIZE);
            const batchPromises = batch.map(movie =>
                api.get(`/movie/${movie.id}`).catch(err => {
                    console.error(`Failed to fetch movie ${movie.id}:`, err);
                    return null;
                })
            );

            const batchResults = await Promise.all(batchPromises);
            const validResults = batchResults
                .filter(Boolean)
                .map(response => response?.data);
            movieDetails.push(...validResults);
        }

        return ParseBarChartResponse(movieDetails);
    },

    getDetailsData: async (id: number): Promise<Details> => {
        const response = await api.get(`/movie/${id}`);

        return ParseDetails(response.data);
    },

    getSimilarMovies: async (id: number): Promise<MoviesResponse> => {
        const response = await api.get(`/movie/${id}/similar`);

        return ParseMoviesResponse(response.data);
    },
};
