import styled from 'styled-components';

export const SearchBarContainerStyle = styled.div`
    width: clamp(280px, 50vw, 800px);
    height: clamp(80px, 10vh, 100px);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SearchWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 0 10px;
`;

export const SearchInput = styled.input`
    flex: 1;
    height: 45px;
    padding: 10px 15px;
    font-size: 16px;
    border: 2px solid #e0e0e0;
    border-radius: 25px;
    outline: none;
    transition: all 0.3s ease;

    &::placeholder {
        color: #999;
    }

    &:focus {
        border-color: gold;
        box-shadow: 0 0 0 3px rgba(255, 215, 0, 0.1);
    }

    &:disabled {
        background-color: #f5f5f5;
        cursor: not-allowed;
        opacity: 0.6;
    }
`;

export const SearchButton = styled.button`
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: none;
    background: #11a9c8;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    flex-shrink: 0;
`;
