import React, { useState } from 'react'
import { fetchNoteText } from '../../../constants/text/api/FetchNote'

const index = () => {
    // 1. 전체를 뒤엎을 변화
    // 2. 기능 수정, 기능 추가
    // 3. 버그, 내부적 코드 보완

    const [modal, setModal] = useState(true);

    return modal && (
        <div className='absolute right-20 bg-white p-5 py-7 shadow-custom rounded-lg' style={{width: "600px", zIndex: 999}}>
            <div className='flex justify-end mb-2'>
                <img src='/svg/close.svg' className='cursor-pointer' onClick={()=>setModal(false)} />
            </div>
            <div className='flex border-y py-1 border-grey04'>
                <div className='w-24 text-center'>버전</div>
                <div className='w-36 text-center'>날짜</div>
                <div className='flex-1 text-center'>변경이력</div>
            </div>
            {fetchNoteText.map(x => {
                return (
                    <div className='flex py-3 border-b border-grey06' key={x.id}>
                        <div className='w-24 flex justify-center items-center'>{x.version}</div>
                        <div className='w-36 flex justify-center items-center'>{x.date}</div>
                        <div className='flex-1'>
                            <div className='text-m font-bold'>{x.title}</div>
                            <div>{x.content}</div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default index