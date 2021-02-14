import React, {useState, useEffect} from 'react'
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
  }
  html{
    font-size: 62.5%;
  }
`

export default function App() {
  const [pokeGen, setPokeGen] = useState([]);
  const [poke, setPoke] = useState([]);

  const handleGen = (base, limit) => {
    const newGen = poke.filter(current => current.entry_number >= base && current.entry_number <= limit);
    setPokeGen(newGen);
  }
  
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokedex/1')
      .then(res => res.ok ? res.json() : console.log('loading'))
      .then(data => {
        const {pokemon_entries} = data;
        setPoke(pokemon_entries)
        setPokeGen(pokemon_entries)
      })
  }, [])


  return (
    <>
      <GlobalStyle/>
      <Headers>
        <SearchBar handleGen={handleGen}/>
      </Headers>
      <Pokemons poke={pokeGen}/>
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
