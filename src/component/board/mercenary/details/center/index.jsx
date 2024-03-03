import React from 'react'
import {
  Container,
  Bulletin_Box,
  Bulletin,
  Notification
} from './styles'

const index = ({boardList}) => {
  return (
    <Container>
      <img src="/svg/Stadium.svg"></img>
      <Bulletin_Box>
        <Bulletin>{boardList.content}</Bulletin>
        <Notification>부적절한 게시글이라면 김포운통장에 알려주세요</Notification>
      </Bulletin_Box>

    </Container>
  )
}

export default index