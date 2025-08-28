import { FC } from 'react';
import { Movie } from '@/types/Movies.ts';
import { CardContainerStyle } from '@/components/Card/styles/CardContainer.style.ts';
import { PosterStyle } from '@/components/Card/styles/Poster.style.ts';
import { TitileStyle } from '@/components/Card/styles/TitileStyle.ts';

export const Card: FC<Movie> = props => {
    return (
        <>
            <CardContainerStyle>
                <PosterStyle>
                <img src={`https://image.tmdb.org/t/p/w500${props.poster}`} />
                </PosterStyle>
                <TitileStyle>
                {props.title}
                </TitileStyle>
            </CardContainerStyle>
        </>
    );
};
