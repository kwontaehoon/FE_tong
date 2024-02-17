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

const index = () => {
  return (
    <Component>
      
      <Header noBtn />

      <Find_pwd>새 비밀번호</Find_pwd>
      <Information>아래 정보를 입력하여 비밀번호를 재설정 해주세요.</Information>

      <Name>이름</Name>
      <Input placeholder='비밀번호를 입력하세요.'></Input>

      <Name>이메일</Name>
      <Input placeholder='비밀번호 확인'></Input>

    </Component>
  )
}

export default index