import styled from 'styled-components';

export const TableContainerStyle = styled.div`
    width: 100%;
    max-width: 2000px;
    margin: 50px auto;
    padding: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 768px) {
        padding: 15px;
        margin: 30px auto;
    }

    @media (max-width: 480px) {
        padding: 10px;
        margin: 20px auto;
    }
`;
