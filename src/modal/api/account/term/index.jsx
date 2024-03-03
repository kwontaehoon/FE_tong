import React from 'react'
import { ModalMobileContainer, ModalMobileSubContainer } from '../../../../layout/ModalContainer'
import { useTermStore } from '../../../../store/Account';

const index = () => {

    const termModal = useTermStore((state) => state.open);
    const openTermModal = useTermStore((state) => state.setOpen);

    return (
        <ModalMobileContainer $show={termModal}>
            <ModalMobileSubContainer $show={termModal}>
                <div>이용약관</div>
                <div className='my-5 h-40 overflow-scroll'>내용</div>
                <div className='flex-1 flex items-end'>
                    <div className='h-12 flex justify-center items-center bg-m text-white w-full rounded-lg'
                        onClick={() => openTermModal(false)}>닫기
                    </div>
                </div>
            </ModalMobileSubContainer>
        </ModalMobileContainer>
    )
}

export default index