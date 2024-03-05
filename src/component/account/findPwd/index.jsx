import React, { useState, useEffect } from 'react'
import {
  Component,
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

  useEffect(() => {
    if (findPasswordData) {
      if (findPasswordData?.data?.password) {
        navigate("/newPwd", { state: findPasswordData?.data?.id });
      } else setValidation(true);
    }

  }, [findPasswordData]);

  return (
    <Component>

      <Header noClose title="비밀번호 찾기" closeUrl="/login" borderB padding />

      <div className='px-5'>
        <Information>
          <img src="/svg/find_pwd.svg" className='w-8' />
          <div className='flex flex-col justify-center ml-2 text-xs'>
            <div>기존에 가입하신 이메일을 입력하시면,</div>
            <div>비밀번호 변경하실 수 있습니다.</div>
          </div>
        </Information>

        <Name>아이디</Name>
        <div className='flex bg-bg mb-5'>
          <img src='/svg/account_name.svg' className='ml-ten' />
          <Input placeholder='아이디를 입력하세요.' onChange={(e) => { setValidation(false); setInfo({ ...info, id: e.target.value }); }}></Input>
        </div>

        <Name>이메일</Name>
        <div className='flex bg-bg'>
          <img src='/svg/account_email.svg' className='ml-ten' />
          <Input placeholder='이메일을 입력하세요.' onChange={(e) => { setValidation(false); setInfo({ ...info, email: e.target.value }); }}></Input>
        </div>

        {validation && <div className='text-xs py-2 pl-1 text-valid'>입력하신 정보로 비밀번호를 찾을 수 없습니다. 다시 확인해주세요.</div>}

        <ID $ok={Object.values(info).every(value => value !== "")}
          onClick={() => {
            if (Object.values(info).every(value => value !== "")) {
              findPassword(info);
            }
          }}>비밀번호 찾기</ID>
        <Pwd>
          <div className='text-grey04' onClick={() => navigate("/findId")}>아이디 찾기</div>
        </Pwd>
      </div>
    </Component>
  )
}

export default index