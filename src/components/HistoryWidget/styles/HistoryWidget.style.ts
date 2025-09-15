import styled from 'styled-components';

export const WidgetContainer = styled.div`
    position: fixed;
    bottom: 20px;
    right: 30px;

    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 2px solid #e0e0e0;
    background-color: #0a0e12;
    transition: border 0.5s ease;
    cursor: pointer;
    z-index: 100;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        border: 2px solid gold;
    }

    svg {
        width: 35px;
        height: 35px;
    }

    @media (max-width: 748px) {
        width: 45px;
        height: 45px;

        svg {
            width: 25px;
            height: 25px;
        }
    }
`;
