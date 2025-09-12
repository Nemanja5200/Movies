import { api, loginApi } from '../api/api.ts';
import { MoviesResponse } from '@/types/Movies.ts';
import { ParseDetails, ParseMoviesResponse } from '@/utils/Parser.ts';
import { TMDBSortOption } from '@/types/Filter.ts';
import { LoginInfo } from '@/types/LoginInfo.ts';
import { User } from '@/types/User.ts';
import { Details } from '@/types/Details.ts';

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

    getDetailsData: async (id: number): Promise<Details> => {
        const response = await api.get(`/movie/${id}`);

        return ParseDetails(response.data);
    },

    getSimilarMovies: async (id: number): Promise<MoviesResponse> => {
        const response = await api.get(`/movie/${id}/similar`);

        return ParseMoviesResponse(response.data);
    },
};
