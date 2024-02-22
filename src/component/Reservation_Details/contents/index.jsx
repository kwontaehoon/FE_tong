import React from 'react'
import {
  Container,
  Contents_Box,
  Title,
  Introduction,
  Jangi,
  Star,
  Score
} from './styles'

const index = ({ data }) => {

  console.log("content data: ", data);

  return (
    <Container>
      <Contents_Box>
        <Title>{data.title}</Title>
        <Jangi>{data.subTitle}</Jangi>
        <Introduction>{data.location}</Introduction>
        <Star>
          <img src="/svg/Star.svg"></img>
          <img src="/svg/Star.svg"></img>
          <img src="/svg/Star.svg"></img>
          <img src="/svg/Star.svg"></img>
          <img src="/svg/Star.svg"></img>
          <Score>{data.score}</Score>
        </Star>
      </Contents_Box>
    </Container>
  )
}

export default index