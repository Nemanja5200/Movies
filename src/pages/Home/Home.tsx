import { FC } from 'react';
import {  useSuspenseQuery } from '@tanstack/react-query';
import { gotNowPlayingMoviesOptions } from '@/queryOptions/gotNowPlayingMoviesOptions.ts';

export const Home: FC = () => {
    const {data,isPending} = useSuspenseQuery(gotNowPlayingMoviesOptions())
    const movies = data.results.slice(0, 10);

    return (
        <>


        </>
    );
};
