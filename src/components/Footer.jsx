import React from 'react'
import styled from 'styled-components'

function Footer(props) {
  return (
    <DevContent>
      {props.children}
    </DevContent>
  )
}

const DevContent = styled.footer`
  background-color: ghostwhite;
  width: 100vw;
  height: 80px;
  display: flex;
  align-items: center;
  padding: 0 50px;
  margin-top: auto;
`

export default Footer

