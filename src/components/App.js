import React from 'react'

import { ThemeProvider } from "styled-components"
import GlobalStyle from "./styles/Global.styled"

import Nav from "./Nav"
import Header from "./Header"
import Discover from './Discover'
import PaintingsHeader from "./PaintingsHeader"
import PaintingsDiscovery from "./PaintingsDiscovery"
import LastWork from "./LastWork"
import MuralsHeader from "./MuralsHeader"
import MuralsContent from "./MuralsContent"
import About from './About'
import Contact from './Contact'
import Footer from './Footer'
import Modal from "./Modal"

import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import actual from '../reducers/actual.reducer'
import images from '../reducers/images.reducer'
import state from '../reducers/state.reducer'

const store = createStore(combineReducers({ actual, images, state }))

export const theme = {
  colors: {
    white: '#fff',
    black: '#000',
    darkGrey: '#4C4C4C',
    lightGrey: '#9c9999',
  },
  tablet: '1050px',
  mobile: '650px' 
}

export default function App() {

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />

        <Nav />
        <Header />

        <main>
          <Discover />
          <PaintingsHeader />
          <PaintingsDiscovery />
          <LastWork />
          <MuralsHeader />
          <MuralsContent />
          <About />
          <Contact />
        </main>

        <Footer />

        <Modal />
      </ThemeProvider>
    </Provider>
  )
}

