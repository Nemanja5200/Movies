import styled from 'styled-components';

export const ModalOverlay = styled.div<{ $isOpen: boolean }>`
    display: ${props => (props.$isOpen ? 'block' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1000;
    animation: ${props => (props.$isOpen ? 'fadeIn 0.3s ease' : '')};

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;

export const ModalContainer = styled.div<{ $isOpen: boolean }>`
    display: ${props => (props.$isOpen ? 'flex' : 'none')};
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #0a0e12;
    border-radius: 12px;
    border: 2px solid #e0e0e0;
    width: 90%;
    color: #11a9c8;
    max-width: 600px;
    max-height: 80vh;
    flex-direction: column;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
    z-index: 1001;
    animation: ${props => (props.$isOpen ? 'slideUp 0.3s ease' : '')};

    @keyframes slideUp {
        from {
            opacity: 0;
            transform: translate(-50%, -40%);
        }
        to {
            opacity: 1;
            transform: translate(-50%, -50%);
        }
    }

    @media (max-width: 640px) {
        width: 95%;
        max-height: 90vh;
    }
`;

export const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 24px;
    border-bottom: 1px solid #e0e0e0;

    h2 {
        margin: 0;
        font-size: 20px;
        font-family: Poppins, sans-serif;
        font-weight: 800;
    }
`;

export const CloseButton = styled.button`
    background: none;
    font-size: 24px;
    color: #999;
    cursor: pointer;
    padding: 0;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid #e0e0e0;
    transition: all 0.2s ease;

    &:hover {
        border: 2px solid gold;
        color: #333;
    }
`;

export const ModalBody = styled.div`
    padding: 24px;
    overflow-y: auto;
    flex: 1;
`;

export const FilterSection = styled.div`
    margin-bottom: 24px;
    &:last-child {
        margin-bottom: 0;
    }
`;

export const FilterTitle = styled.h3`
    font-size: 16px;
    font-weight: 600;
    color: #e0e0e0;
    margin-bottom: 12px;
`;

export const FilterOptionsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    gap: 10px;

    @media (max-width: 480px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

export const FilterOption = styled.label`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 12px;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    cursor: pointer;
    color: gold;
    transition: all 0.2s ease;
    font-size: 14px;

    input[type='checkbox'] {
        margin: 0;
    }
`;

export const RangeSlider = styled.div`
    padding: 10px 0;

    input[type='range'] {
        width: 100%;
        height: 6px;
        border-radius: 3px;
        background: #e0e0e0;
        outline: none;

        &::-webkit-slider-thumb {
            appearance: none;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: #ffcc00;
            cursor: pointer;
        }

        &::-moz-range-thumb {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: #ffcc00;
            cursor: pointer;
            border: none;
        }
    }
`;

export const YearSelect = styled.select`
    width: 100%;
    padding: 10px;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    font-size: 14px;
    color: gold;
    cursor: pointer;
    background-color: #0a0e12;

    &:focus {
        outline: none;
        border-color: #ffcc00;
    }
`;

export const ModalFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 24px;
    font-family: Popins, sans-serif;
    font-weight: 700;
    border-top: 1px solid #e0e0e0;
    gap: 12px;
`;

export const ClearButton = styled.button`
    padding: 10px 20px;
    background: #0a0e12;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    font-size: 14px;
    color: #11a9c8;
    cursor: pointer;

    &:hover {
        border: 2px solid gold;
    }
`;

export const ApplyButton = styled.button`
    padding: 10px 24px;
    background: #0a0e12;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    color: #11a9c8;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
        border: 2px solid gold;
        transform: translateY(-1px);
        box-shadow: 0 2px 8px rgba(255, 204, 0, 0.3);
    }
`;
