import React from 'react'
import {
    Icon,
    Icon_Box,
    Home,
    House
} from './styles'
import { useNavigate } from 'react-router-dom'
import { useCategoryStore } from '../../store/Category'
import { useLoginStore } from '../../store/LoginFlag'
import { loginFlag } from '../../utill/LoginFlag'

const index = () => {

    const navigate = useNavigate();
    const openCategoryModal = useCategoryStore((state) => state.setOpen);
    const openLoginModal = useLoginStore((state) => state.setOpen);

    return (
        <Icon>
            <Icon_Box onClick={()=>navigate("/reservation", { replace: true })}>
                <img src="/svg/Nav_reservation.svg"></img>
                <House>예약</House>
            </Icon_Box>
            <Icon_Box onClick={()=>{
                if(loginFlag()){
                    navigate("/mypage", { replace: true })
                }else openLoginModal(true);
            }}>    
                <img src="/svg/Nav_mypage.svg"></img>
                <House>마이</House>
            </Icon_Box>
            <Icon_Box>
                <div className='absolute left-25% -top-6 flex justify-center items-center flex-col'
                    onClick={()=>navigate("/", { replace: true })}>
                    <Home>
                        <img src="/svg/Nav_home.svg"></img>
                    </Home>
                    <House>홈</House>
                </div>
                <House></House>
            </Icon_Box>
            <Icon_Box onClick={()=>{
                if(loginFlag()){
                    navigate("/myActive", { replace: true });
                }else openLoginModal(true);
            }}>
                <img src="/svg/Nav_wish.svg"></img>
                <House>찜</House>
            </Icon_Box>

            <Icon_Box onClick={()=>openCategoryModal(true)}>
                <img src="/svg/Nav_category.svg"></img>
                <House>카테고리</House>
            </Icon_Box>
        </Icon>
    )
}

export default index