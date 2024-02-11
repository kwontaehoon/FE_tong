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
        <div className='mb-2 cursor-pointer' onClick={()=>navigate("/findId")}>아이디 찾기</div>
        <div className='mb-2 cursor-pointer' onClick={()=>navigate("/findId_success")}>아이디 찾기 성공</div>
        <div className='mb-2 cursor-pointer' onClick={()=>navigate("/findPwd")}>비밀번호 찾기</div>
        <div className='mb-2 cursor-pointer' onClick={()=>navigate("/newPwd")}>새로운 비밀번호</div>
        <div className='mb-2 cursor-pointer' onClick={()=>navigate("/findPwd_success")}>비밀번호 찾기 성공</div>
        <div className='mb-2 cursor-pointer' onClick={()=>navigate("/mypage")}>마이페이지</div>
        <div className='mb-2 cursor-pointer' onClick={()=>navigate("/Reservation")}>예약</div>
        <div className='mb-2 cursor-pointer' onClick={()=>navigate("/reservation_details")}>예약 상세</div>
        <div className='mb-2 cursor-pointer' onClick={()=>navigate("/Search")}>검색</div>

        
    </div>
  )
}

export default index