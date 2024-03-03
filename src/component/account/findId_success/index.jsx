import React from 'react'
import {  
  Component,
  ID,
  FindPwd
} from './styles'
import Header from '../../../function/header'
import { useNavigate, useLocation } from 'react-router-dom'

const index = () => {

  const navigate = useNavigate();

  return (
    <Component>
      <Header noArrow />
      <ID>아이디를 찾았어요!</ID>
      <div className='border-b pb-2 border-grey05'>{useLocation().state}</div>
      <FindPwd onClick={()=>navigate("/login", { replace: true })}>로그인하기</FindPwd>
    </Component>
  )
}

export default index