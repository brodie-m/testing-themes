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
        color: ${({ theme }) => theme.primary};
    }
    .nav-link {
        color: ${({ theme }) => theme.primary};
    }
    .section-title {
        
        text-shadow: 3px 3px rgba(0,0,0,0.2);
        color: ${({ theme }) => theme.primary}
    }
    .card-title {
        text-shadow: 1px 1px rgba(0,0,0,0.2);
        color: ${({ theme }) => theme.secondary }

    }
    .title-highlight {
        border-radius: 0px 0px 10px 10px;
        top: 50px;
        margin-left: -150px;
        z-index: -2;
        background: ${({ theme }) => theme.titleHighlight};
        width: 20vw;
        height: 5vh;
        overflow: none;
    }
    .title-highlight h2 {
        top: -50px;
        margin-left: 120px;
        overflow: none;
        white-space: nowrap;
    }
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 5%;
      }

      form button {
          background-color: transparent;
          color: #ADD8E6;
          box-shadow: none;
          border: none;
          outline:none;
      }

      form button:focus{
          outline:none;
      }
      input {
        padding: 1rem;
        border: 0.2px solid grey;
        border-radius: 5px;
        font-family: monospace;
        width: 50%;
        margin: 0.5rem;
      }
      ul, ol {
        list-style-type: none;
        padding: 0;
        margin: 0;
      }
      .enabled {
          background-color: ${({ theme }) => theme.primary};
          box-shadow: 5px 5px;
          transition:0.4s
      }
      .enabled:hover {
          box-shadow: none;
          transform: translateY(2px)
      
`