import {createGlobalStyle} from 'styled-components'
export const GlobalStyles = createGlobalStyle`
    body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: ${({ theme }) => theme.font};
    transition: all 0.1s ease;
    }
    .card {
        box-shadow: 0px 0px 5px 5px rgba(0,0,0,0.2);
        background: ${({ theme }) => theme.cardBody};
        padding: ${({ theme }) => theme.padding}
    }
    .navbar {
        background: ${({ theme }) => theme.navBody};
    }
`