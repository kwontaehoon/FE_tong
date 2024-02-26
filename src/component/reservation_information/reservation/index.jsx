import React from 'react'
import {
  Container,
  Information_Container,
  Information_Box,
  Information,
  Input,
  Input_Box,
} from './styles'

const index = ({info, setInfo}) => {
  return (
    <Container>
      <Information_Container>

        <Information_Box>예약자 정보</Information_Box>
        <Information>예약자이름</Information>

        <Input_Box>
          <Input placeholder='이름을 입력하세요' onChange={(e)=>setInfo({...info, name: e.target.value})}></Input>
        </Input_Box>

        <Information>휴대폰번호</Information>

        <Input_Box>
          <Input placeholder='번호를 입력하세요' onChange={(e)=>setInfo({...info, phoneNumber: e.target.value})}></Input>
        </Input_Box>

      </Information_Container>
    </Container>

  )
}

export default index