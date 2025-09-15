import styled from 'styled-components';

export const WidgetContainer = styled.div<{ $isExpanded: boolean }>`
    position: fixed;
    bottom: 20px;
    right: 30px;
    z-index: 100;
    
   
    width: ${props => props.$isExpanded ? '280px' : '60px'};
    height: ${props => props.$isExpanded ? 'auto' : '60px'};
    max-height: ${props => props.$isExpanded ? '400px' : '60px'};
    
  
    border-radius: ${props => props.$isExpanded ? '12px' : '50%'};
    border: 2px solid ${props => props.$isExpanded ? '#2d3748' : '#e0e0e0'};
    background-color: #0a0e12;
    
  
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    
  
    display: flex;
    justify-content: ${props => props.$isExpanded ? 'stretch' : 'center'};
    align-items: ${props => props.$isExpanded ? 'stretch' : 'center'};
    

    &:hover {
        border-color: ${props => props.$isExpanded ? '#2d3748' : 'gold'};
    }

    svg {
        width: 35px;
        height: 35px;
        transition: all 0.3s ease;
    }

    @media (max-width: 748px) {
        width: ${props => props.$isExpanded ? '260px' : '45px'};
        height: ${props => props.$isExpanded ? 'auto' : '45px'};
        max-height: ${props => props.$isExpanded ? '350px' : '45px'};

        svg {
            width: 25px;
            height: 25px;
        }
    }

    @media (max-width: 480px) {
        right: 15px;
        width: ${props => props.$isExpanded ? '240px' : '45px'};
    }
`;


export const HistoryPanel = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
`;

export const HistoryHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 16px;
    border-bottom: 1px solid #2d3748;
    flex-shrink: 0;

    span {
        color: #ffffff;
        font-size: 14px;
        font-weight: 600;
    }
`;


export const CloseButton = styled.button`
    background: none;
    border: none;
    color: #a0a0a0;
    font-size: 18px;
    cursor: pointer;
    padding: 0;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: all 0.2s ease;

    &:hover {
        background-color: #2d3748;
        color: #ffffff;
    }
`;


export const HistoryContent = styled.div`
    flex: 1;
    overflow-y: auto;
    max-height: 300px;

    /* Custom scrollbar */
    &::-webkit-scrollbar {
        width: 4px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background: #2d3748;
        border-radius: 2px;
    }

    &::-webkit-scrollbar-thumb:hover {
        background: #4a5568;
    }
`;

export const HistoryItem = styled.div`
    padding: 12px 16px;
    border-bottom: 1px solid rgba(45, 55, 72, 0.5);
    transition: background-color 0.2s ease;
    cursor: pointer;

    &:hover {
        background-color: rgba(45, 55, 72, 0.3);
    }

    &:last-child {
        border-bottom: none;
    }
`;

export const MovieInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`

export const MovieTitle = styled.h4`
    margin: 0;
    color: #ffffff;
    font-size: 13px;
    font-weight: 600;
    line-height: 1.3;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

export const MoviePoster = styled.div`
    flex-shrink: 0;
    width: 40px;
    height: 60px;
    border-radius: 4px;
    overflow: hidden;
    background-color: #2d3748;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 4px;
    }
`;