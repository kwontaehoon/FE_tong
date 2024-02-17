import React from 'react'
import {
  Component,
  Find_pwd,
  Information,
  Input,
  Name,
  Pwd,
  ID
} from './styles'
import Header from '../../../layout/Header'
import { useNavigate } from 'react-router-dom'

const index = () => {

  const navigate = useNavigate();

  return (
    <Component>
      
      <Header noArrow url={"login"}/>

      <Find_pwd>비밀번호 찾기</Find_pwd>
      <Information>
        아래 정보를 입력하여 비밀번호 찾기를 완료해주세요.
      </Information>

      <Name>아이디</Name>
      <Input placeholder='아이디를 입력하세요.'></Input>

      <Name>이메일</Name>
      <Input placeholder='이메일을 입력하세요.'></Input>

      <ID>비밀번호 찾기</ID>
      <Pwd>
        <div className='border-b' onClick={()=>navigate("/findId")}>아이디 찾기</div>
      </Pwd>
    </Component>
  )
}

export default index