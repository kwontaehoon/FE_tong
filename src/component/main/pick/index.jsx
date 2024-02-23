import React, { useState, useEffect } from 'react'
import {
  Container,
  Ground_Pick,
  Ground,
  Pick,
  PickContent,
  Scroll
} from './styles'
import { usePickListQuery } from '../../../hooks/queries/api/Main'

const index = () => {

  const { data, isSuccess } = usePickListQuery();

  const [flag, setFlag] = useState([]);

  useEffect(()=>{
    if(data){
      const arr = Array.from({length: data.length} , ()=>false);
      arr[0] = true;
      setFlag(arr);
    }
    
  }, [isSuccess]);

  return isSuccess && (
    <Container>
      {data.length == 0 ? '' : <div className='bg-white px-5 py-4 rounded-2xl mb-5'>
        <Ground_Pick>
          <Ground>운통장</Ground>
          <Pick>MANU</Pick>
        </Ground_Pick>
        <div className='flex flex-wrap'>
          {data.map((x, index) => {
            return (
              <PickContent $flag={flag[index]} key={x.pickId} 
                onClick={()=>{
                  const arr = Array(data.length).fill(false);
                  arr[index] = true;
                  setFlag(arr);
                }}>{x.title}
              </PickContent>
            )
          })}
        </div>
      </div>}
      <Scroll>
        <div className='flex'>
          {data[flag.findIndex(x=>x)]?.pickFiles?.map(x => {
            return (
              <div key={x.pickFileId} style={{ height: "244px" }} className='w-44 mr-3 rounded-2xl overflow-hidden'>
                <div className='h-44'><img src={`https://tong-bucket.s3.ap-northeast-2.amazonaws.com/${x.fileName}`}/></div>
                <div className='h-16 flex flex-col justify-center p-3 bg-white'>
                  <div>#제목</div>
                  <div className='text-grey05' style={{fontSize: "13px"}}>#내용</div>
                </div>
              </div>
            )
          })}
        </div>
      </Scroll>
    </Container>
  )
}

export default index