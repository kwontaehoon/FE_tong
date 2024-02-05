import React from 'react'
import Button from '@mui/material/Button';

const index = () => {

    const count = Array.from({ length: 5 }, () => "");

    return (
        <div>
            <div className='flex mb-5'>
                <div className='font-bold text-xl flex-1'>Pick</div>
                <Button sx={{backgroundColor: '#007CFF'}} variant="contained" onClick={()=>window.alert("수정했습니다.")}>수정하기</Button>
            </div>
            {count.map((_, index) => {
                return <div>
                    <div className='mb-2'>내용</div>
                    <input key={index} className='mb-5 p-3 border rounded w-full' />
                </div>
                
            })}
        </div>
    )
}

export default index