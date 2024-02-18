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
      
      <Header noArrow />

      <Find_pwd>비밀번호 변경</Find_pwd>
      <Information>아래 정보를 입력하여 비밀번호를 재설정 해주세요.</Information>

      <Name>비밀번호</Name>
      <Input placeholder='비밀번호를 입력하세요.'></Input>

      <Name>비밀번호 확인</Name>
      <Input placeholder='비밀번호 확인'></Input>

    </Component>
  )
}

export default index