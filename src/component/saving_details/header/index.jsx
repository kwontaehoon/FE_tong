import React from 'react'
import {Container,
Header,
Recruitment_Box,
Recruitment,
Anonymous,
Comment_Box,
Comment,
TongTong_Box,
TongTong,
Days} from './styles'

const index = () => {
  return (
    <Container>
        <Header>
        <img style={{marginTop:"14px"}}src="svg/BackArrow.svg"></img>
        </Header>
        <Recruitment_Box>
            <Recruitment>
            장기동 FC통통 팀원 모집
            </Recruitment>
            <Recruitment>
            2/23(금) 오후8시 통통 축구장
            </Recruitment>
        </Recruitment_Box>
        <Comment_Box>
        <img style={{width:"14px"}}src="svg/eye.svg"></img>
        <Comment>322</Comment> 
        <img style={{width:"14px"}}src="svg/comment.svg"></img>
        <Comment>31</Comment>
        </Comment_Box>
        <Anonymous>
            <img style={{width:"36px"}}src="svg/Ikon.svg"></img>
            <TongTong_Box>
                <TongTong>통통이</TongTong>
                <Days>2024.02.24</Days>
            </TongTong_Box>
            <img style={{width:"24px"}}src="svg/details.svg"></img>
        </Anonymous>
    </Container>
  )
}

export default index