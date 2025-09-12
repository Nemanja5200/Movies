import styled from 'styled-components';

export const DetailsContainer = styled.div`
    min-height: 100vh;
    background: #0a0a0a;
    position: relative;
`;

export const HeroSection = styled.div<{ $backdrop?: string }>`
    position: relative;
    width: 100%;
    height: 60vh;
    background: ${props =>
        props.$backdrop
            ? `linear-gradient(to bottom, rgba(10,10,10,0.3) 0%, rgba(10,10,10,0.7) 60%, #0a0a0a 100%), 
           url(${props.$backdrop})`
            : 'linear-gradient(to bottom, #212529 0%, #0a0a0a 100%)'};
    background-size: cover;
    background-position: center top;
    background-repeat: no-repeat;
`;

export const HeroOverlay = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 200px;
    background: linear-gradient(to top, #0a0a0a 0%, transparent 100%);
`;

export const ContentWrapper = styled.div`
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 2rem;
    position: relative;
    margin-top: -300px;
    z-index: 10;
`;

export const MainInfoSection = styled.div`
    display: grid;
    grid-template-columns: 300px 1fr;
    gap: 3rem;
    margin-bottom: 3rem;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
`;

export const PosterContainer = styled.div`
    position: relative;
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
`;

export const Poster = styled.img`
    width: 100%;
    border-radius: 12px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.8);
    border: 2px solid #212529;
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 15px 50px rgba(255, 215, 0, 0.2);
        border-color: gold;
    }
`;

export const NoPoster = styled.div`
    width: 100%;
    aspect-ratio: 2/3;
    background: #212529;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #666;
    font-size: 1.2rem;
    border: 2px solid #333;
`;

export const MovieInfo = styled.div`
    color: white;
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 0.2rem;
`;

export const Title = styled.h1`
    font-size: 3rem;
    font-weight: 800;
    margin-bottom: 0.5rem;
    color: white;
    font-family: Poppins, sans-serif;

    @media (max-width: 768px) {
        font-size: 2rem;
    }
`;

export const Tagline = styled.p`
    font-size: 1.2rem;
    color: gold;
    font-style: italic;
    margin-bottom: 1.5rem;
    font-weight: 300;
`;

export const RatingContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

export const Rating = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background: #212529;
    border-radius: 8px;
    border: 1px solid gold;
`;

export const RatingScore = styled.span`
    font-size: 1.5rem;
    font-weight: 700;
    color: gold;
`;

export const RatingMax = styled.span`
    font-size: 1rem;
    color: #888;
`;

export const VoteCount = styled.span`
    font-size: 0.9rem;
    color: #666;
`;

export const GenresContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin: 2rem 0;
`;

export const GenreTag = styled.span`
    padding: 0.5rem 1rem;
    background: #212529;
    border: 1px solid #444;
    border-radius: 20px;
    font-size: 0.9rem;
    color: white;
    transition: all 0.3s ease;

    &:hover {
        border-color: gold;
        transform: translateY(-2px);
        box-shadow: 0 4px 10px rgba(255, 215, 0, 0.2);
    }
`;

export const MetaInfo = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    margin-bottom: 2rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid #333;
`;

export const MetaItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
`;

export const MetaLabel = styled.span`
    font-size: 0.875rem;
    color: #888;
    text-transform: uppercase;
    letter-spacing: 1px;
`;

export const MetaValue = styled.span`
    font-size: 1.1rem;
    color: #11a9c8;
    font-weight: 600;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    gap: 1rem;
    margin: 2rem 0;
`;

export const ActionButton = styled.a`
    padding: 0.875rem 2rem;
    background: #212529;
    color: #11a9c8;
    border: 1px solid #444;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;

    &:hover {
        border-color: gold;
        color: gold;
        transform: translateY(-2px);
        box-shadow: 0 4px 10px rgba(255, 215, 0, 0.3);
    }

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;

export const CarouselContainer = styled.div`
    width: 100%;
`;
