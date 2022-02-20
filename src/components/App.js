import GlobalStyle from "./styles/Global.styled"

import { ThemeProvider } from "styled-components"

import Nav from "./Nav"
import Header from "./Header"
import Discovery from './Discovery'
import PaintingsHeader from "./PaintingsHeader"
import PaintingsDiscovery from "./PaintingsDiscovery"
import LastWork from "./LastWork"

export const theme = {
  colors: {
    white: '#fff',
    black: '#000',
    darkGrey: '#4C4C4C',
    lightGrey: '#9c9999',
  }
}

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Nav />
      <Header />
      <Discovery />
      <PaintingsHeader />
      <PaintingsDiscovery />
      <LastWork />
    </ThemeProvider>
  )
}

