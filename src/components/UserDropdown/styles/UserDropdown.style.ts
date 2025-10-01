import styled from 'styled-components';

export const DropdownContainer = styled.div`
    position: relative;
`;

export const UserButton = styled.button`
    height: 35px;
    border: 2px solid #11a9c8;
    border-radius: 3px;
    display: flex;
    cursor: pointer;
    align-items: center;
    gap: 8px;
    font-weight: 600;
    font-size: 1rem;
    padding: 0 15px;
    background: transparent;
    color: #11a9c8;

    &:hover {
        opacity: 0.8;
    }
`;

export const Avatar = styled.div`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #11a9c8;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    font-size: 0.8rem;
    font-weight: 600;
`;

export const DropdownMenu = styled.div<{ $isOpen: boolean }>`
    position: absolute;
    top: 40px;
    right: 0;
    background: #1a1a1a;
    border: 2px solid #11a9c8;
    z-index: 3;
    border-radius: 3px;
    display: ${props => (props.$isOpen ? 'block' : 'none')};
    min-width: 100px;
`;

export const LogoutItem = styled.button`
    width: 100%;
    padding: 10px;
    background: transparent;
    border: none;
    color: #11a9c8;
    cursor: pointer;
    font-size: 0.9rem;
    font-weight: 600;

    &:hover {
        background: rgba(17, 169, 200, 0.1);
    }
`;
