import styled from 'styled-components';

export const ChartsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 500px;
    background: #0a0e12;
    color: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    @media (max-width: 973px) {
        width: 100%;
    }

    .recharts-wrapper *:focus,
    .recharts-wrapper *:focus-visible {
        outline: none !important;
        box-shadow: none !important;
    }
`;

export const ChartPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const ChartTitle = styled.h2`
    font-size: 24px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 20px;
    color: gold;

    @media (max-width: 421px) {
        font-size: 20px;
    }
`;
