import React from 'react'
import {
  Container,
  Gimpo_Playground
} from './styles'
import { useBannerListQuery } from '../../../hooks/queries/api/Main'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

const index = () => {

  const { data, isSuccess } = useBannerListQuery();
  console.log("bannerList: ", data);

  return isSuccess && (
    <Container>
      <Gimpo_Playground>
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
          {data.map((x, index)=>{
            return <SwiperSlide key={index}><img src={`https://tong-bucket.s3.ap-northeast-2.amazonaws.com/${x.fileName}`} className='w-full' /></SwiperSlide>
          })}
        </Swiper>
      </Gimpo_Playground>
    </Container>

  )
}

export default index