import React from 'react'
import {  
  Component,
  ID,
  FindPwd
} from './styles'
import Header from '../../../layout/Header'
import { useNavigate, useLocation } from 'react-router-dom'

const index = () => {

  const navigate = useNavigate();

  return (
    <Component>

      <Header noArrow />

      <ID>아이디를 찾았어요!</ID>
      <div>{useLocation().state}</div>
      <FindPwd onClick={()=>navigate("/login")}>로그인</FindPwd>

    </Component>
  )
}

export default index