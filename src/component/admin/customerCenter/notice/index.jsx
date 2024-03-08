import React, { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import { useNoticeListQuery, useNoticeWriteMutation } from '../../../../hooks/queries/admin/Notice';

const index = () => {

  const count = Array.from({ length: 3 }, () => "");
  const { data, isSuccess, refetch } = useNoticeListQuery();
  const [info, setInfo] = useState(data);
  console.log("info: ", info);
  const { mutateAsync: write } = useNoticeWriteMutation();

  useEffect(() => {
    setInfo(data);
}, [isSuccess]);

  return isSuccess && (
    <div>
      <div className='flex mb-5'>
        <div className='font-bold text-xl flex-1'>추천 검색어</div>
        <Button sx={{ backgroundColor: '#007CFF' }} 
          variant="contained" 
          onClick={async()=>{
            await write(info);
            window.alert("수정했습니다.");
            refetch();
          }}>수정하기
        </Button>
      </div>
        {count.map((_, index) => {
          return <div key={index}>
            <div className='mb-2'>카테고리{index+1}</div>
            <input className='border mr-5 w-full mb-5 p-3 rounded' 
              placeholder={data[index]?.category}
              onChange={(e)=>{
                let category = [...info];
                category[index].category = e.target.value;
                setInfo(category);
             }}/>
            <div className='mb-2'>제목{index+1}</div>
            <input className='border mr-5 w-full mb-5 p-3 rounded' 
              placeholder={data[index]?.content}
              onChange={(e)=>{
                let title = [...info];
                title[index].title = e.target.value;
                setInfo(title);
             }}/>
             <div className='mb-2'>내용{index+1}</div>
             <textarea className='border h-40 mr-5 w-full mb-5 p-3 rounded' 
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