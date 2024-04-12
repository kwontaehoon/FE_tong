import React from 'react'
import { ModalContainer, ModalSubContainer } from '../../../layout/ModalContainer'
import { fetchNoteText } from '../../../constants/text/api/FetchNote'
import { useFetchNoteStore } from '../../../store/FetchNote'

const index = () => {

    const openFetchNoteModal = useFetchNoteStore((state) => state.setOpen);

    return (
        <ModalContainer>
            <ModalSubContainer>
                <div className='rounded-lg'>
                    <div className='flex justify-end mb-2'>
                        <img src='/svg/close.svg' className='cursor-pointer w-4' onClick={()=>openFetchNoteModal(false)} />
                    </div>
                    <div className='flex border-y py-1 border-grey04'>
                        <div className='w-20 text-center'>버전</div>
                        <div className='w-36 text-center'>날짜</div>
                        <div className='flex-1 text-center'>변경이력</div>
                    </div>
                    {fetchNoteText.map(x => {
                        return (
                            <div className='flex py-3 border-b border-grey06 overflow-y-scroll' key={x.id}>
                                <div className='w-20 flex justify-center items-center'>{x.version}</div>
                                <div className='w-36 flex justify-center items-center'>{x.date}</div>
                                <div className='flex-1'>
                                    <div className='text-m font-bold'>{x.title}</div>
                                    <div>{x.content}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </ModalSubContainer>
        </ModalContainer>
    )
}

export default index