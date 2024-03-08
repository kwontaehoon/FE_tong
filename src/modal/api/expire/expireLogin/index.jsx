import React from 'react'
import { ModalContainer, ModalSubContainer } from '../../../../layout/ModalContainer'
import { useExpireLoginStore } from '../../../../store/Expire';
import { useNavigate } from 'react-router-dom';

const index = () => {

  const navigate = useNavigate();

  const openExpireLoginModal = useExpireLoginStore((state) => state.setOpen);

  return (
    <ModalContainer>
        <ModalSubContainer>
            <div className='text-lg font-bold my-5 flex justify-center'>이미 탈퇴한 회원입니다.</div>
            <div className='flex'>
                <div className='flex-1 flex items-center justify-center p-4 bg-m ml-2 rounded-lg text-white'
                  onClick={()=>{openExpireLoginModal(false); navigate("/login")}}
                >닫기
                </div>
            </div>
        </ModalSubContainer>
    </ModalContainer>
  )
}

export default index