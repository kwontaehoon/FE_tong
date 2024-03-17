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
import { useLoginMutation, useSocialLoginMutation } from '../../../hooks/queries/api/Account'
import { useNavigate } from 'react-router-dom'
import Header from '../../../function/header'
import { useGoogleLogin } from '@react-oauth/google'
import { naverLogin, naverToken } from '../../../hooks/sns/Naver'
import { kakaoInfo, kakaoLogin, kakaoToken } from '../../../hooks/sns/Kakao'
import { googleLogin } from '../../../hooks/sns/Google'
import { useExpireLoginStore } from '../../../store/Expire'

const index = () => {

    const code = new URL(window.location.href).searchParams.get("code");
    const state = new URL(window.location.href).searchParams.get('state');

    const openExpireLoginModal = useExpireLoginStore((state) => state.setOpen);

    const navigate = useNavigate();

    const [info, setInfo] = useState({
        id: '',
        password: ''
    });
    const [validation, setValidation] = useState(false); // 유효성 검사
    const { mutateAsync: login, data, isLoading } = useLoginMutation();
    const { mutateAsync: sociallLogin } = useSocialLoginMutation();

    const googleGetCode = useGoogleLogin({
        onSuccess: async (codeResponse) => {
            const info = await googleLogin(codeResponse);
            console.log("google response: ", info);

            const response = await sociallLogin({ email: info.data.email });
            console.log("google response socialLogin: ", response);

            if (response.data.status == "400") {
                navigate("/signup", { state: info.data.email });
            } else {
                localStorage.setItem("token", response.data.token)
                navigate("/main");
            }
        }
    });

    useEffect(() => {

        if (code) {
            const kakao = async () => {
                const token = await kakaoToken(code);
                console.log("kakao token: ", token);

                const info = await kakaoInfo(token.data.access_token);
                console.log("kakao infooo: ", info.data.kakao_account.email);

                const response = await sociallLogin({ email: info.data.kakao_account.email });
                console.log("kakao response: ", response);

                if (response.data.status == "400") {
                    navigate("/signup", { state: info.data.kakao_account.email });
                } else {
                    localStorage.setItem("token", response.data.token);
                    navigate("/main");
                }
            }

            const naver = async () => {
                const token = await naverToken(code, state);
                console.log("naver token: ", token);
            }
            if (code) {
                kakao();
                naver();
            }
        }
    }, []);

    useEffect(() => {
        if (data?.data?.status == 400) {
            setValidation(true);
        } else if (data?.data?.status == 100) {
            openExpireLoginModal(true);
        } else if (data?.data?.status == 200) {
            localStorage.setItem("token", data.data.token);
            navigate("/")
        }
    }, [data]);

    return (
        <Container>

            <Header noArrow closeUrl="/" padding />
            <div className='mx-5'>

                <Logo><img src="/svg/Logo.svg" className='w-36' /></Logo>

                <Id placeholder='아이디' onChange={(e) => setInfo({ ...info, id: e.target.value })}></Id>
                <Pwd type='password' placeholder='비밀번호' onChange={(e) => setInfo({ ...info, password: e.target.value })}
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                            login(info);
                        }
                    }}>
                </Pwd>
                {validation && <div className='text-xs pl-1 my-3 text-valid'>아이디 또는 비밀번호를 잘못 입력했습니다. 다시 확인해주세요.</div>}
                <Login $validation={validation} onClick={() => login(info)}>로그인</Login>
                <Minibox>
                    <ID_find onClick={() => navigate("/findId")}>아이디</ID_find>
                    <Pwd_find onClick={() => navigate("/findPwd")}>비밀번호</Pwd_find>
                    <Signup onClick={() => navigate("/signup")}>회원가입</Signup>
                </Minibox>

                <div className='flex justify-center items-center mb-8'>
                    <div className='border-b w-32 h-0 text-grey-b'></div>
                    <div className='mx-4 whitespace-nowrap text-grey05' style={{ fontSize: "13px" }}>SNS 계정으로 로그인</div>
                    <div className='border-b w-32 h-0 text-grey-b'></div>
                </div>
                <div className='flex justify-center'>
                    <Social_button><img src="/svg/Naver.svg" className='w-12' onClick={naverLogin} /></Social_button>
                    <Social_button><img src="/svg/Kakao.svg" className='w-12' onClick={kakaoLogin} /></Social_button>
                    <Social_button><img src="/svg/Google.svg" className='w-12' onClick={googleGetCode} /></Social_button>
                </div>
            </div>
        </Container>
    )
}

export default index