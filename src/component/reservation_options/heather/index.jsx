import React from 'react'
import {Container,
Heather,
Option} from './styles'

const index = () => {
  return (
   <Container>
    <Heather>
        <img src="svg/Header_arrow_left.svg"></img>
        <Option>옵션선택</Option>
        <img src="svg/search.svg"></img>
    </Heather>
   </Container>
  )
}

export default index