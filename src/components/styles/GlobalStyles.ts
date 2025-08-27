import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    *,*::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    
    body{
        font-family: Roboto Slab , sans-serif;
        background-color: #0A0E12;
        color: #fff;
        min-height: 100vh;
        line-height: 1.5;
    }
`;
