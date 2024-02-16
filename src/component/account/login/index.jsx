import React, { useState, useEffect } from 'react'
import {
    Container,
    Header,
    Logo,
    Id,
    Pwd,
    Login,
    ID_find,
    Pwd_find,
    Signup,
    Minibox,
    Social_button
} from './styles'
import { useLoginMutation } from '../../../hooks/queries/api/Account'
import { useNavigate } from 'react-router-dom'

const index = () => {

    const navigate = useNavigate();
    const [info, setInfo] = useState({
        id: '',
        password: ''
    });
    const [validation, setValidation] = useState(false); // 유효성 검사
    const { mutateAsync: login, data } = useLoginMutation();
    

    useEffect(()=>{
        if(data?.data?.status == 400){
            setValidation(true);
        }else if(data?.data?.status == 200){
            navigate("/main")
        }
    }, [data]);

    return (
        <Container>
            <Header><img src="/svg/Close.svg" className='w-6' /></Header>

            <Logo><img src="/svg/Logo.svg" className='w-44'/></Logo>

                <Id placeholder='아이디' onChange={(e)=>setInfo({...info, id: e.target.value})}></Id>
                <Pwd type='password' placeholder='비밀번호' onChange={(e)=>setInfo({...info, password: e.target.value})}></Pwd>
                {validation && <div className='text-xs my-3 text-valid'>아이디 또는 비밀번호를 잘못 입력했습니다.입력하신 내용을 다시 확인해주세요.</div>}
                <Login $validation={validation} 
                    onClick={()=>{
                        login(info);
                    }}>로그인
                </Login>
                <Minibox>
                    <ID_find>아이디</ID_find>
                    <img src="/svg/Line 2.svg" />
                    <Pwd_find>비밀번호</Pwd_find>
                    <img src="/svg/Line 2.svg" />
                    <Signup>회원가입</Signup>
                </Minibox>

                <div className='flex justify-center items-center mb-10'>
                    <div className='border w-32 h-0 text-grey-b'></div>
                    <div className='mx-4 whitespace-nowrap text-grey05' style={{fontSize: "13px"}}>SNS 계정으로 로그인</div>
                    <div className='border w-32 h-0 text-grey-b'></div>
                </div>
                <div className='flex justify-center'>
                    <Social_button><img src="/svg/Naver.svg" className='w-12' /></Social_button>
                    <Social_button><img src="/svg/Kakao.svg" className='w-12' /></Social_button>
                    <Social_button><img src="/svg/Google.svg" className='w-12' /></Social_button>
                </div>
        </Container>
    )
}

export default index