import styled from 'styled-components';

export const HomeContainerStyle = styled.div`
    width: 100%;
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
`;

export const FilterSearchContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin: 50px auto;
    padding: 0 20px;

    @media (max-width: 1824px) {
        margin-left: 100px;
    }

    @media (max-width: 776px) {
        margin-left: 0px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;
