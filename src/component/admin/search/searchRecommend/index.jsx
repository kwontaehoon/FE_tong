import React from 'react'
import Button from '@mui/material/Button';

const index = () => {

  const count = Array.from({ length: 10 }, () => "");

  return (
    <div>
      <div className='flex mb-5'>
        <div className='font-bold text-xl flex-1'>추천 검색어</div>
        <Button sx={{ backgroundColor: '#007CFF' }} variant="contained" onClick={() => window.alert("수정했습니다.")}>수정하기</Button>
      </div>
      <div className='mb-2'>검색어</div>
      <div className='flex flex-wrap'>
        {count.map((_, index) => {
          return <input key={index} className='border w-28 mr-5 mb-5 p-3 rounded' />
        })}
      </div>
    </div>
  )
}

export default index