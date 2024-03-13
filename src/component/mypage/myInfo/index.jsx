import React, { useState } from 'react'
import {
  Container,
  Information,
  Title,
  Modify
} from './styles'
import Header from '../../../function/header'
import { useNavigate } from 'react-router-dom'

const index = () => {

  const navigate = useNavigate();

  const [info, setInfo] = useState({
    id: '',
    email: '',
    name: '',
    birth: ''
  });
  console.log("info: ", info);

  return (
    <Container>
      <Header title="내 정보 관리" noClose padding />
      <div className='px-5 flex-1'>

        <Title $top maxLength={20}>이메일</Title>
        <Information placeholder='이메일을 입력해 주세요'
          maxLength={4}
          onChange={(e) => {
            setInfo({ ...info, email: e.target.value });
          }}>
        </Information>

        <Title>이름</Title>
        <Information placeholder='실명을 입력해 주세요'
          maxLength={4}
          onChange={(e) => {
            setInfo({ ...info, name: e.target.value });
          }}>
        </Information>

        <Title>생년월일</Title>
        <Information placeholder='6자리 입력'
          maxLength={6}
          onChange={(e) => {
            setInfo({ ...info, birth: e.target.value });
          }}>
        </Information>

          <Title>비밀번호</Title>
          <div className='flex items-center relative'>
            <img src="/svg/Arrow_right.svg" className='absolute right-5 w-3' />
            <div className='px-3 bg-bg w-full flex items-center text-grey05 text-sm rounded-lg' style={{height: "46px"}}>비밀번호 변경</div>
          </div>
          <div></div>
      </div>

      <div className='mb-5 mx-5'>
        <Modify>변경하기</Modify>
      </div>
    </Container>
  )
}

export default index