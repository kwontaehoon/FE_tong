import React from 'react'
import {
  Container,
  Information_Box,
  Information,
  Input,
  Check,
  Test
} from './styles'

const index = () => {
  return (
    <Container>
      <Information_Box>
        예약자 정보
      </Information_Box>
      <Information>예약자이름</Information>
      <Input placeholder='이름을 입력하세요'></Input>
      <Information>비밀번호</Information>
      <Input placeholder='비밀번호를 입력하세요'></Input>
      <Information>인원선택</Information>
      <Input placeholder='비밀번호를 입력하세요'></Input>
      <Information>날짜선택</Information>
      <Input placeholder='비밀번호를 입력하세요'></Input>
      <Information>시간선택</Information>
      <Input placeholder='00:00'></Input>
      <Check>
        <Test>확인</Test>
      </Check>
    </Container>
  )
}

export default index