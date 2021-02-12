import React from 'react'
import styled from 'styled-components'

function SearchBar(props) {
  return (
    <GenHandler>
      <Gen>1Gen</Gen>
      <Gen>2Gen</Gen>
      <Gen>3Gen</Gen>
    </GenHandler>
  )
}
const GenHandler = styled.ul`
  display: flex;
`
const Gen = styled.li`
  list-style-type: none;
  font-size: 1.8rem;
  margin-right: 20px;
`
export default SearchBar

