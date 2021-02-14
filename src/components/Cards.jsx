import React from 'react'
import styled from 'styled-components'

export default function Cards({url, poke, num, pokeNum}){
  return (
    <ListWrapper>
      <PokeLink href={url}>
        <PokeNumber>#{pokeNum}</PokeNumber>
        <PokeName>{poke.name}</PokeName>
      </PokeLink>
    </ListWrapper>
  )
}

const PokeName = styled.h3`
  font-size: 2.0rem;
  &::first-letter{
    text-transform: capitalize;
  }
`
const PokeLink = styled.a`
  text-decoration: none;
  color: black;
  display: flex;
  align-items: center;
  flex-direction: column;
`
const PokeNumber = styled.p`
  font-size: 1.8rem;
  font-weight: 500;
`
const ListWrapper = styled.li`
  width: 133px;
  margin: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
`