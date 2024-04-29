import React, { useState, useEffect } from 'react'
import {
  Container,
  Information,
  Title,
  Modify
} from './styles'
import Header from '../../../function/header'
import { useNavigate } from 'react-router-dom'
import { useInfoQuery, useUserInfoUpdateMutation } from '../../../hooks/queries/api/Account'
import { infoValidation } from '../../../utill/InfoValidation'

const index = () => {

  const navigate = useNavigate();

  const { data } = useInfoQuery();
  console.log("data: ", data);

  const [info, setInfo] = useState({
    email: '',
    name: '',
    birth: ''
  });
  console.log("info: ", info);

  const { mutateAsync: update } = useUserInfoUpdateMutation();

  const [validation, setValidation] = useState({
    email: false,
    name: false,
    emailForm: false,
    birthLength: false,
  });
  console.log("validation: ", validation);

  useEffect(() => {
    if (data) {
      setInfo({
        email: data.email,
        name: data.name,
        birth: data.birth
      })
    }
  }, [data]);

  return (
    <Container>
      <Header title="내 정보 관리" noClose padding />
      <div className='px-5 flex-1'>

        <Title $top maxLength={20}>이메일</Title>
        <Information placeholder='이메일을 입력해 주세요'
          value={info.email}
          onChange={(e) => {
            setValidation({...validation, email: false, emailForm: false});
            setInfo({ ...info, email: e.target.value });
          }}>
        </Information>
        {validation.email && <div className='text-xs my-2 pl-1 text-valid'>이메일을 입력해 주세요.</div>}
        {validation.emailForm && <div className='text-xs my-2 pl-1 text-valid'>이메일을 다시 확인해주세요.</div>}

        <Title>이름</Title>
        <Information placeholder='실명을 입력해 주세요'
          maxLength={4}
          value={info.name}
          onChange={(e) => {
            setInfo({ ...info, name: e.target.value.trim() });
          }}>
        </Information>

        <Title>생년월일</Title>
        <Information placeholder='6자리 입력'
          maxLength={6}
          value={info.birth}
          onChange={(e) => {
            setValidation({...validation, birthLength: false});
            setInfo({ ...info, birth: e.target.value });
          }}>
        </Information>
        {validation.birth && <div className='text-xs my-2 pl-1 text-valid'>생년월일을 입력해 주세요.</div>}
        {validation.birthLength && <div className='text-xs my-2 pl-1 text-valid'>생년월일을 다시 확인해주세요.</div>}

        <Title>비밀번호</Title>
        <div className='flex items-center relative' onClick={() => navigate("/newPwd")}>
          <img src="/svg/Arrow_right.svg" className='absolute right-5 w-3' />
          <div className='px-3 bg-bg w-full flex items-center text-grey05 text-sm rounded-lg' style={{ height: "46px" }}>비밀번호 변경</div>
        </div>
        <div></div>
      </div>

      <div className='mb-5 mx-5'>
        <Modify $ok={Object.values(info).every(value => value !== "")}
          onClick={() => {
            if (Object.values(info).every(value => value !== ""))
              infoValidation(info, validation, setValidation, async() => {
                await update({...info, userId: data.userId});
                navigate(-1);
              });
          }}>변경하기</Modify>
      </div>
    </Container>
  )
}

export default index