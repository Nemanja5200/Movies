import styled from 'styled-components';


export const CardsContainerStyle = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
    width: 100%;
    max-width: 1500px;
    margin: 50px auto;
    padding: 20px;
    justify-content: center;
    align-items: center;

    place-items: center;

    @media (max-width: 1024px) {
        grid-template-columns: repeat(3, 1fr); 
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
        
    }

    @media (max-width: 480px) {
        grid-template-columns: 1fr; 
    }
`;