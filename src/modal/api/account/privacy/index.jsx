import React from 'react'
import { ModalMobileContainer, ModalMobileSubContainer } from '../../../../layout/ModalContainer'
import { usePrivacyStore } from '../../../../store/Account';

const index = () => {

    const privacyModal = usePrivacyStore((state) => state.open);
    const openPrivayModal = usePrivacyStore((state) => state.setOpen);

  return (
    <ModalMobileContainer $show={privacyModal}>
    <ModalMobileSubContainer $show={privacyModal}>
        <div className='text-base font-bold'>개인 정보 처리방침</div>
        <div className='my-5 h-40 overflow-scroll'>내용</div>
        <div className='flex-1 flex items-end'>
            <div className='h-12 flex justify-center items-center bg-m text-white w-full rounded-lg'
                onClick={() => openPrivayModal(false)}>닫기
            </div>
        </div>
    </ModalMobileSubContainer>
</ModalMobileContainer>
  )
}

export default index