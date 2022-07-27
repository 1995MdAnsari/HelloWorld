import { createGlobalStyle} from "styled-components"
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }

  h2{
    color: ${({theme}) => theme.text}
  }

  button {
    cursor : pointer;
    background : ${props=> props.background === '#999' ? 'pink' : 'red' } ;
    }

    button:hover {
      background: yellow;
      
    }


  `
