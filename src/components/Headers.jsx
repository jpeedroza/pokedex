import React from 'react'
import styled from 'styled-components'

export default function Headers(props) {
  return (
    <Wrapper>
      <Title>Pokemania</Title>
      <NavWrapper>
        {props.children}
      </NavWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  width: 100vw;
  height: 200px;
  padding: 15px 30px;
  display: flex;
  align-items: center;
  background-color: ghostwhite;
  border-bottom: 2px solid red;
`
const Title = styled.h2`
  font-size: 70px;
  color: #F4D03F;
  -webkit-text-stroke: 2.5px #21618C;
`
const NavWrapper = styled.nav`
  margin-left: auto;
`
