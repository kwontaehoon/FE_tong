import React, { useState } from 'react'
import {
    Component,
    Header,
    Logo,
    Center,
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

const index = () => {

    const [info, setInfo] = useState({
        id: '',
        password: ''
    });
    console.log("info: ", info);
    const [validation, setValidation] = useState(); // 유효성 검사
    const { mutate: login } = useLoginMutation();

    return (
        <Component>
            <Header><img src="/svg/Vector.svg" /></Header>

            <Logo>LOGO</Logo>

            <Center>
                <Id placeholder='아이디' onChange={(e)=>setInfo({...info, id: e.target.value})}></Id>
                <Pwd placeholder='비밀번호' onChange={(e)=>setInfo({...info, password: e.target.value})}></Pwd>
                <Login onClick={()=>login()}>로그인</Login>
                <Minibox>
                    <ID_find>아이디 찾기</ID_find>
                    <img src="/svg/Line 2.svg" />
                    <Pwd_find>비밀번호 찾기</Pwd_find>
                    <img src="/svg/Line 2.svg" />
                    <Signup>회원가입</Signup>
                </Minibox>
            </Center>

            <Social>
                <Social_button><img src="/svg/Ellipse 19.svg" /></Social_button>
                <Social_button><img src="/svg/Ellipse 19.svg" /></Social_button>
                <Social_button><img src="/svg/Ellipse 19.svg" /></Social_button>
            </Social>
        </Component>
    )
}

export default index