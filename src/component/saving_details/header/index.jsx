import React from 'react'
import {Container,
Header,
Recruitment_Box,
Anonymous,
Comments} from './styles'

const index = () => {
  return (
    <Container>
        <Header>
        <img style={{marginTop:"14px"}}src="svg/BackArrow.svg"></img>
        </Header>
        <Recruitment_Box>
            장기동 FC통통 팀원 모집
            2/23(금) 오후8시 통통 축구장
        </Recruitment_Box>
        <Comments></Comments>
        <Anonymous></Anonymous>
    </Container>
  )
}

export default index