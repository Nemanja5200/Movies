import styled from 'styled-components';

export const TableContainerStyle = styled.div`
    width: 100%;
    max-width: 2000px;
    margin: 0px auto;
    margin-top: 10px;
    padding: 20px;

    display: flex;
    flex-direction: column;
    align-items: baseline;

    @media (max-width: 768px) {
        padding: 15px;
        margin: 30px auto;
    }

    @media (max-width: 480px) {
        padding: 10px;
        margin: 20px auto;
    }
`;
