import React, { useState } from 'react'
import {
    Container,
    Top,
    Gimpo,
    Enterinformation,
    Information,
    Title,
    IdCheck,
    Terms,
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
                <img src="/svg/Close.svg" className='w-6' />
            </Top>
            <Gimpo>김포 운통장에 오신걸 환영합니다.</Gimpo>
            <Enterinformation>
                아래 정보를 입력하여 회원가입을 완료해주세요.
            </Enterinformation>

            <Title>아이디</Title>
            <div className='flex'>
                <div className='w-full relative flex items-center'>
                    <div className='absolute right-2'>
                        <img src="/svg/InputClose.svg" />
                    </div>
                    <Information maxLength={20} placeholder='아이디를 입력하세요.' onChange={(e)=>setInfo({...info, id: e.target.value})}></Information>
                </div>
                <IdCheck>중복확인</IdCheck>
            </div>
            {validation.id && <div className='text-xs my-3 text-valid'>아이디를 입력해 주세요.</div>}
            {validation.idDuplicate && <div className='text-xs my-3 text-valid'>사용할 수 없는 아이디입니다. 다른 아이디를 입력해 주세요</div>}

            <Title>비밀번호</Title>
            <Information type="password" placeholder='비밀번호 입력하세요.' onChange={(e)=>setInfo({...info, password: e.target.value})}></Information>
            {validation.password && <div className='text-xs my-3 text-valid'>비밀번호를 입력해 주세요.</div>}
            {validation.passwordLength && <div className='text-xs my-3 text-valid'>비밀번호: 8~16자의 영문 대/소문자, 숫자, 특수문자를 사용해 주세요.</div>}

            <Title>비밀번호 확인</Title>
            <Information type="password" placeholder='비밀번호를 확인' onChange={(e)=>setInfo({...info, passwordCheck: e.target.value})}></Information>
            {validation.passwordCheck && <div className='text-xs my-3 text-valid'>비밀번호를 확인해 주세요.</div>}

            <Title maxLength={20}>이메일</Title>
            <div className='flex items-center text-sm text-grey05'>
                <input className='w-1/2 bg-grey07 rounded-lg' style={{height: "46px", padding: "0px 13px"}} maxLength={20} placeholder='이메일' onChange={(e)=>setInfo({...info, email: e.target.value})}></input>
                <div className='mx-2 text-lg'>@</div>
                <div className='w-1/2 bg-grey07 rounded-lg flex items-center' style={{height: "46px",  padding: "0px 13px"}}>선택</div>
            </div>
            {validation.email && <div className='text-xs my-3 text-valid'>이메일을 입력해 주세요.</div>}
            {validation.emailForm && <div className='text-xs my-3 text-valid'>이메일을 다시 확인해주세요.</div>}

            <Terms>이용약관</Terms>
            <div className='flex text-sm text-grey04 mb-3'>
                <div className='flex flex-1 items-center'>
                    <div className='border w-4 h-4 rounded-full mr-1'></div>
                    <div>모두 동의 합니다.</div>
                </div>
                <div>보기</div>
            </div>
            <div className='flex text-sm text-grey05 mb-3'>
                <div className='flex flex-1 items-center'>
                    <div className='border w-4 h-4 rounded-full mr-1'></div>
                    <div>(필수) 모두 동의 합니다.</div>
                </div>
                <div>보기</div>
            </div>
            <div className='flex text-sm text-grey05 mb-3'>
                <div className='flex flex-1 items-center'>
                    <div className='border w-4 h-4 rounded-full mr-1'></div>
                    <div>(필수) 개인정보 수집 및 동의</div>
                </div>
                <div>보기</div>
            </div>
            <div className='flex text-sm text-grey05 mb-3'>
                <div className='flex flex-1 items-center'>
                    <div className='border w-4 h-4 rounded-full mr-1'></div>
                    <div>(필수) 마케팅 수신 동의</div>
                </div>
                <div>보기</div>
            </div>

            <Signup onClick={()=>signupValidation(info, validation, setValidation)}>회원가입</Signup>
        </Container>
    )
}

export default index