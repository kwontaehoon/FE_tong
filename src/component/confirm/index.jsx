import React from 'react'
import { useBearStore } from '../../store/test'
import { useTestQuery } from '../../hooks/queries/Test';
import { useNavigate } from 'react-router-dom'

const index = () => {

    const navigate = useNavigate();

    const bears = useBearStore((state) => state.bears);

    const { data: test } = useTestQuery();

  return (
    <div className='p-5'>
        {/* <div>{bears}</div>
        <div>{test}</div>
        <div>main</div> */}
        <div className='mb-2 cursor-pointer' onClick={()=>navigate("/signup")}>회원가입</div>
        <div className='mb-2 cursor-pointer' onClick={()=>navigate("/login")}>로그인</div>
        <div className='mb-2 cursor-pointer' onClick={()=>navigate("/main")}>메인페이지</div>
    </div>
  )
}

export default index