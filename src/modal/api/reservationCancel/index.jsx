import React from 'react'
import { ModalContainer, ModalSubContainer } from '../../../layout/ModalContainer'
import { useNavigate } from 'react-router-dom';
import { useReservationCancelStore } from '../../../store/ReservationCancel';

const index = () => {

  const navigate = useNavigate();

  const openReservationCancelModal = useReservationCancelStore((state) => state.setOpen);
  const reservationFunc = useReservationCancelStore((state) => state.func);

  return (
    <ModalContainer>
        <ModalSubContainer>
            <div className='text-lg font-bold my-5 flex justify-center'>예약을 취소합니다.</div>
            <div className='flex'>
                <div className='flex-1 flex items-center justify-center p-4 bg-grey07 mr-2 rounded-lg text-grey05'
                  onClick={()=>openReservationCancelModal(false)}>닫기
                </div>
                <div className='flex-1 flex items-center justify-center p-4 bg-m ml-2 rounded-lg text-white'
                  onClick={()=>{ openReservationCancelModal(false); reservationFunc(); }}
                >취소
                </div>
            </div>
        </ModalSubContainer>
    </ModalContainer>
  )
}

export default index