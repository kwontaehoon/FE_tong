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
      <Header noClose title="아이디 찾기" borderB padding />
      <div className='px-5'>
        <ID>아이디를 찾았어요!</ID>
        <div className='border-b pb-2 border-grey05 pl-2'>{useLocation().state}</div>
        <FindPwd onClick={()=>navigate("/login", { replace: true })}>로그인하기</FindPwd>
      </div>
    </Component>
  )
}

export default index