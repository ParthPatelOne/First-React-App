import { createGlobalStyle, withTheme } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    // font-family: 'Roboto', sans-serif;
    transition: all .2s linear;
  }

  p {
    line-height: 1.4rem;
  }

  // .btn-primary {
  //   background: ${({ theme }) => theme.primary};
  //   color: ${({ theme }) => theme.body};
  //   padding: 0.5rem 1.5rem;
  //   font-size: 1rem;
  //   border-radius: 1rem;
  //   cursor: pointer;
  //   outline: none;
  //   border: none;
  //   transition: all .5s linear;

  // }
  .NAV{
  
    color: ${({ theme }) => theme.text};
  }
  .NM{
    
    color: ${({ theme }) => theme.text};
  }
  .font{
    color: ${({ theme }) => theme.font};
  }
  .bg{
    background: ${({ theme }) => theme.primary};
  }
  .sh{
    background: ${({ theme }) => theme.primary};
    // color: ${({ theme }) => theme.txt};
  }
`;

export const lightTheme = {
  body: '#fff',
  text: '#121212',
  primary: '#fff',
  font: '#121212',
  // txt: "#121212",

};

export const darkTheme = {
  body: '#1F2937',
  text: '#fff',
  font: '#fff', 
  primary: '#4964a038',
  // txt: "#fff",
  // Nav:"#fff",
};