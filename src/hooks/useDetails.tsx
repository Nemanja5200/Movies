import { useSuspenseQuery } from '@tanstack/react-query';
import { getDetailsOption } from '@/queryOptions/getDetailsOption.ts';
import { getSimilarMovies } from '@/queryOptions/getSimilarMovies.ts';

export const useDetails = (id: string | undefined) => {

    const movieId = Number(id);
    const { data } = useSuspenseQuery(getDetailsOption(Number(movieId)));

    const {data:similarMovies} = useSuspenseQuery(getSimilarMovies(Number(movieId)))

    return {
        data,
        similarMovies
    };
};
