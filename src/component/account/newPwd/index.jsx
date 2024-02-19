import React, { useState, useEffect } from 'react'
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
import { useNewPasswordMutation } from '../../../hooks/queries/api/Account'

const index = () => {

  const [info, setInfo] = useState({
    password: "",
    passwordCheck: ""
  });
  const { mutate: newPassword } = useNewPasswordMutation();

  return (
    <Component>
      
      <Header noArrow />

      <Find_pwd>비밀번호 변경</Find_pwd>
      <Information>아래 정보를 입력하여 비밀번호를 재설정 해주세요.</Information>

      <Name>비밀번호</Name>
      <Input type='password' placeholder='비밀번호를 입력하세요.' onChange={(e)=>setInfo({...info, password: e.target.value})}></Input>

      <Name>비밀번호 확인</Name>
      <Input type='password' placeholder='비밀번호 확인' onChange={(e)=>setInfo({...info, passwordCheck: e.target.value})}></Input>

      <ID $ok={Object.values(info).every(value => value !== "")}
        onClick={()=>{
          if(Object.values(info).every(value => value !== "")){
            newPassword(info);
          }
        }}>변경하기
      </ID>

    </Component>
  )
}

export default index