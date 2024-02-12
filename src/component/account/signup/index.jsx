import React, { useState } from 'react'
import {
    Container,
    Top,
    Gimpo,
    Enterinformation,
    Information,
    Title,
    Terms,
    Essential,
    Personal,
    Marketing,
    Signup
} from './styles'
import { signupValidation } from '../../../utill/SignupValidation';

const index = () => {

    const [info, setInfo] = useState({
        id: '',
        password: '',
        passwordCheck: '',
        email: '',
        nickname: ''
    });

    const [validation, setValidation] = useState({
        id: false,
        idDuplicate: false,
        password: false,
        passwordLength: false,
        passwordCheck: false,
        email: false,
        emailForm: false,
        nickname: false
    });

    return (
        <Container>
            <Top>
                <img src="/svg/Vector.svg" />
            </Top>
            <Gimpo>김포 운통장에 오신걸 환영합니다.</Gimpo>
            <Enterinformation>
                아래 정보를 입력하여 회원가입을 완료해주세요.
            </Enterinformation>

            <Title>아이디</Title>
            <Information maxLength={20} onChange={(e)=>setInfo({...info, id: e.target.value})}></Information>
            {validation.id && <div className='text-xs my-3 text-valid'>아이디를 입력해 주세요.</div>}
            {validation.idDuplicate && <div className='text-xs my-3 text-valid'>사용할 수 없는 아이디입니다. 다른 아이디를 입력해 주세요</div>}

            <Title>비밀번호</Title>
            <Information type="password" onChange={(e)=>setInfo({...info, password: e.target.value})}></Information>
            {validation.password && <div className='text-xs my-3 text-valid'>비밀번호를 입력해 주세요.</div>}
            {validation.passwordLength && <div className='text-xs my-3 text-valid'>비밀번호: 8~16자의 영문 대/소문자, 숫자, 특수문자를 사용해 주세요.</div>}

            <Title>비밀번호 확인</Title>
            <Information type="password" onChange={(e)=>setInfo({...info, passwordCheck: e.target.value})}></Information>
            {validation.passwordCheck && <div className='text-xs my-3 text-valid'>비밀번호를 확인해 주세요.</div>}

            <Title maxLength={20}>이메일</Title>
            <Information maxLength={20} onChange={(e)=>setInfo({...info, email: e.target.value})}></Information>
            {validation.email && <div className='text-xs my-3 text-valid'>이메일을 입력해 주세요.</div>}
            {validation.emailForm && <div className='text-xs my-3 text-valid'>이메일을 다시 확인해주세요.</div>}

            <Title>닉네임</Title>
            <Information maxLength={10} onChange={(e)=>setInfo({...info, nickname: e.target.value})}></Information>
            {validation.nickname && <div className='text-xs my-3 text-valid'>닉네임을 입력해 주세요.</div>}

            <Terms>이용약관</Terms>

            <Essential>(필수)이용약관</Essential>
            <Personal>(필수)개인정보 수집 및 동의</Personal>
            <Marketing>(필수)마케팅 수신 동의</Marketing>

            <Signup onClick={()=>signupValidation(info, validation, setValidation)}>회원가입</Signup>
        </Container>
    )
}

export default index