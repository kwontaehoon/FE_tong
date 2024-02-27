import React from 'react'
import {
  Container,
  Recruitment,
  Anonymous,
  Comment_Box,
  Comment,
  TongTong_Box,
  TongTong,
  Days
} from './styles'

const index = () => {
  return (
    <Container>
        <Recruitment>장기동 FC통통 팀원 모집</Recruitment>
        <Recruitment>2/23(금) 오후8시 통통 축구장</Recruitment>
      <Comment_Box>
        <img style={{ width: "16px" }} src="/svg/eye.svg" className='mr-1' />
        <Comment>322</Comment>
        <img style={{ width: "16px" }} src="/svg/comment.svg" className='mr-1' />
        <Comment>31</Comment>
      </Comment_Box>
      <Anonymous>
        <img style={{ width: "36px" }} src="/svg/Ikon.svg" />
        <TongTong_Box>
          <TongTong>통통이</TongTong>
          <Days>2024.02.24</Days>
        </TongTong_Box>
        <img style={{ width: "24px" }} src="/svg/details.svg" />
      </Anonymous>
    </Container>
  )
}

export default index