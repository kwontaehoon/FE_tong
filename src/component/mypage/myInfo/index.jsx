import React, { useState } from 'react'
import {
  Container,
  Information,
  Title,
  Modify
} from './styles'
import Header from '../../../function/header'

const index = () => {

  const [info, setInfo] = useState({
    id: '',
    password: '',
    passwordCheck: '',
    email: '',
    user_role: 'user',
    name: '',
    birth: ''
  });
  console.log("info: ", info);

  return (
    <Container>
      <Header title="내 정보 관리" />
      <div style={{height: "62px"}}></div>
      <Title>아이디</Title>
      <div className='flex'>
        <div className='w-full relative flex items-center'>
          <Information maxLength={20} placeholder='아이디를 입력하세요.' value={info.id}
            onChange={(e) => {
              setInfo({ ...info, id: e.target.value });
            }}>
          </Information>
        </div>
      </div>

      <Title>비밀번호</Title>
      <Information type="password" placeholder='비밀번호 입력하세요.'
        onChange={(e) => {
          setInfo({ ...info, password: e.target.value });
        }}>
      </Information>

      <Title>비밀번호 확인</Title>
      <Information type="password" placeholder='비밀번호를 확인'
        onChange={(e) => {
          setInfo({ ...info, passwordCheck: e.target.value });
        }}>
      </Information>

      <Title maxLength={20}>이메일</Title>
      <div className='flex items-center text-sm text-grey05'>
        <input className='w-full bg-bg rounded-lg' style={{ height: "46px", padding: "0px 13px" }}
          maxLength={20}
          placeholder={'이메일'}
          disabled={false}
          onChange={(e) => {
            setInfo({ ...info, email: e.target.value });
          }}>
        </input>

      </div>

      <Title>이름</Title>
      <Information placeholder='실명을 입력해 주세요'
        onChange={(e) => {
          setInfo({ ...info, name: e.target.value });
        }}
        disabled={true}>
      </Information>

      <Modify>변경하기</Modify>

    </Container>
  )
}

export default index