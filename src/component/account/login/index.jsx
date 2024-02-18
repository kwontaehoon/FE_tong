import React, { useState, useEffect } from 'react'
import {
    Container,
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
import Header from '../../../layout/Header'
import { useGoogleLogin } from '@react-oauth/google'
import { naverLogin, naverToken } from '../../../hooks/sns/Naver'
import { kakaoInfo, kakaoLogin, kakaoToken } from '../../../hooks/sns/Kakao'

const index = () => {

    const code = new URL(window.location.href).searchParams.get("code");
    const state = new URL(window.location.href).searchParams.get('state');

    const navigate = useNavigate();

    const [info, setInfo] = useState({
        id: '',
        password: ''
    });
    const [validation, setValidation] = useState(false); // 유효성 검사
    const { mutateAsync: login, data } = useLoginMutation();

    const googleGetCode = useGoogleLogin({
        onSuccess: async (codeResponse) => {
            const response = await googleLogin(codeResponse);
            window.alert(`Google ${response.data.name}님 안녕하세요!`);
        }
    });

    useEffect(() => {

        const kakao = async () => {
            const token = await kakaoToken(code);
            console.log("kakao token: ", token);

            const info = await kakaoInfo(token.data.access_token);
            console.log("info: ", info);

            window.alert(`Kakao ${info.data.kakao_account.profile.nickname}님 안녕하세요!`);
            navigate("/");
        }

        const naver = async () => {
            const token = await naverToken(code, state);
            console.log("naver token: ", token);
        }
        if (code) {
            kakao();
            naver();
        }

    }, []);

    useEffect(() => {
        if (data?.data?.status == 400) {
            setValidation(true);
        } else if (data?.data?.status == 200) {
            navigate("/main")
        }
    }, [data]);

    return (
        <Container>

            <Header noArrow url={"main"} />

            <Logo><img src="/svg/Logo.svg" className='w-44' /></Logo>

            <Id placeholder='아이디' onChange={(e) => setInfo({ ...info, id: e.target.value })}></Id>
            <Pwd type='password' placeholder='비밀번호' onChange={(e) => setInfo({ ...info, password: e.target.value })}></Pwd>
            {validation && <div className='text-xs my-3 text-valid'>아이디 또는 비밀번호를 잘못 입력했습니다. 다시 확인해주세요.</div>}
            <Login $validation={validation}
                onClick={() => {
                    login(info);
                }}>로그인
            </Login>
            <Minibox>
                <ID_find onClick={() => navigate("/findId")}>아이디</ID_find>
                <img src="/svg/Line 2.svg" />
                <Pwd_find onClick={() => navigate("/findPwd")}>비밀번호</Pwd_find>
                <img src="/svg/Line 2.svg" />
                <Signup onClick={() => navigate("/signup")}>회원가입</Signup>
            </Minibox>

            <div className='flex justify-center items-center mb-8'>
                <div className='border w-32 h-0 text-grey-b'></div>
                <div className='mx-4 whitespace-nowrap text-grey05' style={{ fontSize: "13px" }}>SNS 계정으로 로그인</div>
                <div className='border w-32 h-0 text-grey-b'></div>
            </div>
            <div className='flex justify-center'>
                <Social_button><img src="/svg/Naver.svg" className='w-12' onClick={naverLogin} /></Social_button>
                <Social_button><img src="/svg/Kakao.svg" className='w-12' onClick={kakaoLogin} /></Social_button>
                <Social_button><img src="/svg/Google.svg" className='w-12' onClick={googleGetCode} /></Social_button>
            </div>
        </Container>
    )
}

export default index