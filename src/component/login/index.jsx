import React from 'react'
import { useNavigate } from 'react-router-dom'

const index = () => {

    const navigate = useNavigate();

    return (
        <div>
            <div>여긴 로그인페이지입니다.</div>
            <button onClick={() => navigate("/signup")}>회원가입으로 이동</button>
        </div>
    )
}

export default index