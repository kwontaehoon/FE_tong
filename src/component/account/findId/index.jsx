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
import { useFindIdMutation } from '../../../hooks/queries/api/Account'

const index = () => {

  const navigate = useNavigate();

  const [info, setInfo] = useState({
    name: '',
    email: ''
  });

  const [validation, setValidation] = useState(false);

  const { mutate: findId, data: findIdData } = useFindIdMutation();

  useEffect(() => {
    if (findIdData) {
      if (findIdData?.data?.id) {
        navigate("/findId_success", { state: findIdData?.data?.id });
      } else setValidation(true);
    }

  }, [findIdData]);

  return (
    <Component>

      <Header noClose padding title="아이디 찾기" closeUrl="/login" borderB />
      <div className='px-5'>

        <Information>아래 정보를 입력하여 아이디 찾기를 완료해주세요.</Information>

        <Name>이름</Name>
        <Input placeholder='이름을 입력하세요.' onChange={(e) => { setValidation(false); setInfo({ ...info, name: e.target.value }); }}></Input>

        <Name>이메일</Name>
        <Input $validation={validation} placeholder='이메일을 입력하세요.' onChange={(e) => { setValidation(false); setInfo({ ...info, email: e.target.value }); }}></Input>

        {validation && <div className='text-xs pl-1 text-valid'>입력하신 정보로 아이디를 찾을 수 없습니다. 다시 확인해주세요.</div>}

        <ID $validation={validation} $ok={Object.values(info).every(value => value !== "")}
          onClick={() => {
            if (Object.values(info).every(value => value !== "")) {
              findId(info);
            }
          }}>아이디 찾기
        </ID>
        <Pwd>
          <div className='text-grey04' onClick={() => navigate("/findPwd")}>비밀번호 찾기</div>
        </Pwd>
      </div>
    </Component>
  )
}

export default index