import React from 'react'
import { ModalContainer, ModalSubContainer } from '../../../layout/ModalContainer'
import { useLoginStore } from '../../../store/LoginFlag';
import { useNavigate } from 'react-router-dom';

const index = () => {

  const navigate = useNavigate();

  const openLoginModal = useLoginStore((state) => state.setOpen);

  return (
    <ModalContainer>
        <ModalSubContainer>
            <div className='text-lg font-bold my-5'>로그인 후 이용해주세요.</div>
            <div className='flex'>
                <div className='flex-1 flex items-center justify-center p-4 bg-grey07 mr-2 rounded-lg text-grey05'
                  onClick={()=>openLoginModal(false)}>닫기
                </div>
                <div className='flex-1 flex items-center justify-center p-4 bg-m ml-2 rounded-lg text-white'
                  onClick={()=>{openLoginModal(false); navigate("/login")}}
                >로그인하기
                </div>
            </div>
        </ModalSubContainer>
    </ModalContainer>
  )
}

export default index