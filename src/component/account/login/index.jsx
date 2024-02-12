import React, { useState, useEffect } from 'react'
import {
    Container,
    Header,
    Logo,
    Social,
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
            <Header><img src="/svg/Vector.svg" /></Header>

            <Logo>LOGO</Logo>

                <Id placeholder='아이디' onChange={(e)=>setInfo({...info, id: e.target.value})}></Id>
                <Pwd type='password' placeholder='비밀번호' onChange={(e)=>setInfo({...info, password: e.target.value})}></Pwd>
                {validation && <div className='text-xs my-3 text-valid'>아이디 또는 비밀번호를 잘못 입력했습니다.입력하신 내용을 다시 확인해주세요.</div>}
                <Login $validation={validation} 
                    onClick={()=>{
                        login(info);
                    }}>로그인
                </Login>
                <Minibox>
                    <ID_find>아이디 찾기</ID_find>
                    <img src="/svg/Line 2.svg" />
                    <Pwd_find>비밀번호 찾기</Pwd_find>
                    <img src="/svg/Line 2.svg" />
                    <Signup>회원가입</Signup>
                </Minibox>

            <Social>
                <Social_button><img src="/svg/Ellipse 19.svg" /></Social_button>
                <Social_button><img src="/svg/Ellipse 19.svg" /></Social_button>
                <Social_button><img src="/svg/Ellipse 19.svg" /></Social_button>
            </Social>
        </Container>
    )
}

export default index