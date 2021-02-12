import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Cards from './Cards';

export default function Pokemons() { 
  const urlDex = 'https://pokeapi.co/api/v2/pokedex/2'
  const urlPoke = 'https://pokeapi.co/api/v2/pokemon/'
  const [poke, setPoke] = useState([]);

  useEffect(() => {
    fetch(urlDex)
      .then(res => res.ok ? res.json() : console.log('buscando'))
      .then(data => {
        const {pokemon_entries} = data;
        setPoke(pokemon_entries);
      })
  }, [])

  return (  
    <PokeWrapper>
      {
        poke.map(current => {
          return (
            <Cards
              key={current.entry_number}
              poke={current.pokemon_species}
              url={urlPoke + current.entry_number}
              num={current.entry_number}
            />
          )
        })
      }
    </PokeWrapper>
  )
}

const PokeWrapper = styled.ul`
  list-style: decimal;
  display: flex;
  flex-wrap: wrap;
  padding: 20px 50px;
`
