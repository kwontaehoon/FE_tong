import React from 'react'
import {
  Container,
  Information_Container,
  Information_Box,
  Information,
  Input,
  Check,
  Test,
  Option
} from './styles'

const index = () => {
  return (
    <Container>
      <Information_Container>
        <Information_Box>
          예약자 정보
        </Information_Box>
        <Information>
          예약자이름
        </Information>
        <Input placeholder='이름을 입력하세요'></Input>
        <Information>휴대폰번호</Information>
        <Input placeholder='번호를 입력하세요'></Input>
      </Information_Container>

      <Option>
        <Information>옵션선택</Information>
        <Input placeholder='날짜선택'></Input>
        <Input placeholder='시간선택'></Input>
      </Option>

    
      <Check>
        <Test>확인</Test>
      </Check>
    </Container>
  )
}

export default index