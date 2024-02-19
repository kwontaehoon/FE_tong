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
import { useNavigate } from 'react-router-dom'
import { useFindPasswordMutation } from '../../../hooks/queries/api/Account'

const index = () => {

  const navigate = useNavigate();

  const [info, setInfo] = useState({
    id: '',
    email: ''
  });

  const { mutate: findPassword, data: findPasswordData } = useFindPasswordMutation();
  console.log(findPasswordData);

  useEffect(()=>{
    if(findPasswordData?.data?.password){
      navigate("/newPwd");
    }
  }, [findPasswordData]);

  return (
    <Component>
      
      <Header noArrow url={"login"}/>

      <Find_pwd>비밀번호 찾기</Find_pwd>
      <Information>
        아래 정보를 입력하여 비밀번호 찾기를 완료해주세요.
      </Information>

      <Name>아이디</Name>
      <Input placeholder='아이디를 입력하세요.' onChange={(e)=>setInfo({...info, id: e.target.value})}></Input>

      <Name>이메일</Name>
      <Input placeholder='이메일을 입력하세요.' onChange={(e)=>setInfo({...info, email: e.target.value})}></Input>

      <ID $ok={Object.values(info).every(value => value !== "")}
      onClick={()=>{
        if(Object.values(info).every(value => value !== "")){
          findPassword(info);
        }}}>비밀번호 찾기</ID>
      <Pwd>
        <div className='border-b' onClick={()=>navigate("/findId")}>아이디 찾기</div>
      </Pwd>
    </Component>
  )
}

export default index