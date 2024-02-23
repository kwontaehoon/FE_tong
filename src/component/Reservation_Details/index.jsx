import React from 'react'
import Banner from './banner'
import Contents from './contents'
import Weather_Box from './weather'
import Facilities from './facilities'
import Header from '../../function/header'
import { useReservationDetailsQuery } from '../../hooks/queries/api/Reservation'
import { useParams } from 'react-router-dom';

const index = () => {

  const { id } = useParams();
  console.log("id: ", id);

  const { data, isSuccess } = useReservationDetailsQuery({ id: id });
  console.log("예약 상세: ", data);

  return isSuccess && (
    <div className='bg-bg'>
      <Header padding title={"TITLE"} />
      <Banner data={data} />
      <div className='p-5 pt-0'>
        <Contents data={data} />
        <Weather_Box data={data} />
        <Facilities />
        <div className='mt-12 py-5 px-2 flex items-center justify-center rounded-lg bg-grey07 text-grey05'>예약하기</div>
      </div>
    </div>
  )
}

export default index