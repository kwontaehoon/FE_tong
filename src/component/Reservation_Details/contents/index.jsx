import React from 'react'
import { Container,
  Contents_Box,
  Title,
  Introduction,
  Jangi,
Star,
Score} from './styles'

const index = () => {
  return (
    <Container>
      <Contents_Box>
        <Title>
          장기 통통축구장
        </Title>
        <Jangi>
          장기역 도보 5분
        </Jangi>
        <Introduction>
          경기도 김포시 김포한강3로 383 김포 통통축구장
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