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

import { Pagination, Autoplay } from 'swiper/modules';

const index = () => {

  const { data, isSuccess } = useBannerListQuery();

  return isSuccess && (
    <Container>
      <Gimpo_Playground>
        <Swiper pagination={{type: 'fraction'}} slidesPerView={"auto"} loop={true} modules={[Autoplay, Pagination]} autoplay={{delay: 3000}}>
          {data.map((x, index)=>{
            return <SwiperSlide style={{height: "170px"}} key={index}><img src={`https://tong-bucket.s3.ap-northeast-2.amazonaws.com/${x.fileName}`} className='w-full h-full' /></SwiperSlide>
          })}
        </Swiper>
      </Gimpo_Playground>
    </Container>

  )
}

export default index