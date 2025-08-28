import { FC } from 'react';
import { useSuspenseQuery } from '@tanstack/react-query';
import { gotNowPlayingMoviesOptions } from '@/queryOptions/gotNowPlayingMoviesOptions.ts';
import { Table } from '@/components/Table';
import { TableContainerStyle } from '@/pages/Home/styles/TableContainer.style.ts';

export const Home: FC = () => {
    const { data } = useSuspenseQuery(gotNowPlayingMoviesOptions());
    const movies = data.results.slice(0, 5);

    return (
        <>
            <TableContainerStyle>
                <Table movies={movies} />
            </TableContainerStyle>
        </>
    );
};
