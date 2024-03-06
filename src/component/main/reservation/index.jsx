import React, { useEffect, useState } from 'react'
import {
  Container,
  Scroll
} from './styles'
import { useReservationListQuery } from '../../../hooks/queries/api/Main'
import { useNavigate } from 'react-router-dom'
import WeatherFuc from '../../weather'
import { star } from '../../../function/star'

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
        <div className='ml-3 flex flex-col justify-center' onClick={()=>navigate(`/reservation/${data[0].reservationId}`)}>
          <div className='flex mb-six font-bold'>
            <div>🥇</div>
            <div>{data[0].title}</div>
          </div>
          <div className='flex items-center mb-six font-bold'>
            {star(data[0].score)}
            <div className='ml-1'>{data[0].score}</div>
          </div>
          <WeatherFuc />
        </div>
      </div>
      <div className='flex mt-3' style={{marginBottom: "18px"}}>
        <img className='w-3/5 rounded-xl border-grey05 border-2' style={{height: "135px"}} src={`https://tong-bucket.s3.ap-northeast-2.amazonaws.com/${data[1]?.reservationFiles[0]?.fileName}`} />
        <div className='ml-3 flex flex-col justify-center' onClick={()=>navigate(`/reservation/${data[1].reservationId}`)}>
          <div className='flex font-bold'>
            <div>🥉</div>
            <div>{data[1]?.title}</div>
          </div>
          <div className='flex items-center font-bold'>
            {star(data[1]?.score)}
            <div className='ml-1'>{data[1]?.score}</div>
          </div>
          <WeatherFuc />
        </div>
      </div>
      <Scroll>
        <div className='flex'>
        {dataArr?.map(x=>{
          return(
            <div key={x.reservationId} className='flex shadow-custom mr-3 ml-1 h-24 rounded-lg' style={{padding: "12px 18px", width: "207px"}}>
                <img src={`https://tong-bucket.s3.ap-northeast-2.amazonaws.com/${x.reservationFiles[0]?.fileName}`} className='w-16 h-16' />
              <div className='font-bold ml-3 flex-1 flex flex-col justify-center'>
                <div>{x.title}</div>
                <div className='flex items-center'>
                  {star(x.score)}
                  <div className='ml-1'>{x.score}</div>
                </div>
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