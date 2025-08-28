import { FC } from 'react';
import { Movie } from '@/types/Movies.ts';
import { Card } from '@/components/Card';


interface HomeProps {
    movies: Movie | undefined;
}



export const Home: FC<HomeProps> = (props) => {


    return (
        <>
            {props.movies ? <Card {...props.movies} /> : <div>Loading...</div>}
        </>
    );
};
