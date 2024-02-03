import React from 'react'
import { 
    Component,
    Header,
    Logo,
    Center,
    Social,
    Id,
    Pwd,
    Login,
    ID_Mini,
    Pwd_Mini,
    Signup_Mini,
    Minibox,
    Social_Mini 
    
} from './styles'

const index = () => {


    return (
        <Component>
           <Header><img src="/svg/Vector.svg"/></Header>

           <Logo>LOGO</Logo>

           <Center>
                <Id placeholder='아이디'></Id>
                <Pwd placeholder='비밀번호'></Pwd>
                <Login>로그인</Login>

            < Minibox>
                <ID_Mini>아이디 찾기</ID_Mini>
                <img src="/svg/Line 2.svg"/>
                <Pwd_Mini>비밀번호 찾기</Pwd_Mini>
                <img src="/svg/Line 2.svg"/>
                <Signup_Mini>회원가입</Signup_Mini>
                </Minibox> 
        
           </Center>

           <Social>
            < Social_Mini><img src="/svg/Ellipse 19.svg"/></Social_Mini>
            < Social_Mini><img src="/svg/Ellipse 19.svg"/></Social_Mini>
           </Social>

        </Component>
    )
}

export default index