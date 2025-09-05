import styled from 'styled-components';

export const HeaderStyle = styled.header`
    display: flex;
    align-items: center;
    box-shadow: 0 8px 7px rgb(0, 0, 0, 0.1);
    min-height: 8vh;
    background: #212529;
    padding: 0px clamp(15px, 4vw, 60px);

    > *:nth-child(2) {
        margin-left: 15vw;
    }

    > *:last-child {
        margin-left: auto;
    }

    @media (max-width: 446px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
        > *:nth-child(2) {
            margin-left: 0;
        }
        > *:last-child {
            margin-left: 0;
        }
    }
`;
