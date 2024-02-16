import React from 'react'
import {  
  Component,
  ID,
  FindPwd
} from './styles'
import Header from '../../../layout/Header'

const index = () => {
  return (
    <Component>

      <Header noBtn />

      <ID>아이디를 찾았어요!</ID>
      <FindPwd>로그인</FindPwd>

    </Component>
  )
}

export default index