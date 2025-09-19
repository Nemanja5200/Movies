

import styled from 'styled-components';


export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.95);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    padding: 2rem;

    .no-scroll {
        overflow: hidden;
    }
`;

export const ModalContent = styled.div`
    position: relative;
    width: 100%;
    max-width: 1200px;
    max-height: 90vh;
    background: #0a0a0a;
    border-radius: 12px;
    overflow: hidden;
    border: 2px solid #333;
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.8);
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 0;
    right: 10px;
    background: none;
    border: none;
    color: white;
    font-size: 2rem;
    cursor: pointer;
    z-index: 10001;
    transition: all 0.3s ease;

    &:hover {
        color: gold;
        transform: scale(1.1);
    }
`;

export const VideoContainer = styled.div`
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 56.25%; /* 16:9 aspect ratio */
    background: #000;
`;

export const VideoIframe = styled.iframe`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
`;


export const ErrorMessage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 400px;
    color: #666;
    font-size: 1.2rem;
    text-align: center;
    flex-direction: column;
    gap: 1rem;
`;

