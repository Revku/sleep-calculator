import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: ${({ theme }) => theme.fonts.primary};
    }

    body {
        background: ${({ theme }) => theme.colors.backgroundGradient};
        color: white;
        background-attachment: fixed;
        background-size: cover;
        width: 100%;
        min-height: 100vh;
    }
`;
