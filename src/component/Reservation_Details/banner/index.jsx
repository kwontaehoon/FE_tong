import React from 'react'
import {
  Container,
} from './styles'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const index = ({ data }) => {

  return (
    <Container>
      <Swiper pagination={true} modules={[Pagination]}>
        {data.reservationFiles.map(x => {
          return (
            <SwiperSlide key={x.reservationFileId}>
              <img src={`https://tong-bucket.s3.ap-northeast-2.amazonaws.com/${x.fileName}`} style={{height: "250px"}} className='w-full rounded-lg overflow-hidden'/>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </Container>
  )
}

export default index