import React from 'react'
import {
  Container,
  Information_Container,
  Information_Box,
  Information,
  Input,
  Input_Box,
} from './styles'

const index = ({ info, setInfo }) => {
  return (
    <Container>
      <Information_Container>

        <Information_Box>예약자 정보</Information_Box>
        <Information>예약자 이름</Information>

        <div className='flex bg-bg mb-5 rounded-lg overflow-hidden'>
          <img src="/svg/account_name.svg" className='ml-ten' />
          <Input placeholder='이름을 입력하세요' onChange={(e) => setInfo({ ...info, name: e.target.value })}></Input>
        </div>

        <Information>휴대폰 번호</Information>

        <div className='flex bg-bg mb-5 rounded-lg overflow-hidden'>
          <img src="/svg/account_phone.svg" className='ml-ten w-3 mr-1' />
          <Input type='number' placeholder='번호를 입력하세요(-생략)' onChange={(e) => setInfo({ ...info, phoneNumber: e.target.value })}></Input>
        </div>
      </Information_Container>
    </Container>

  )
}

export default index