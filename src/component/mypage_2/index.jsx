import React from 'react'
import {Component,
    Top,Information,Arrow,
    Input,ID, Pwd_Change,Pwd,
    Cosent, Gimpo, Storage} from './styles'

const index = () => {
    return (
        <Component>
            <Top>
                <Arrow>
                    <img src="/svg/grommet-icons_link-next.svg" />
                </Arrow>
                <Information>내정보 관리</Information>
            </Top>
            <ID>아이디</ID>
            <Input></Input>
            <ID>이메일</ID>
            <Input></Input>
            <ID>닉네임</ID>
            <Input></Input>

            <Pwd_Change>비밀번호 변경</Pwd_Change>
            <Pwd>비밀번호 변경하기</Pwd>
            <Cosent>수신동의</Cosent>
            <Gimpo>
                김포운통장에서 진행하는 이벤트와 추천등 다양한 혜탣을 알려드려요.
            </Gimpo>
            <input type="Checkbox" id="Check" value="알림" />
            <label></label>
            <Storage>저장하기</Storage>
        </Component>
    )
}

export default index