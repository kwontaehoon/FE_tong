import React from 'react'
import {
    Icon,
    Icon_Box,
    Home,
    House
} from './styles'
import { useLocation, useNavigate } from 'react-router-dom'
import { useCategoryStore } from '../../store/Category'
import { useLoginStore } from '../../store/LoginFlag'
import { loginFlag } from '../../utill/LoginFlag'

const index = () => {

    const navigate = useNavigate();
    const pathName = useLocation().pathname;
    const openCategoryModal = useCategoryStore((state) => state.setOpen);
    const openLoginModal = useLoginStore((state) => state.setOpen);

    return (
        <Icon>
            <Icon_Box onClick={()=>navigate("/reservation", { replace: true })}>
                {pathName.includes('reservation') ?  <img src="/svg/nav_reservation.svg" className='w-6' /> : <img src="/svg/nav_reservation_grey.svg" className='w-6'/>}
                {/* <House>예약</House> */}
            </Icon_Box>
            <Icon_Box onClick={()=>{
                if(loginFlag()){
                    navigate("/mypage", { replace: true })
                }else openLoginModal(true);
            }}>    
                {pathName.includes('mypage') ? <img src="/svg/nav_mypage.svg" className='w-6' /> : <img src="/svg/nav_mypage_grey.svg" className='w-6' />} 
                {/* <House>마이</House> */}
            </Icon_Box>
            <Icon_Box>
                <div className='absolute left-25% -top-9 flex justify-center items-center flex-col'
                    onClick={()=>navigate("/", { replace: true })}>
                    <Home>
                        <img src="/svg/Nav_home.svg" className='w-16' />
                    </Home>
                    {/* <House>홈</House> */}
                </div>
                <House></House>
            </Icon_Box>
            <Icon_Box onClick={()=>{
                if(loginFlag()){
                    navigate("/myActive", { replace: true });
                }else openLoginModal(true);
            }}>
                {pathName.includes('myActive') ? <img src="/svg/nav_wish.svg" className='w-6' /> : <img src="/svg/nav_wish_grey.svg" className='w-6' />}
                {/* <House>찜</House> */}
            </Icon_Box>
            <Icon_Box onClick={()=>openCategoryModal(true)}>
                <img src="/svg/nav_category_grey.svg" className='w-6' />
                {/* <House>카테고리</House> */}
            </Icon_Box>
        </Icon>
    )
}

export default index