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
import Header from '../../../function/header'
import { useNavigate } from 'react-router-dom'
import { useFindPasswordMutation } from '../../../hooks/queries/api/Account'

const index = () => {

  const navigate = useNavigate();

  const [info, setInfo] = useState({
    id: '',
    email: ''
  });

  const [validation, setValidation] = useState(false);

  const { mutate: findPassword, data: findPasswordData } = useFindPasswordMutation();
  console.log(findPasswordData);

  useEffect(()=>{
    if(findPasswordData){
      if(findPasswordData?.data?.password){
        navigate("/newPwd", {state: findPasswordData?.data?.id});
      }else setValidation(true);
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

      {validation && <div className='text-xs text-valid'>입력하신 정보로 비밀번호를 찾을 수 없습니다. 다시 확인해주세요.</div>}

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