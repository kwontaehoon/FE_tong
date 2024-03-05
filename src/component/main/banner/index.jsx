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
import 'swiper/css/effect-fade';

import { EffectFade, Pagination } from 'swiper/modules';

const index = () => {

  const { data, isSuccess } = useBannerListQuery();

  return isSuccess && (
    <Container>
      <Gimpo_Playground>
        <Swiper  pagination={{type: 'fraction'}} effect="fade" modules={[EffectFade, Pagination]}>
          {data.map((x, index)=>{
            return <SwiperSlide style={{height: "auto"}} key={index}><img src={`https://tong-bucket.s3.ap-northeast-2.amazonaws.com/${x.fileName}`} className='w-full h-full' /></SwiperSlide>
          })}
        </Swiper>
      </Gimpo_Playground>
    </Container>

  )
}

export default index