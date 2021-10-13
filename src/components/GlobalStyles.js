import {createGlobalStyle} from 'styled-components'
export const GlobalStyles = createGlobalStyle`
    body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: ${({ theme }) => theme.font};
    transform: ${({ theme }) => theme.transform}
    transition: all 0.1s ease;
    }
    .card {
        background: ${({ theme }) => theme.cardBody};
    }
`