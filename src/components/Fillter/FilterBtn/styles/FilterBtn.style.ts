import styled from 'styled-components';

export const FillterContainerStyle = styled.div`
    display: flex;
    gap: 15px;
    align-items: center;
    justify-content: center;
    margin-left: 220px;

    padding: 0 20px;
    max-width: 1200px;

    @media (max-width: 1824px) {
        margin: 20px auto;
    }
`;

export const FilterButtonWithIcon = styled.button<{ $isActive?: boolean }>`
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 140px;
    height: 45px;
    padding: 0 20px;
    border: 2px solid ${props => (props.$isActive ? 'gold' : ' #e0e0e0')};
    color: #333;
    font-size: 15px;
    font-weight: 500;
    border-radius: 25px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        color: white;
        border-color: #ffcc00;
    }

    &.active {
        background: gold;
        color: white;
    }
`;

export const SvgContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;

    svg {
        width: 40px;
        height: 40px;
    }
`;
