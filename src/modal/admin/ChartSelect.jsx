import React, { useState } from 'react'
import { ModalContainer, ModalSubContainer } from '../../layout/ModalContainer'
import { useLocation } from 'react-router-dom'
import { useAdminChartSelectStore, useAdminUserModifyStore } from '../../store/Admin';
import { useUsersModifyMutation } from '../../hooks/queries/admin/Users';
import { chartText } from '../../constants/text/admin/Chart';
import { FaChartBar } from "react-icons/fa";
import { FaChartPie } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa6";

const index = () => {

    const pathName = useLocation().pathname;

    const setOpenAdminChartSelectModal = useAdminChartSelectStore((state) => state.setOpen);
    const setInfoAdminChartSelectModal = useAdminChartSelectStore((state) => state.setSelect);

    return (
        <ModalContainer $admin={pathName.includes('admin')}>
            <ModalSubContainer $admin={pathName.includes('admin')} $font={"12px"}>
                <div className='flex justify-end mb-2'>
                    <img src="/svg/close.svg" className='cursor-pointer' onClick={() => setOpenAdminChartSelectModal(false)} />
                </div>

                <div className='flex mb-1'>
                    {chartText.map((x, index) => {
                        return (
                            <div key={x.id} className={'w-32 h-32 border border-grey07 flex flex-col items-center cursor-pointer rounded-lg shadow-custom' + (index === 1 ? ' mx-2' : '')}
                                onClick={()=>{
                                    setOpenAdminChartSelectModal(false);
                                    setInfoAdminChartSelectModal(index);
                                }}>
                                <div className='flex-1 w-full flex items-center justify-center'>
                                    {index === 0 ? <FaChartLine className='w-12 h-12 text-grey06' />
                                    : 
                                    index === 1 ? <FaChartBar className='w-12 h-12 text-grey06' />
                                    :
                                    <FaChartPie className='w-12 h-12 text-grey06' />}
                                </div>
                                <div className='border-t border-grey07 w-full text-center py-1'>{x.content}</div>
                            </div>
                        )
                    })}
                </div>
            </ModalSubContainer>
        </ModalContainer>
    )
}

export default index