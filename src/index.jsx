import React, {useState, useEffect} from 'react'
import ReactDom from 'react-dom'
import styled from 'styled-components';

export default function App() {
  const [poke, setPoke] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokedex/1').then(res => res.json())
      .then(data => {
        const {pokemon_entries} = data;
        setPoke(pokemon_entries);
      })
  }, [])

  return (
    <div>
      <ul>{poke.map(current => <Cards>{current.pokemon_species.name}</Cards>)}</ul>
    </div>
  )
}

ReactDom.render(
  <App/>, 
  document.getElementById('root')
)