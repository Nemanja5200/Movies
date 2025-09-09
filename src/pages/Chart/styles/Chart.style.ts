import styled from 'styled-components';

export const ChartWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

export const ChartContainer = styled.div`
    width: 100%;
    height: 500px;
    padding: 20px;
    background: #0a0e12;
    color: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    @media (max-width: 973px) {
        width: 100%;
        margin-top: 30px;
    }
`;
