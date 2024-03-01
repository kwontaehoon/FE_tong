import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { kakaoInfo, kakaoLogin, kakaoToken } from '../../hooks/sns/Kakao'
import { naverLogin, naverToken } from '../../hooks/sns/Naver';
import { useGoogleLogin } from '@react-oauth/google';
import { googleLogin } from '../../hooks/sns/Google';
import { useCategoryStore } from '../../store/Category';

const index = () => {

    const navigate = useNavigate();

    const openCategoryModal = useCategoryStore((state) => state.setOpen);

    const code = new URL(window.location.href).searchParams.get("code");
    const state = new URL(window.location.href).searchParams.get('state');

    const googleGetCode = useGoogleLogin({
      onSuccess: async(codeResponse) => {
        const response = await googleLogin(codeResponse);
        window.alert(`Google ${response.data.name}님 안녕하세요!`);
      }
    });

    useEffect(() => {

      const kakao = async() => {
          const token = await kakaoToken(code);
          console.log("kakao token: ", token);

          const info = await kakaoInfo(token.data.access_token);
          console.log("info: ", info);

          window.alert(`Kakao ${info.data.kakao_account.profile.nickname}님 안녕하세요!`);
          navigate("/");
      }

      const naver = async() => {
        const token = await naverToken(code, state);
        console.log("naver token: ", token);
      }
      if(code){
        kakao();
        naver();
      }
      
    }, []);

  return (
    <div className='p-5'>
        <div><span className='mb-2 cursor-pointer' onClick={()=>navigate("/signup")}>회원가입</span></div>
        <div><span className='mb-2 cursor-pointer' onClick={()=>navigate("/login")}>로그인</span></div>
        <div><span className='mb-2 cursor-pointer' onClick={()=>navigate("/main")}>메인페이지</span></div>
        <div><span className='mb-2 cursor-pointer' onClick={()=>navigate("/mypage")}>마이페이지</span></div>
        <div><span className='mb-2 cursor-pointer' onClick={()=>navigate("/findId")}>아이디 찾기</span></div>
        <div><span className='mb-2 cursor-pointer' onClick={()=>navigate("/findId_success")}>아이디 찾기 성공</span></div>
        <div><span className='mb-2 cursor-pointer' onClick={()=>navigate("/findPwd")}>비밀번호 찾기</span></div>
        <div><span className='mb-2 cursor-pointer' onClick={()=>navigate("/newPwd")}>새로운 비밀번호</span></div>
        <div><span className='mb-2 cursor-pointer' onClick={()=>navigate("/findPwd_success")}>비밀번호 찾기 성공</span></div>
        <div><span className='mb-2 cursor-pointer' onClick={kakaoLogin}>카카오 로그인</span></div>
        <div><span className='mb-2 cursor-pointer' onClick={naverLogin}>네이버 로그인</span></div>
        <div><span className='mb-2 cursor-pointer' onClick={googleGetCode}>구글 로그인</span></div>
        <div><span className='mb-2 cursor-pointer' onClick={()=>navigate("/admin")}>관리자 페이지</span></div>
        <div><span className='mb-2 cursor-pointer' onClick={()=>navigate("/reservation")}>예약 목록</span></div>
        <div><span className='mb-2 cursor-pointer' onClick={()=>navigate("/weather")}>날씨</span></div>
        <div><span className='mb-2 cursor-pointer' onClick={()=>navigate("/board")}>구하기게시판</span></div>
        <div><span className='mb-2 cursor-pointer' onClick={()=>navigate("/search")}>검색 목록</span></div>
        <div><span className='mb-2 cursor-pointer' onClick={()=>navigate("/myActive")}>내 활동 기록</span></div>
        <div onClick={()=>openCategoryModal(true)}>카테고리</div>
        <div><span className='mb-2 cursor-pointer' onClick={()=>navigate("/mypage_info")}>마이페이지 내정보수정</span></div>
        <div><span className='mb-2 cursor-pointer' onClick={()=>navigate("/expire")}>회원탈퇴</span></div>
    </div>
  )
}

export default index