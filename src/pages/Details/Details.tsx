import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useDetails } from '@/hooks/useDetails.tsx';
import {
    ActionButton,
    ButtonsContainer,
    CarouselContainer,
    ContentWrapper,
    DetailsContainer,
    GenresContainer,
    GenreTag,
    HeroOverlay,
    HeroSection,
    MainInfoSection,
    MetaInfo,
    MetaItem,
    MetaLabel,
    MetaValue,
    MovieInfo,
    NoPoster,
    PlayButton,
    Poster,
    PosterContainer,
    Rating,
    RatingContainer,
    RatingMax,
    RatingScore,
    Tagline,
    Title,
    VoteCount,
} from '@/pages/Details/styles/Details.styles.tsx';
import { IMBD_BASE_URL } from '@/utils/constants/Links.ts';
import { Carousel } from '@/components/Carousel';
import { VideoPlayerModal } from '@/components/VideoPlayerModal';
import { useVideoPlayerModal } from '@/hooks/useVideoPlayerModal.tsx';
import { VIDEO_TYPES } from '@/utils/constants/VideoType.ts';

export const Details: FC = () => {
    const { id } = useParams<{ id: string }>();

    const { data, similarMovies, handleCarouselClick } = useDetails(id);

    const { openModal, closeModal, isModalOpen, trailerCode, videoLink } =
        useVideoPlayerModal(id);
    return (
        <>
            <DetailsContainer>
                <HeroSection $backdrop={data.backdropUrl || undefined}>
                    <HeroOverlay />
                </HeroSection>

                <ContentWrapper>
                    <MainInfoSection>
                        <PosterContainer>
                            {data.posterUrl ? (
                                <>
                                    <Poster
                                        src={data.posterUrl}
                                        alt={data.title}
                                    />
                                    {trailerCode ? (
                                        <PlayButton
                                            className="play-button"
                                            onClick={() =>
                                                openModal(
                                                    VIDEO_TYPES.MOVIE,
                                                    data.imdbId
                                                )
                                            }
                                        />
                                    ) : null}

                                    {isModalOpen && trailerCode ? (
                                        <VideoPlayerModal
                                            onClose={closeModal}
                                            movieId={videoLink.source}
                                            videoType={videoLink.type}
                                        />
                                    ) : null}
                                </>
                            ) : (
                                <>
                                    <NoPoster>No Poster Available</NoPoster>
                                    {trailerCode ? (
                                        <PlayButton
                                            className="play-button"
                                            onClick={() =>
                                                openModal(
                                                    VIDEO_TYPES.MOVIE,
                                                    data.imdbId
                                                )
                                            }
                                        />
                                    ) : null}
                                </>
                            )}
                        </PosterContainer>

                        <MovieInfo>
                            <Title>{data.title}</Title>

                            {data.tagline ? (
                                <Tagline>{data.tagline}</Tagline>
                            ) : null}

                            {/*{Ratings}*/}
                            <RatingContainer>
                                <Rating>
                                    <RatingScore>
                                        {data.voteAverage.toFixed(1)}
                                    </RatingScore>
                                    <RatingMax>/10</RatingMax>
                                </Rating>
                                <VoteCount>
                                    ({data.voteCount.toLocaleString()} votes)
                                </VoteCount>
                            </RatingContainer>

                            {/* Genres */}
                            {data.genres.length > 0 && (
                                <GenresContainer>
                                    {data.genres.map((genre, index) => (
                                        <GenreTag key={index}>{genre}</GenreTag>
                                    ))}
                                </GenresContainer>
                            )}

                            {/*{MetaInfo}*/}
                            <MetaInfo>
                                <MetaItem>
                                    <MetaLabel>Release Date</MetaLabel>
                                    <MetaValue>{data.releaseDate}</MetaValue>
                                </MetaItem>
                                <MetaItem>
                                    <MetaLabel>Runtime</MetaLabel>
                                    <MetaValue>{data.runtime}</MetaValue>
                                </MetaItem>
                                <MetaItem>
                                    <MetaLabel>Status</MetaLabel>
                                    <MetaValue>{data.status}</MetaValue>
                                </MetaItem>
                                <MetaItem>
                                    <MetaLabel>Original Language</MetaLabel>
                                    <MetaValue>
                                        {data.language.toUpperCase()}
                                    </MetaValue>
                                </MetaItem>
                            </MetaInfo>

                            {/*{Buttons}*/}
                            <ButtonsContainer>
                                {data.homepage && (
                                    <ActionButton href={data.homepage}>
                                        Official Website →
                                    </ActionButton>
                                )}
                                {data.imdbId && (
                                    <ActionButton
                                        href={`${IMBD_BASE_URL}${data.imdbId}`}
                                    >
                                        View on IMDb →
                                    </ActionButton>
                                )}
                                {trailerCode ? (
                                    <ActionButton
                                        onClick={() =>
                                            openModal(
                                                VIDEO_TYPES.TRAILER,
                                                trailerCode
                                            )
                                        }
                                    >
                                        Official trailer
                                    </ActionButton>
                                ) : null}
                            </ButtonsContainer>
                        </MovieInfo>
                    </MainInfoSection>
                    <CarouselContainer>
                        <Carousel
                            movies={similarMovies.results}
                            handleCarouselClick={handleCarouselClick}
                        />
                    </CarouselContainer>
                </ContentWrapper>
            </DetailsContainer>
        </>
    );
};
