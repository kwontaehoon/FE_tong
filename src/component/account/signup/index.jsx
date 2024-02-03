import React from 'react'
import {
    Component, Top, Gimpo,
    Enterinformation, Information,
    ID, Pwd, Pwd_Check, Mail, Terms,
    Essential, Personal, Marketing, Signup
} from './styles'

const index = () => {

    return (
        <Component>

            <Top>
                <img src="/svg/Vector.svg" />
            </Top>
            <Gimpo>김포 운통장에 오신걸 환영합니다.</Gimpo>
            <Enterinformation>
                아래 정보를 입력하여 회원가입을 완료해주세요.
            </Enterinformation>

            <ID>아이디</ID>
            <Information></Information>

            <Pwd>비밀번호</Pwd>
            <Information></Information>

            <Pwd_Check>비밀번호 확인</Pwd_Check>
            <Information></Information>

            <Mail>이메일</Mail>
            <Information></Information>


            <Terms>이용약관</Terms>

            <Essential>(필수)이용약관</Essential>
            <Personal>(필수)개인정보 수집 및 동의</Personal>
            <Marketing>(필수)마케팅 수신 동의</Marketing>

            <Signup>회원가입</Signup>
        </Component>
    )
}

export default index