import styled from 'styled-components';



export const PaginationContainer = styled.div`
    width: 50vw;
    height: 8vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px auto;
    padding: 0px 10px;
    gap: 15px;


    @media (max-width: 768px) {
        height: 8vh;
        gap: 10px;
    }

    @media (max-width: 480px) {
        height: 6vh;
        gap: 8px;
        flex-wrap: wrap; 
    }
`;


export const PaginationButton = styled.button`
    width: 40px;
    height: 40px;
    border-radius: 50px;
    background-color: #212529 ;
    border: 1px solid gold;
    font-family: Popins, sans-serif;
    font-size: 0.9rem;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #11a9c8;
    
    &:hover{
        transform: scale(1.1);
        box-shadow: 0 4px 12px rgba(255, 215, 0, 0.3);
    }
`;