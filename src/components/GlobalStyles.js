import {createGlobalStyle} from 'styled-components'
export const GlobalStyles = createGlobalStyle`
    body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: ${({ theme }) => theme.font};
    transition: all 0.20s ease;
    }
`