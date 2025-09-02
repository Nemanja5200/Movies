import api from '../api/api.ts';
import { MoviesResponse } from '@/types/Movies.ts';
import { ParseMoviesResponse } from '@/utils/Parser.ts';

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
        const response = await api.get('/search/collection', {
            params: {
                query,
                page,
            },
        });
        return response.data;
    },
};
