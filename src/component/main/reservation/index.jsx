import React, { useEffect, useState } from 'react'
import {
  Container,
  Scroll
} from './styles'
import { useReservationListQuery } from '../../../hooks/queries/api/Main'
import { useNavigate } from 'react-router-dom'
import WeatherFuc from '../../weather'

const index = ({data}) => {

  const navigate = useNavigate();

  const [dataArr, setDataArr] = useState();

  useEffect(() => {
    if (data) {
      const arr = data.filter((_, index) => index !== 0 && index !== 1);
      setDataArr(arr);
    }
  }, []);

  return data.length !== 0 && (
    <Container>
      <div className='flex'>

        <div className='text-xl font-bold'>Best Ground</div>
        <div className='ml-1 text-xs flex justify-end flex-col'>추천 운동장</div>
      </div>
      <div className='flex mt-3' style={{marginBottom: "18px"}}>
        <img className='w-3/5 rounded-xl border-grey05 border-2' style={{height: "135px"}} src={`https://tong-bucket.s3.ap-northeast-2.amazonaws.com/${data[0].reservationFiles[0]?.fileName}`} />
        <div className='ml-3 flex flex-col justify-center font-bold' onClick={()=>navigate(`/reservation/${data[0].reservationId}`)}>
          <div className='flex'>
            <div>🥇</div>
            <div>{data[0].title}</div>
          </div>
          <div className='flex items-center'>
            <img src="/svg/Star.svg" style={{width: "14px", height: "14px", marginRight: "-2px"}} />
            <img src="/svg/Star.svg" style={{width: "14px", height: "14px", marginRight: "-2px"}} />
            <div className='ml-1'>{data[0].score}</div>
          </div>
          <WeatherFuc />
        </div>
      </div>
      <div className='flex mt-3' style={{marginBottom: "18px"}}>
        <img className='w-3/5 rounded-xl border-grey05 border-2' style={{height: "135px"}} src={`https://tong-bucket.s3.ap-northeast-2.amazonaws.com/${data[1].reservationFiles[0]?.fileName}`} />
        <div className='ml-3 flex flex-col justify-center font-bold' onClick={()=>navigate(`/reservation/${data[1].reservationId}`)}>
          <div className='flex'>
            <div>🥉</div>
            <div>{data[1].title}</div>
          </div>
          <div className='flex items-center'>
            <img src="/svg/Star.svg" style={{width: "14px", height: "14px", marginRight: "-2px"}} />
            <div className='ml-1'>{data[1].score}</div>
          </div>
          <WeatherFuc />
        </div>
      </div>
      <Scroll>
        {dataArr?.map(x=>{
          return(
            <div key={x.reservationId} className='flex shadow-custom mr-3 h-24 rounded-lg' style={{padding: "12px 18px"}}>
              <div className='w-16'>
                <img src={`https://tong-bucket.s3.ap-northeast-2.amazonaws.com/${x.reservationFiles[0]?.fileName}`} className='w-full h-full' />
              </div>
              <div className='font-bold ml-3 flex flex-col justify-center'>
                <div>{x.title}</div>
                <div className='flex items-center'>
                  <img src="/svg/Star.svg" style={{width: "14px", height: "14px", marginRight: "-2px"}}/>
                  <img src="/svg/Star.svg" style={{width: "14px", height: "14px", marginRight: "-2px"}}/>
                  <img src="/svg/Star.svg" style={{width: "14px", height: "14px", marginRight: "-2px"}}/>
                  <div className='ml-1'>{x.score}</div>
                </div>
              </div>
            </div>
          )
        })}
      </Scroll>

    </Container>
  )
}

export default index