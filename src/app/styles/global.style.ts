import { css } from '@emotion/react'
import tw from 'twin.macro'

export const GlobalStyles = css`
  :root {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;

    color-scheme: light dark;
    color: rgba(255, 255, 255, 0.87);
    background-color: #242424;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    ${tw`box-border h-full`}
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    ${tw`m-0 h-full p-0`}
  }

  #root {
    ${tw`relative h-full`}
  }
`
