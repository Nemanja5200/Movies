import styled from 'styled-components';

export const PageWrapper = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    min-height: 90vh;
    padding-top: 20vh;
`;

export const LoginPageContainer = styled.div`
    width: 100%;
    max-width: 550px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid gold;
    font-family: Popins, sans-serif;
    border-radius: 10px;
    box-shadow: 0 4px 10px #e0e0e04d;
    padding-top: 10px;
`;

export const HeaderStyle = styled.h2`
    font-weight: 800;
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: 15px;
    color: #11a9c8;
`;

export const SubHeader = styled.p`
    color: white;
    text-align: center;
    margin-bottom: 2rem;
    font-size: 0.9rem;
`;

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
`;

export const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

export const Label = styled.label`
    font-size: 1rem;
    font-weight: 600;
    color: white;
`;

export const Input = styled.input`
    padding: 0.75rem 1rem;
    width: 100%;
    min-width: 20vw;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    color: white;
    font-size: 1rem;
    background: #212529;
    margin-bottom: 20px;

    &:focus {
        outline: none;
        box-shadow: 0 0 0 3px #e0e0e04d;
    }

    &:hover {
        border-color: gold;
    }

    &::placeholder {
        color: #aaa;
    }
`;

export const LoginButton = styled.button`
    padding: 0.875rem;
    background: #212529;
    color: #11a9c8;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 800;
    margin-bottom: 30px;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-top: 0.5rem;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 2px 4px 10px rgba(255, 215, 0, 0.3);
    }

    &:active {
        transform: translateY(0);
    }

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;

export const ErrorMessage = styled.div`
    background: red;
    width: 100%;
    max-width: 400px;
    color: white;
    padding: 0.75rem;
    border-radius: 6px;
    font-size: 0.875rem;
    margin-bottom: 1rem;
    border: 1px solid #fcc;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 640px) {
        font-size: 0.813rem;
        max-width: 300px;
    }
`;
