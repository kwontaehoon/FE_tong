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
  let passwordReg = /^(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{10,16}$/; // 비밀번호 체크

  const [info, setInfo] = useState({
    password: "",
    passwordCheck: ""
  });

  const { mutate: newPassword, data: newPasswordData } = useNewPasswordMutation();

  const [validation, setValidation] = useState(false);

  useEffect(() => {
    if (newPasswordData?.data?.status == "success") {
      navigate("/findPwd_success")
    }
  }, [newPasswordData]);

  return (
    <Component>

      <Header noClose title="비밀번호 변경" borderB padding />

      <div className='px-5'>
        <Information>아래 정보를 입력하여 비밀번호를 재설정 해주세요.</Information>

        <Name>비밀번호</Name>
        <div className={'flex bg-bg' + (validation ? ' mb-3' : ' mb-5')}>
          <img src='/svg/account_name.svg' className='ml-ten' />
          <Input placeholder='비밀번호를 입력하세요.' onChange={(e) => { setValidation(false); setInfo({ ...info, password: e.target.value }); }}></Input>
        </div>
        {validation && <div className='text-xs mt-2 mb-5 pl-1 text-valid'>비밀번호: 8~16자의 영문 대/소문자, 숫자, 특수문자를 사용해 주세요.</div>}

        <Name>비밀번호 확인</Name>
        <div className='flex bg-bg'>
          <img src='/svg/account_name.svg' className='ml-ten' />
          <Input placeholder='비밀번호를 한번더 입력하세요.' onChange={(e) => { setValidation(false); setInfo({ ...info, passwordCheck: e.target.value }); }}></Input>
        </div>

        <ID $ok={Object.values(info).every(value => value !== "") && info.password == info.passwordCheck}
          onClick={() => {
            if (Object.values(info).every(value => value !== "" && info.password == info.passwordCheck)) {
              if(!info.password.match(passwordReg)){
                setValidation(true);
              }else {
                newPassword({
                  id: id,
                  password: info.password
                });
              }
            }
          }}>변경하기
        </ID>
      </div>
    </Component>
  )
}

export default index