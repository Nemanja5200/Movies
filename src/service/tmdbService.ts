import api from '../api/api.ts';
import { MoviesResponse } from '@/types/Movies.ts';
import { ParseMoviesResponse } from '@/utils/Parser.ts';
import { TMDBSortOption } from '@/types/Filter.ts';

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
                sort_by: sortBy
            },
        });

        return ParseMoviesResponse(response.data);
    }

};
