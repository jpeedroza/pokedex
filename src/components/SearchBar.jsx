import React from 'react'
import styled from 'styled-components'

const Generations = [
  {
    region: 'National',
    pokeNumInitial: 1,
    pokeNumEnd: 898
  },
  {
    region: 'Kanto',
    pokeNumInitial: 1,
    pokeNumEnd: 151
  },
  {
    region: 'Johto',
    pokeNumInitial: 1,
    pokeNumEnd: 251,
  },
  {
    region: 'Hoeen',
    pokeNumInitial: 252,
    pokeNumEnd: 386
  },
  {
    region: 'Sinnoh',
    pokeNumInitial: 387,
    pokeNumEnd: 493
  },
  {
    region: 'Unova',
    pokeNumInitial: 494,
    pokeNumEnd: 649
  },
  {
    region: 'Kalos',
    pokeNumInitial: 650,
    pokeNumEnd: 718
  },
  {
    region: 'Alola',
    pokeNumInitial: 719,
    pokeNumEnd: 809
  }
]

function SearchBar({handleGen}) {

  return (
    <GenHandler>
      <Gen>
        {
          Generations.map((current, index) =>{
            return (
              <button onClick={() => handleGen(current.pokeNumInitial, current.pokeNumEnd)} key={index}>{current.region}</button>
            )
          })
        }
      </Gen>
    </GenHandler>
  )
}
const GenHandler = styled.ul`
  display: flex;
`
const Gen = styled.li`
  list-style-type: none;
  font-size: 1.8rem;
  margin-right: 10px;
`
export default SearchBar