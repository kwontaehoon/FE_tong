import React from 'react'
import Button from '@mui/material/Button';

const index = () => {

    const count = Array.from({ length: 5 }, () => "");

    return (
        <div>
            <div className='mb-5 font-bold text-xl'>PICK</div>
            {count.map((_, index) => {
                return <input key={index} className='mb-5 p-3 border rounded w-full' />
            })}
            <div className='flex justify-end w-full'>
                <Button sx={{backgroundColor: '#007CFF'}} variant="contained" onClick={()=>window.alert("수정했습니다.")}>수정하기</Button>
            </div>
        </div>
    )
}

export default index