import { createGlobalStyle } from "styled-components";
import back from "../assets/back.png";

export default createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :root{
    font-size: 62.5%;
  }

  body{
    background-color: ${({ theme }) => theme.COLORS.WHITE};

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    
    font-family: 'Source Serif Pro', sans-serif;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.CLAY};
    
  }

  button{
    font-family: 'Source Serif 4', sans-serif;
    color: ${({ theme }) => theme.COLORS.WHITE};

    background-color: ${({ theme }) => theme.COLORS.CLAY};

    border: 0;
    border-radius: 0.6rem;

    padding: 0.8rem 1.2rem;
    margin-top: 3.2rem;
  }

  @media(min-width: 1120px){
    body{
      background-image: url(${back});
    }
    
  }
`;