import React from 'react'
import ReactDom from 'react-dom'
import { createGlobalStyle } from 'styled-components';
import Pokemons from './components/Pokemons'
import Headers from './components/Headers'
import Footer from './components/Footer'
import Creditos from './components/Creditos'
import SearchBar from './components/SearchBar'

const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: sans-serif;
    font-size: 62.50%;
  }
`

export default function App() {
  
  return (
    <>
      <GlobalStyle/>
      <Headers>
        <SearchBar/>
      </Headers>
      <Pokemons/>
      <Footer>
        <Creditos/>
      </Footer> 
    </>
  )
}

ReactDom.render(
  <App/>, 
  document.getElementById('root')
)