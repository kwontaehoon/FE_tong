import React, { useState } from 'react'
import { ModalContainer, ModalSubContainer } from '../../layout/ModalContainer'
import { useLocation } from 'react-router-dom'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useAdminCalendarStore } from '../../store/Calendar';
import { useAdminUserModifyStore } from '../../store/AdminUsersModify';

const index = () => {

    const pathName = useLocation().pathname;

    const openAdminUserModifyModal = useAdminUserModifyStore((state) => state.setOpen);

    return (
        <ModalContainer $admin={pathName.includes('admin')}>
            <ModalSubContainer $admin={pathName.includes('admin')}>
                <div className=''>
                    <img src="/svg/close.svg" className='cursor-pointer' onClick={()=>openAdminUserModifyModal(false)} />
                </div>
                <div>회원 리스트 수정</div>
            </ModalSubContainer>
        </ModalContainer>
    )
}

export default index