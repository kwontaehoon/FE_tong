import React, { useState, useEffect } from 'react'
import Banner from './banner'
import Contents from './contents'
import Weather_Box from './weather'
import Facilities from './facilities'
import Header from '../../function/header'
import { useReservationDetailsQuery } from '../../hooks/queries/api/Reservation'
import { useNavigate, useParams } from 'react-router-dom';
import { useWishMutation } from '../../hooks/queries/api/Wish'
import { getToken } from '../../utill/GetToken'
import { dayOfWeek } from '../../utill/DayOfWeek'
import moment from 'moment'
import { loginFlag } from '../../utill/LoginFlag'
import { useLoginStore } from '../../store/LoginFlag'

const index = () => {

  const navigate = useNavigate();

  const openLoginModal = useLoginStore((state) => state.setOpen);

  const { id } = useParams();

  const { data, isSuccess, refetch } = useReservationDetailsQuery({ id: id });

  const [selectBox, setSelectBox] = useState(false);

  const { mutateAsync: wish } = useWishMutation();

  const [info, setInfo] = useState({
    selectMonth: new Date().getMonth(),
    selectDate: moment().add(1, 'days').format("DD"),
    selectDay: dayOfWeek(new Date().getDay()+1),
    selectClock: '',
    year: new Date().getFullYear(),
    peopleCount: 0,
  });

  useEffect(() => {
    refetch();
  }, []);

  return isSuccess && (
    <div className='bg-bg'
      onClick={() => {
        if (selectBox) {
          setSelectBox(false);
        }
      }}>
      <Header
        padding title={"예약 상세"}
        wish={{ open: true, data: data.userIdsOfWishes.includes(getToken().id) }}
        func={async () => { await wish({ users: { userId: getToken().userId }, reservation: { reservationId: id } }); refetch(); }}
      />
      <Banner data={data} />
      <div className='p-5 pt-0'>
        <Contents data={data} />
        <Weather_Box selectBox={selectBox} setSelectBox={setSelectBox} info={info} setInfo={setInfo} data={data} />
        <Facilities />
        <div className={'py-5 px-2 flex items-center justify-center rounded-lg bg-grey07 text-grey05'
          + (Object.values(info).every(value => value !== "") && info.peopleCount !== 0 ? ' bg-m text-white' : '')}
          style={{ marginTop: "30px" }}
          onClick={() => {
            if (Object.values(info).every(value => value !== "") && info.peopleCount !== 0) {
              if(loginFlag()){
                navigate(`/reservation_information/${id}`, { state: info, data: data });
              }else openLoginModal(true);
            }
          }}>예약하기
        </div>
      </div>
    </div>
  )
}

export default index