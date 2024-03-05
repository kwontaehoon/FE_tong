import React, { useState, useEffect } from 'react'
import {
  Component,
  Information,
  Input,
  Name,
  ID
} from './styles'
import Header from '../../../function/header'
import { useNewPasswordMutation } from '../../../hooks/queries/api/Account'
import { useLocation, useNavigate } from 'react-router'

const index = () => {

  const id = useLocation().state;
  const navigate = useNavigate();

  const [info, setInfo] = useState({
    password: "",
    passwordCheck: ""
  });
  const { mutate: newPassword, data: newPasswordData } = useNewPasswordMutation();

  useEffect(()=>{
    if(newPasswordData?.data?.status == "success"){
      navigate("/findPwd_success")
    }else{

    }
  }, [newPasswordData]);

  return (
    <Component>
      
      <Header noClose title="비밀번호 변경" borderB padding />

      <div className='px-5'>
      <Information>아래 정보를 입력하여 비밀번호를 재설정 해주세요.</Information>

      <Name>비밀번호</Name>
      <Input type='password' placeholder='비밀번호를 입력하세요.' onChange={(e)=>setInfo({...info, password: e.target.value})}></Input>

      <Name>비밀번호 확인</Name>
      <Input type='password' placeholder='비밀번호 확인' onChange={(e)=>setInfo({...info, passwordCheck: e.target.value})}></Input>

      <ID $ok={Object.values(info).every(value => value !== "") && info.password == info.passwordCheck}
        onClick={()=>{
          if(Object.values(info).every(value => value !== "" && info.password == info.passwordCheck)){
            newPassword({
              id: id,
              password: info.password
            });
          }
        }}>변경하기
      </ID>
      </div>
    </Component>
  )
}

export default index