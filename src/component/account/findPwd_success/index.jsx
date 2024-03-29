import React from 'react'
import {
    Component,
    Pwd, Login
} from './styles'
import Header from '../../../function/header'
import { useNavigate } from 'react-router-dom'

const index = () => {

    const navigate = useNavigate();

    return (
        <Component>

            <Header noArrow />

            <Pwd>비밀번호를 변경했어요!</Pwd>
            <Login onClick={() => navigate("/login")}>로그인 하기</Login>
        </Component>
    )
}

export default index