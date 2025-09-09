import styled from 'styled-components';

export const ChartsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
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

export const ChartPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 20px;

    button {
        position: absolute;
        top: 15%; 
        right: 35%; 
        min-width: 100px;
        height: 35px;
        padding: 0 15px;
        z-index: 1;
        font-size: 14px;

        svg {
            width: 24px;
            height: 24px;
        }
        
        @media (max-width: 974px) {
            position: static;
            display: flex;
            flex-direction: column;
            margin-top: 30px;
        }
        
        
`;
