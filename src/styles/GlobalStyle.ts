import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    border: 0;
    box-sizing: border-box;
  }
`
export const colors = {
  primary: "#0000CD",
  secondary: "#3CB371",
  secondaryLight: "#90EE90",
  third: "#4682B4",
  thirdLight: "#87CEFA",
  black: "#000",
  white: "#fff"
}

export const Main = styled.main`
  min-height: calc(100vh - 9rem);
`
