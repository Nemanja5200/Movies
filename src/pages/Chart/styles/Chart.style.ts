import styled from 'styled-components';

export const ChartWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

export const ButtonRow = styled.div`
    width: 100%;
    display: flex;
    max-width: 500px;
    margin-top: 20px;
    align-self: end;
    @media (max-width: 726px) {
        align-self: center;
    }
`;
