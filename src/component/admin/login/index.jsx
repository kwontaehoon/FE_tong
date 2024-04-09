import React, { useState, useEffect } from 'react'
import {
    Container,
    Logo,
    Id,
    Pwd,
    Login
} from './styles'
import Header from '../../../function/header'
import { useUsersLoginMutation } from '../../../hooks/queries/admin/Users'

const index = () => {

    const [info, setInfo] = useState({
        id: '',
        password: ''
    });
    const [validation, setValidation] = useState(false); // 유효성 검사
    const { mutateAsync: login, data } = useUsersLoginMutation();

    useEffect(() => {
        console.log('data: ', data);
        if (data?.data?.status == "fail") {
            setValidation(true);
        } else if (data?.data?.status == "success") {
            window.location.reload();
        }
    }, [data]);

    return (
        <Container>

            <Header noArrow closeUrl="/" padding noClose/>
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
                <Login $validation={validation} onClick={() => login(info)}>관리자 로그인</Login>
            </div>
        </Container>
    )
}

export default index