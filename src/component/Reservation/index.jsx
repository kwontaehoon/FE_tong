import React, { useState, useEffect } from 'react'
import {
  Container,
  Scroll,
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
import { useNavigate } from 'react-router-dom';
import Navi from '../../function/navi'
import { loginFlag } from '../../utill/LoginFlag';
import { getToken } from '../../utill/GetToken';
import { useWishMutation } from '../../hooks/queries/api/Wish';
import { locationText } from '../../constants/text/api/Reservation';
import Spinner from '../../function/spinner'

const index = () => {

  const navigate = useNavigate();

  const { data: reservationList, isSuccess: reservationListSuccess, refetch: reservationRefetch } = useReservationListQuery();

  const [info, setInfo] = useState();

  const { mutateAsync: wish } = useWishMutation();

  const [category, setCategory] = useState(Array.from({length: 7}, () => false).map((_, index) => index === 0));

  useEffect(()=>{
    reservationRefetch();
  }, []);

  useEffect(()=>{
    if(!category[0] && reservationList){
      setInfo(reservationList.filter(x=>x.location == locationText[category.findIndex(x => x)].location));
    }else setInfo(reservationList);
  }, [category, reservationListSuccess]);

  return (
    <Container>

      <Header padding title="예약" search />

      <Scroll className='flex overflow-scroll whitespace-nowrap bg-white mb-5'>
        {locationText.map((x, index) => {
          return (
            <div key={x.id} className={'my-5 px-3 py-2 border rounded-full mr-2 text-sm' + (category[index] ? ' bg-m text-white' : '')}
              onClick={()=>{
                let arr = Array(7).fill(false);
                arr[index] = true;
                setCategory(arr);
              }}>{x.location}
            </div>
          )
        })}
      </Scroll>

      {!reservationListSuccess ? <Spinner /> : info?.map((x, index) => {
        return (
          <div key={x.reservationId} className='bg-bg mb-5'>
            <div className='px-5'>
              <div className='rounded-lg overflow-hidden'>
                <Swiper pagination={true} modules={[Pagination]}>
                  <SwiperSlide style={{ height: "230px", position: "relative" }} key={index}>
                    {loginFlag() && <div className='absolute top-6 right-6'
                      onClick={async () => {
                        await wish({
                          users: { userId: getToken().userId },
                          reservation: { reservationId: x.reservationId }
                        });
                        reservationRefetch();
                      }}>
                      {loginFlag() && x?.userIdsOfWishes?.includes(getToken().id) ?
                        <img src="/svg/heart_red.svg" /> : <img src="/svg/heart_2.svg" />}
                    </div>}
                    <img src={`https://tong-bucket.s3.ap-northeast-2.amazonaws.com/${x.reservationFiles[0].fileName}`} className='w-full h-full' />
                  </SwiperSlide>
                </Swiper>

                <Tong_Tong onClick={() => navigate(`${x.reservationId}`)}>
                  <Lorem>{x.title}</Lorem>
                  <Lorem_Text>{x.subTitle}</Lorem_Text>
                </Tong_Tong>
              </div>
            </div>
          </div>
        )
      })}
      <Navi />
    </Container>
  )
}

export default index