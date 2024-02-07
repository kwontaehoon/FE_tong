import React, { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import { useSearchRecommendListQuery, useSearchRecommendModifyMutation } from '../../../../hooks/queries/admin/Search';

const index = () => {

  const count = Array.from({ length: 10 }, () => "");
  const { data, isSuccess } = useSearchRecommendListQuery();
  const [info, setInfo] = useState(data);
  const { mutateAsync: modify } = useSearchRecommendModifyMutation();

  useEffect(() => {
    setInfo(data);
}, [isSuccess]);

  return isSuccess && (
    <div>
      <div className='flex mb-5'>
        <div className='font-bold text-xl flex-1'>추천 검색어</div>
        <Button sx={{ backgroundColor: '#007CFF' }} 
          variant="contained" 
          onClick={()=>{
            modify(info);
            window.alert("수정했습니다.");
          }}>수정하기
        </Button>
      </div>
        {count.map((_, index) => {
          return <div key={index}>
            <div className='mb-2'>추천 검색어{index+1}</div>
            <input className='border mr-5 w-full mb-5 p-3 rounded' 
              placeholder={data[index]?.content}
              onChange={(e)=>{
                let contents = [...info];
                contents[index].content = e.target.value;
                setInfo(contents);
             }}/>
          </div>
        })}
    </div>
  )
}

export default index