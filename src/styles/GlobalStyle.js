import { createGlobalStyle } from 'styled-components';
import '@fontsource/jetbrains-mono';
import '@fontsource/inter';
import '@fontsource/inter/700.css';

const GlobalStyle = createGlobalStyle`
/* 
"Use CSS Variables instead of React Context" - https://epicreact.dev/css-variables/
---> Reasoning for not putting this in Theme Provider. 
*/
  :root {
    --primary: #88c0d0;
    --secondary: #eceff4;
    --darkgray: #2e3440;
    --lightgray: #3b4252;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: var(--darkgray);
    color: var(--secondary);
    font-family: 'Inter';
    // fixes figma vs browser discrepancy
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale; 
    text-rendering: optimizeLegibility;
  } 

  // Styling tags is probably bad practice on a large website 
  // but this website is small enough that it doesn't matter 
  h1, h2 {
    font-size: 76px;
    font-weight: 700;
  }

  h2 {
    opacity: 0.75;
    // fix opacity side effects
    position: relative;
    z-index: -1;
  }

  h3 {
    font-size: 24px;
    font-weight: 700;
  }

  p {
    font-size: 16px;
    margin-bottom: 20px;
    line-height: 1.5;
  }

  button {
    background: transparent;
    color: var(--primary);
    font-family: 'JetBrains Mono';
    border: 2px solid var(--primary);
  }

  .hl {
    color: var(--primary);
  }

  // Scrollbar Styles 
  body::-webkit-scrollbar {
    width: 8px;
  }
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--primary) var(--secondary);
  }
  body::-webkit-scrollbar-track {
    background: var(--lightgray);
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--primary);
  }
`;

export default GlobalStyle;
