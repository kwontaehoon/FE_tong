import React from 'react'
import {
  Container,
  Jangi,
  IMG,
  Tong_Tong,
  Lorem,
  Lorem_Text,
} from './styles'
import { useReservationListQuery } from '../../hooks/queries/api/Reservation';
import Header from '../../layout/Header';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

const index = () => {

  const { data, isSuccess } = useReservationListQuery();
  console.log("data: ", data);

  return isSuccess && (
    <Container>

      <Header padding />

      {data.map(x => {
        return (
          <div key={x.reservationId} className='bg-bg p-5'>
            <Jangi>{x.location}</Jangi>
            <Swiper pagination={true} modules={[Pagination]}>
              {x.reservationFiles.map((x, index) => {
                return <SwiperSlide style={{ height: "230px" }} key={index}><img src={`https://tong-bucket.s3.ap-northeast-2.amazonaws.com/${x.fileName}`} className='w-full h-full' /></SwiperSlide>
              })}
            </Swiper>
            <Tong_Tong>
                <Lorem>{x.title}</Lorem>
                <Lorem_Text>{x.subTitle}</Lorem_Text>
            </Tong_Tong>
          </div>
        )
      })}

    </Container>
  )
}

export default index