import { FC } from 'react';
import { NoPoster } from '@/pages/Details/styles/Details.styles.tsx';
import {
    CarouselPoster,
    CarouselTitle,
    CarouselWrapper,
} from './styles/Carosel.style.ts';
import Slider from 'react-slick';
import { Movie } from '@/types/Movies.ts';
import { IMAGE_BASE_URL } from '@/utils/constants/Links.ts';
import { settings } from '@/utils/constants/CarouselSettings.ts';

interface Props {
    movies: Movie[];
    handleCarouselClick: (id: number) => void;
    prefetchSimilarMovies: (id: number) => void;
}

export const Carosel: FC<Props> = ({
    movies,
    handleCarouselClick,
    prefetchSimilarMovies,
}) => {
    return (
        <CarouselWrapper>
            <Slider {...settings}>
                {movies.map(movie => (
                    <div key={movie.id}>
                        {movie.poster ? (
                            <CarouselPoster
                                src={`${IMAGE_BASE_URL}${movie.poster}`}
                                alt={movie.title}
                                onClick={() => handleCarouselClick(movie.id)}
                                onMouseEnter={() =>
                                    prefetchSimilarMovies(movie.id)
                                }
                            />
                        ) : (
                            <NoPoster
                                onClick={() => handleCarouselClick(movie.id)}
                            >
                                <span>No Poster</span>
                            </NoPoster>
                        )}
                        <CarouselTitle>{movie.title}</CarouselTitle>
                    </div>
                ))}
            </Slider>
        </CarouselWrapper>
    );
};
