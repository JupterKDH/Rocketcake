import styled from "styled-components";
import back from "../../assets/back.png";

export const Container = styled.div`
 
  >main{
    box-sizing: content-box;

    max-width: 32rem;

    margin-inline: auto;  /*esse comando faz uma margem apenas dos lados*/
    padding: 5.6rem 4rem;

    display: flex;
    flex-direction: column;
    gap: 3.2rem;

    h1, h2{
      /* clamp(min, ideal, max)*/
      font-size: clamp(2.8rem, 2vw + 1rem, 4rem);
      line-height: clamp(3.6rem, 2vw + 1rem, 5rem);
    }

    h2{
      margin-bottom: 3.2rem;
    }

    img{
      width: 100%;
      margin-block: 3.2rem; /*já esse aqui faz a margem em cima e embaixo*/
    }

    p, li, strong{
      font-size: clamp(1.4rem, 1vw + 0.4rem, 2rem);
      line-height: clamp(1.8rem, 1vw + 1rem, 2.5rem);
    }

    ul, ol{
      padding-left: 2.4rem;
    }

    ul{
      margin-bottom: 3.2rem;
    }

    @media(min-width: 1120px){
    
      flex-direction: row;

      max-width: fit-content;

      gap: 16rem;

      padding: 9rem 6rem;

      /*>div{
        flex: 1;
        max-width: 50rem;
      }  esse seria o comando para dividir igualmente as div's pela tela */

      .description{
        max-width: 43.5rem;
      }

      .recipe{
        max-width: 52.5rem;
      }

      /* h1, h2{
        font-size: 4rem;
        line-height: 5rem;
      }

      p, li, strong{
        font-size: 2rem;
        line-height: 2.4rem;
      } */

      button{
        padding: 1rem 2rem;

        font-size: 1.4rem;
        line-height: 2.4rem;
      }
    }
  }
`;

