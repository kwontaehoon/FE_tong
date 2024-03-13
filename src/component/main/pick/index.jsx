import React, { useState, useEffect } from 'react'
import {
  Container,
  Ground_Pick,
  Ground,
  PickContent,
} from './styles'

const index = ({data}) => {

  const set = new Set(data.map(x => x.title));

  const [flag, setFlag] = useState(Array([...set].length).fill(false).map((_, index) => index === 0));

  useEffect(()=>{
  }, []);

  return (
    <Container>
      {data.length == 0 ? '' : <div className='px-5 pt-7 pb-2'>
        <Ground_Pick>
          <Ground>PICK📌</Ground>
          <div className='flex flex-col justify-end text-xs font-semibold text-grey04'>운동장 금주 트렌드</div>
        </Ground_Pick>
        <div className='mb-3 text-grey04 text-xxs'>운통장에서 김포를 이모저모를 소개해 드립니다.</div>
        <div className='flex flex-wrap'>
          {[...set].map((x, index) => {
            return (
              <PickContent $flag={flag[index]} key={index} 
                onClick={()=>{
                  const arr = Array(data.length).fill(false);
                  arr[index] = true;
                  setFlag(arr);
                }}>{x}
              </PickContent>
            )
          })}
        </div>
      </div>}
        <div className='flex px-5' style={{paddingBottom: "30px"}}>
          {data.map((x, index) => {
            if(x.title == [...set][flag.findIndex(x=>x)]){
              return (
                <div key={x.pickId} className='w-1/2 rounded-2xl overflow-hidden shadow-custom mx-2'>
                  <img src={`https://tong-bucket.s3.ap-northeast-2.amazonaws.com/${x.pickFiles[0].fileName}`} className='w-full h-36 object-center' />
                  <div className='px-4 py-ten flex flex-col justify-center bg-white'>
                    <div className='text-sm font-semibold'>{x.title}</div>
                    <div className='text-grey05 text-xs'>{x.content}</div>
                  </div>
                </div>
              )
            }
          })}
        </div>
    </Container>
  )
}

export default index