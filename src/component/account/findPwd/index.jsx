import React from 'react'
import {Component,Header,
    Header_img,Header_Arrow,
Pwd,Information,Input,
ID, Mail,ID_Find, Pwd_Find } from './styles'

const index = () => {
    return (
        < Component>
            <Header>
                <Header_Arrow>
                    <img src="svg/grommet-icons_link-next.svg"></img>
                </Header_Arrow>
                <Header_img>
                    <img src="svg/Vector.svg"></img>
                </Header_img>
            </Header>

            <Pwd>비밀번호 찾기</Pwd>
            <Information>
                아래 정보를 입력하여 비밀번호찾기를 완료해주세요.
            </Information>
            <ID>아이디</ID>
            <Input></Input>
            <Mail>이메일</Mail>
            <Input></Input>
            <ID_Find>아이디 찾기</ID_Find>
            <Pwd_Find>비밀번호 찾기</Pwd_Find>

        </Component>
    )
}

export default index