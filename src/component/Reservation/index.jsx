import React, { useEffect } from 'react'
import {
  Container,
  Jangi,
  Tong_Tong,
  Lorem,
  Lorem_Text,
} from './styles'
import { useReservationListQuery } from '../../hooks/queries/api/Reservation';
import Header from '../../function/header';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSearchResultListMutation } from '../../hooks/queries/api/Search';
import Navi from '../../function/navi'

const index = () => {

  const navigate = useNavigate();
  const state = useLocation().state;
  const { data: reservationList, isSuccess: reservationListSuccess } = useReservationListQuery();

  const { mutate: result, data: resultList, isSuccess: resultListSuccess } = useSearchResultListMutation();

  useEffect(()=>{
    if(state){
      result({title: state});
    }
    window.scrollTo({
      top: 0,
  });
  }, []);

  return reservationListSuccess && (
    <Container>

      <Header padding title="예약" />

      {(state && resultListSuccess ? resultList?.data : reservationList).map(x => {
        return (
          <div key={x.reservationId} className='bg-bg'>
            <Jangi>{x.location}</Jangi>
            <div className='p-5'>
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
          </div>
        )
      })}
    <Navi />
    </Container>
  )
}

export default index