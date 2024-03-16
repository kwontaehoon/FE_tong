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
      const arr = data.filter((_, index) => index !== 0 && index !== 1).slice(0, 3);
      setDataArr(arr);
    }
  }, []);

  return data.length !== 0 && (
    <Container>
      <div className='flex items-center'>
        <div className='text-xl font-bold'>Best Ground</div>
        <div className='ml-1 mt-2 text-xs flex-col text-grey04'>추천 운동장</div>
      </div>
      <div className='flex mt-3' style={{marginBottom: "18px"}} onClick={()=>navigate(`/reservation/${data[0].reservationId}`)}>
        <img className='w-3/5 rounded-xl' style={{height: "135px"}} src={`https://tong-bucket.s3.ap-northeast-2.amazonaws.com/${data[0].reservationFiles[0]?.fileName}`} />
        <div className='ml-3 flex flex-col justify-center'>
          <div className='flex mb-six font-bold'>
            <div>🥇</div>
            <div>{data[0].title}</div>
          </div>
          <div className='flex items-center mb-six font-bold'>
            {star(data[0].score)}
            <div className='ml-1'>{data[0].score}</div>
          </div>
          <WeatherFuc data={data[0]}/>
          <div className='text-xs mt-six'>
            <span className='bg-grey07 rounded' style={{padding: "2px 4px"}}>금주 예약 가능</span>
          </div>
        </div>
      </div>
      <div className='flex mt-3' style={{marginBottom: "18px"}} onClick={()=>navigate(`/reservation/${data[1].reservationId}`)}>
        <img className='w-3/5 rounded-xl' style={{height: "135px"}} src={`https://tong-bucket.s3.ap-northeast-2.amazonaws.com/${data[1]?.reservationFiles[0]?.fileName}`} />
        <div className='ml-3 flex flex-col justify-center'>
          <div className='flex font-bold'>
            <div>🥈</div>
            <div>{data[1]?.title}</div>
          </div>
          <div className='flex items-center font-bold'>
            {star(data[1]?.score)}
            <div className='ml-1'>{data[1]?.score}</div>
          </div>
          <WeatherFuc data={data[1]}/>
          <div className='text-xs mt-six'>
            <span className='bg-grey07 rounded' style={{padding: "2px 4px"}}>5명~10명</span>
          </div>
        </div>
      </div>
      <Scroll>
        <div className='flex'>
        {dataArr?.map((x, index)=>{
          return(
            <div key={x.reservationId} className='flex shadow-custom mr-3 ml-1 h-24 rounded-lg'
              style={{padding: "12px 18px", width: "207px"}}
              onClick={()=>navigate(`/reservation/${x.reservationId}`)}>
                <img src={`https://tong-bucket.s3.ap-northeast-2.amazonaws.com/${x.reservationFiles[0]?.fileName}`} className='w-16 h-16 rounded-lg' />
              <div className='font-bold ml-3 flex-1 flex flex-col justify-center'>
                <div>{index == 0 ? '🥉' : ''}{x.title}</div>
                <div className='flex items-center'>
                  {star(x.score, "14px")}
                  <div className='ml-1 text-sm'>{x.score}</div>
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