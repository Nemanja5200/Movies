import styled from 'styled-components';

export const CardContainerStyle = styled.div`
    max-width: 200px;
    border-radius: 8px;
    border: 1px solid gold;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    gap: 15px;
    
    &:hover{
        opacity: 0.6;
    }
`;
