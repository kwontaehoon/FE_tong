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

  const [info, setInfo] = useState([]);
  console.log("info: ", info);

  const { mutateAsync: wish } = useWishMutation();

  const [category, setCategory] = useState(Array.from({ length: 7 }, () => false).map((_, index) => index === 0));

  useEffect(() => {
    reservationRefetch();
  }, []);

  useEffect(() => {
    if (!category[0] && reservationList) {
      setInfo(reservationList.filter(x => x.location == locationText[category.findIndex(x => x)].location));
    } else setInfo(reservationList);
  }, [category, reservationList]);

  return (
    <Container>

      <Header padding title="예약" search arrowUrl={"/"} />

      <Scroll className='flex overflow-scroll whitespace-nowrap bg-white mb-5'>
        {locationText.map((x, index) => {
          return (
            <div key={x.id} className={'my-3 px-4 leading-6 py-six border-grey06.5 rounded-full mr-1 text-sm' + (category[index] ? ' bg-grey07 border' : '')}
              onClick={() => {
                let arr = Array(7).fill(false);
                arr[index] = true;
                setCategory(arr);
              }}>{x.location}
            </div>
          )
        })}
      </Scroll>

      {!reservationListSuccess ? <Spinner /> : info?.length === 0 ?
        <div className='mt-40 flex items-center flex-col'>
          <img src="/svg/listNull.svg" />
          <div className='mt-4 text-grey04'>예약 시설이 없습니다.</div>
        </div> : info?.map((x, index) => {
          return (
            <div key={x.reservationId} className='bg-bg mb-5'>
              <div className='px-5'>
                <div className='rounded-xl overflow-hidden' onClick={() => navigate(`${x.reservationId}`)}>
                  <Swiper pagination={true} modules={[Pagination]}>
                    <SwiperSlide style={{ height: "200px", position: "relative" }} key={index}>
                      <img src={`https://tong-bucket.s3.ap-northeast-2.amazonaws.com/${x.reservationFiles[0].fileName}`} className='w-full h-full' />
                    </SwiperSlide>
                  </Swiper>

                  <Tong_Tong>
                    <div className='flex items-center'>
                      <Lorem $category={index}>{x.title}</Lorem>
                      {index == 0 && <div className='flex flex-1'>
                        <div className='ml-2 border border-m text-xs rounded text-m' style={{ padding: "2px 4px" }}>역세권</div>
                        <div className='ml-1 border border-m text-m text-xs rounded' style={{ padding: "2px 4px" }}>시설 청결</div>
                      </div>}
                      {index == 1 && <div className='flex flex-1'>
                        <div className='ml-2 border border-point text-xs rounded text-point' style={{ padding: "2px 4px" }}>금주 예약 마감</div>
                        <div className='ml-1 border border-m text-m text-xs rounded' style={{ padding: "2px 4px" }}>0 ~ 5명</div>
                      </div>}
                      {loginFlag() && <div
                        onClick={async (e) => {
                          e.stopPropagation();
                          await wish({
                            users: { userId: getToken().userId },
                            reservation: { reservationId: x.reservationId }
                          });
                          reservationRefetch();
                        }}>
                        {loginFlag() && x?.userIdsOfWishes?.includes(getToken().id) ?
                          <img src="/svg/heart_red.svg" className='w-4' /> : <img src="/svg/heart_2.svg" className='w-4' />}
                      </div>}
                    </div>
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