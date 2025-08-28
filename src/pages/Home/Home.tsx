import { FC } from 'react';
import { Movie } from '@/types/Movies.ts';
import { Card } from '@/components/Card';
import { CardsContainerStyle } from '@/pages/Home/styles/CardsContainer.style.ts';

interface HomeProps {
    movies: Movie[];
}


export const Home: FC<HomeProps> = ({ movies }) => {


    return (
        <>
            <CardsContainerStyle>
                {movies.map(item =>
                    item.title ? <Card key={item.id || item.title} {...item} /> : null
                )}
            </CardsContainerStyle>
        </>
    );
};
