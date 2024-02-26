import React, { useState, useEffect } from 'react'
import Check from './check'
import Reservation from './reservation' 
import Header from '../../function/header'
import { Container } from './styles'
import Navi from '../../function/navi'
import { useLocation, useNavigate, useParams } from 'react-router'
import { useReservationDetailsQuery, useReservationMutation } from '../../hooks/queries/api/Reservation'
import { numberTwo } from '../../utill/NumberTwo'

const index = () => {

  const navigate = useNavigate();

  const prevState = useLocation().state;

  const { id } = useParams();

  const [info, setInfo] = useState({
    name: '',
    phoneNumber: ''
  });
  console.log("info: ", info);

  const { data, isSuccess } = useReservationDetailsQuery({ id: id });

  const { mutateAsync: reservation } = useReservationMutation();

  useEffect(()=>{
    window.scrollTo({
      top: 0,
  });

  setInfo({ ...prevState, ...info });
  }, []);

  return isSuccess && (
    <Container>
        <Header title={"예약하기"} padding/>
        <div className='p-5'>
          <Check info={info} data={data} />
          <Reservation info={info} setInfo={setInfo}/>
          <div className='px-4 py-5 mt-5 bg-white rounded-lg' style={{marginBottom: '30px'}}>
            <div className='mb-5'>유의사항</div>
            <div>내용</div>
          </div>
          <div className={'py-5 px-2 flex items-center justify-center rounded-lg bg-grey07 text-grey05' 
            + (Object.values(info).every(value => value !== "") ? ' bg-m text-white' : '')}
            onClick={async()=>{
              if(Object.values(info).every(value => value !== "")){

                await reservation({
                  reservationName: info.name,
                  reservationPhoneNumber: info.phoneNumber,
                  reservationDate: `${info.year}-${numberTwo(info.selectMonth)}-${numberTwo(info.selectDate)}`,
                  reservationClock: info.selectClock,
                  reservation: {
                    reservationId: id
                  },
                  peopleCount: info.peopleCount
                });
                navigate(`/breakdown/${id}`, { state: info });
              }
            }}>예약하기
          </div>
        </div>
        <Navi />
    </Container>
  )
}

export default index