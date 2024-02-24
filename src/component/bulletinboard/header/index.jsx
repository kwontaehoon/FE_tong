import React from 'react'
import {Container,
Header,
Bulletin_board,
Saving_Box,
Saving
} from './styles'

const index = () => {
  return (
    <Container>
        <Header>
        <img src="svg/BackArrow.svg"></img>
        <Bulletin_board>게시판</Bulletin_board>
        <img src="svg/search.svg"></img>
        </Header>
        <Saving_Box>
          <Saving>팀구하기</Saving>
          <Saving>용병구하기</Saving>
          <Saving>공지사항</Saving>
          <Saving>FAQ</Saving>
        </Saving_Box>
    </Container>
   
  )
}

export default index