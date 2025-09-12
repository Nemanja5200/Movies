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
    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

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
                            <NoPoster>
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
