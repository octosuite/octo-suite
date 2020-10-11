import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    user-select: none;
    font-family: "Roboto", "Segoe UI", sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  a {
    text-decoration: none;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root, #__next {
    height: 100%;
    overflow: hidden;
    background-color: #1c1e1f;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  .ps__thumb-y,
  .ps__thumb-x {
    border-radius: 0px;
  }

  .Toastify__toast {
    padding: 0 16px;
    border-radius: 8px;
    min-height: 48px;
  }

  .Toastify__toast-body {
    font-size: 14px;
  }

  .Toastify__progress-bar {
    height: 2px;
  }
`