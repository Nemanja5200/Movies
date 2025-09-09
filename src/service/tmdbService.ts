import { api, loginApi } from '../api/api.ts';
import { MoviesResponse, PieChartMovies } from '@/types/Movies.ts';
import { ParseChartResponse, ParseMoviesResponse } from '@/utils/Parser.ts';
import { TMDBSortOption } from '@/types/Filter.ts';
import { LoginInfo } from '@/types/LoginInfo.ts';
import { User } from '@/types/User.ts';

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
            code: '12345',
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

    getPieChartData: async (year: number): Promise<PieChartMovies[]> => {
        const initialRes = await api.get('/discover/movie', {
            params: {
                page: 1,
                primary_release_year: year,
                sort_by: 'popularity.desc',
            },
        });

        const totalPages = Math.min(initialRes.data.total_pages, 50);
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

        return ParseChartResponse(allResults);
    },
};
