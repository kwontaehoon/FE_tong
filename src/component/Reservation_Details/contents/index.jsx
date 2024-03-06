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
import { star } from '../../../function/star'

const index = ({ data }) => {

  return (
    <Container>
      <Contents_Box>
        <Title>{data.title}</Title>
        <Jangi>{data.subTitle}</Jangi>
        <Introduction>{data.location}</Introduction>
        <Star>
          {star(data.score)}
          <Score>{data.score}</Score>
        </Star>
      </Contents_Box>
    </Container>
  )
}

export default index