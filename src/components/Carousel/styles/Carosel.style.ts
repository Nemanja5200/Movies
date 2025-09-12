import styled from 'styled-components';

export const CarouselWrapper = styled.div`
    margin: 2rem 0;
    .slick-slide > div {
        padding: 0 10px;
    }

    .slick-dots li button:before {
        color: gold;
    }

    .slick-prev,
    .slick-next {
        z-index: 1;
    }
`;

export const CarouselPoster = styled.img`
    width: 100%;
    height: auto;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.03);
        box-shadow: 0 15px 40px rgba(255, 215, 0, 0.2);
    }
`;

export const CarouselTitle = styled.p`
    color: white;
    text-align: center;
    margin-top: 0.5rem;
    font-size: 0.9rem;
    font-weight: 500;
`;