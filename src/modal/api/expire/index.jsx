import React from 'react'
import { ModalContainer, ModalSubContainer } from '../../../layout/ModalContainer'
import { useExpireStore } from '../../../store/Expire'

const index = () => {

  const openExpireModal = useExpireStore((state) => state.setOpen);

  return (
    <ModalContainer>
        <ModalSubContainer>
            <div className='flex font-bold text-xl justify-center'>
                <div className='mr-1'>정말로</div>
                <div className='text-m'>탈퇴</div>
                <div className='ml-1'>하시겠습니까?</div>
            </div>
            <div className='flex flex-col items-center'>
            <div style={{marginTop: "12px"}}>회원 탈퇴 시 계정 정보 및 보유중인</div>
            <div style={{marginBottom: "12px"}}>포인트와 쿠폰은 삭제되어 복구가 불가해요.</div>
            </div>
            <div className='flex'>
                <div className='flex-1 flex items-center justify-center p-4 bg-grey07 mr-2 rounded-lg text-grey05'
                  onClick={()=>openExpireModal(false)}>되돌아가기
                </div>
                <div className='flex-1 flex items-center justify-center p-4 bg-m ml-2 rounded-lg text-white'
                  onClick={()=>openExpireModal(false)}
                >탈퇴하기
                </div>
            </div>
        </ModalSubContainer>
    </ModalContainer>
  )
}

export default index