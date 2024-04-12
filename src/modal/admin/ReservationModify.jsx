import React, { useRef } from 'react'
import { ModalContainer, ModalSubContainer } from '../../layout/ModalContainer'

const index = () => {

    const imgRef = useRef();

    return (
        <ModalContainer>
            <ModalSubContainer>
                <div>수정하기</div>
                <div className='flex-1 mb-2'>이미지</div>

                <label className="border border-grey200 mr-5 w-20 h-20 rounded flex cursor-pointer" htmlFor={'reservationImage'} />
                <input
                    type="file"
                    accept="image/*"
                    id={'reservationImage'}
                    multiple
                    ref={imgRef}
                    style={{ display: 'none' }}
                    onChange={(e) => {
                        let arr = [...imgFileList];
                        arr[index] = e.target.files[0];
                        setImgFileList(arr);
                    }}
                />

                <div className='w-full mt-5'>
                    <div className='mb-5 flex items-center'>
                        <div className='whitespace-nowrap mr-2'>제목</div>
                        <input className='border p-3 w-full rounded mt-2'/>
                    </div>
                    <div className='mb-5 flex items-center'>
                        <div className='whitespace-nowrap mr-2'>서브 제목</div>
                        <input className='border p-3 w-full rounded mt-2'/>
                    </div>
                    <div className='mb-5 flex items-center'>
                        <div className='whitespace-nowrap mr-2'>위치</div>
                        <input className='border p-3 w-full rounded mt-2'/>
                    </div>
                    <div className='mb-5 flex items-center'>
                        <div className='whitespace-nowrap mr-2'>평점</div>
                        <input className='border p-3 w-full rounded mt-2' type='number'/>
                    </div>
                </div>

            </ModalSubContainer>
        </ModalContainer>
    )
}

export default index