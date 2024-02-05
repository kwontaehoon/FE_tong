import React, { useRef, useState } from 'react'
import Button from '@mui/material/Button';

const index = () => {

    const count = Array.from({ length: 3 }, () => "");
    const imgRef = useRef();
    const [imgFile, setImgFile] = useState([]); // 이미지 파일 리스트, formData로 보낼정보
    console.log('imgFile: ', imgFile);
    const [imgFileList, setImgFileList] = useState([]); // 이미지 리스트, 썸네일 배열
    console.log('imgFileList: ', imgFileList);

    return (
        <div>
            <div className='flex mb-5'>
                <div className='font-bold text-xl flex-1'>예약</div>
                <Button sx={{backgroundColor: '#007CFF'}} variant="contained" onClick={()=>window.alert("수정했습니다.")}>수정하기</Button>
            </div>
            <div>
                {count.map((_, index) => {
                    return <div key={index}>
                        <div className='mb-2'>이미지</div>
                        <label className="border border-grey200 mr-5 w-20 h-20 rounded flex cursor-pointer" htmlFor="reviewImage" />
                        <input
                            type="file"
                            accept="image/*"
                            id="reviewImage"
                            ref={imgRef}
                            style={{ display: 'none' }}
                            onChange={(e) => {
                                const file = imgRef.current.files[0];
                                const reader = new FileReader();
                                reader.readAsDataURL(file);
                                reader.onloadend = () => {
                                    e.target.value = "";
                                };
                            }}
                        />
                        <div className='w-full mt-5'>
                            <div className='mb-5'>
                                <div>제목</div>
                                <input className='border p-3 w-full rounded mt-2' />
                            </div>
                            <div className='mb-5'>
                                <div>내용</div>
                                <input className='border p-3 w-full rounded mt-2' />
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default index