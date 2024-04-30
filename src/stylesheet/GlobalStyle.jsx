import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';
import 'modern-normalize';
import '../index.css';

export const GlobalStyle = createGlobalStyle`
  *,
	*::before,
	*::after {
		box-sizing: inherit;
	}
  
  html,
  body {
    scrollbar-gutter: stable;
    box-sizing: border-box;
    font-family: "Gilroy", sans-serif;
    font-size: 16px;
    font-weight: 500;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${theme.colors.main};
    color: ${theme.colors.light};
    ::-webkit-scrollbar {
      inline-size: 5px;
    }

    ::-webkit-scrollbar-track {
      background: rgba(18, 20, 23, 0.05);
      inline-size: 3px;
      border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb {
      background: ${theme.colors.brd};
      border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: rgba(18, 20, 23, 0.05);
    }
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  h1,h2,h3,h4,h5,h6,p {
    margin: 0;
  }

  ul, li {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  a {
		text-decoration: none;
		color: inherit;
	}

  img{
    display: block;
    max-inline-size: 100%;
    block-size: auto;
  }

  button {
    cursor: pointer;
		font-family: inherit;
		padding: 0;
		margin: 0;
	}

  input:-webkit-autofill,
  input:-webkit-autofill:hover, 
  input:-webkit-autofill:focus {
  -webkit-box-shadow: 0 0 0px 1000px ${theme.colors.secondary} inset;
  -webkit-text-fill-color: ${theme.colors.light};
  }
`;
