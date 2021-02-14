import React from 'react';
import styled from 'styled-components';
import Cards from './Cards';

export default function Pokemons({poke}) { 
  const urlPoke = 'https://pokeapi.co/api/v2/pokemon/'
  return (  
    <PokeWrapper>
      {
        poke.map((current, index) => {
          return (
            <Cards
              key={index}
              poke={current.pokemon_species}
              url={urlPoke + current.entry_number}
              num={index + 1}
              pokeNum={current.entry_number}
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
