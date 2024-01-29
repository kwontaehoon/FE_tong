import React from 'react'
import { Component } from './styles'
import { useNavigate } from 'react-router-dom'

const index = () => {

    const navigate = useNavigate();

    return (
        <Component>
            <div>여기는 로그인페이지입니다.</div>
            <button onClick={() => navigate("/login")}>로그인으로 이동</button>
        </Component>
    )
}

export default index