import React from 'react'
import {
  Component,
  Find_id,
  Information,
  Input,
  Name,
  Pwd,
  ID
} from './styles'
import Header from '../../../layout/Header'

const index = () => {
  return (
    <Component>
      
      <Header />

      <Find_id>아이디 찾기</Find_id>
      <Information>
        아래 정보를 입력하여 아이디 찾기를 완료해주세요.
      </Information>

      <Name>이름</Name>
      <Input placeholder='이름을 입력하세요.'></Input>

      <Name>이메일</Name>
      <Input placeholder='이메일을 입력하세요.'></Input>

      <ID>아이디 찾기</ID>
      <Pwd>
        <div className='border-b'>비밀번호 찾기</div>
      </Pwd>
    </Component>
  )
}

export default index