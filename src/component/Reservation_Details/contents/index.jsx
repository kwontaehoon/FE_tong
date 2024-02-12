import React from 'react'
import { Container,
  Contents_Box,
  Title,
  Introduction,
Star,
Score} from './styles'

const index = () => {
  return (
    <Container>
      <Contents_Box>
        <Title>
          Lorem ipsum
        </Title>
        <Introduction>
          Lorem ipsum dolor sit ament
        </Introduction>
        <Introduction>
          Lorem ipsum dolor
        </Introduction>
        <Star>
          <img src="svg/Star.svg"></img>
          <img src="svg/Star.svg"></img>
          <img src="svg/Star.svg"></img>
          <img src="svg/Star.svg"></img>
          <img src="svg/Star.svg"></img>
          <Score>4.8</Score>
        </Star>
      </Contents_Box>
    </Container>
  )
}

export default index