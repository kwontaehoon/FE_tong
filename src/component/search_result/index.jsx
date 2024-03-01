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
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { useSearchResultListMutation } from '../../hooks/queries/api/Search';
import Navi from '../../function/navi'
import { loginFlag } from '../../utill/LoginFlag';
import { getToken } from '../../utill/GetToken';
import { useWishMutation } from '../../hooks/queries/api/Wish';

const index = () => {

    const { id } = useParams();
    console.log("id: ", id);

    const navigate = useNavigate();

    const { mutate: result, data: resultList, isSuccess: resultListSuccess } = useSearchResultListMutation();

    const { mutateAsync: wish } = useWishMutation();

    useEffect(() => {
        if (id) {
            result({ title: id });
        }
    }, []);

    return resultListSuccess && (
        <Container>

            <Header padding title="검색" />

            {resultList?.data.map((x, index) => {
                return (
                    <div key={x.reservationId} className='bg-bg'>
                        <Jangi>{x.location}</Jangi>
                        <div className='p-5'>
                            <div className='rounded-lg overflow-hidden'>
                                <Swiper pagination={true} modules={[Pagination]}>
                                    <SwiperSlide style={{ height: "230px", position: "relative" }} key={index}>
                                        {loginFlag() && <div className='absolute top-6 right-6'
                                            onClick={async () => {
                                                await wish({
                                                    users: { userId: getToken().userId },
                                                    reservation: { reservationId: x.reservationId }
                                                });
                                                result({ title: id });
                                            }}>
                                            {loginFlag() && x?.userIdsOfWishes?.includes(getToken().id) ?
                                                <img src="/svg/heart_red.svg" /> : <img src="/svg/heart_2.svg" />}
                                        </div>}
                                        <img src={`https://tong-bucket.s3.ap-northeast-2.amazonaws.com/${x.reservationFiles[0].fileName}`} className='w-full h-full' />
                                    </SwiperSlide>
                                </Swiper>

                                <Tong_Tong onClick={() => navigate(`/reservation/${x.reservationId}`)}>
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