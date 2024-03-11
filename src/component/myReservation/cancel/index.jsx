import React, { useState, useEffect } from 'react'
import {
    Container,
    TabBox,
    Tab,
    Reservation_Box,
    Reservation,
    ListBox
} from './styles'
import Navi from '../../../function/navi'
import { myReservationTabText } from '../../../constants/text/api/Board'
import Header from '../../../function/header'
import { useNavigate } from 'react-router-dom'
import { getToken } from '../../../utill/GetToken'
import moment from 'moment'
import { useReservationCancelListQuery } from '../../../hooks/queries/api/Reservation'
import Spinner from '../../../function/spinner'
import { clockText } from '../../../constants/text/api/Reservation'

const index = () => {

    const navigate = useNavigate();

    const [tab, setTab] = useState(Array(3).fill().map((_, index) => index === 1));

    const [dummy, setDummy] = useState(Array(5).fill(false));

    const { data, isSuccess, refetch } = useReservationCancelListQuery();

    useEffect(() => {
        refetch();
    }, [data]);

    return (
        <Container>
            <Header padding title="취소내역" arrowUrl={'/mypage'} />
            <TabBox>
                <div className='h-full flex mb-5'>
                    {myReservationTabText.map((x, index) => {
                        return (
                            <Tab key={x.id} $border={tab[index]}
                                onClick={() => {
                                    if (index == 0) {
                                        navigate("/myReservation_ing");
                                    } else if (index == 2) {
                                        navigate("/myReservation_finish");
                                    }
                                }}>{x.content}
                            </Tab>
                        )
                    })}
                </div>
            </TabBox>
            <ListBox>
                {!isSuccess ? <Spinner /> : data.map((x, index) => {
                    if(x.userId !== getToken().userId){
                        return 
                    }
                    else
                    return (
                        <Reservation_Box key={index}>
                            <div className='flex items-center'>
                                <Reservation>
                                    <img src="/svg/myReservation_delete.svg" className='w-3' />
                                    <div className='mx-six'>취소내역</div>
                                    <div className='text-xs'>(90일간 내역을 확인할 수 있습니다)</div>
                                </Reservation>
                                <div onClick={() => {
                                    let arr = [...dummy];
                                    arr[index] = !arr[index];
                                    setDummy(arr);
                                }}>
                                    {dummy[index] ? <img src="svg/false_arrow.svg" className='w-3' /> : <img src="/svg/Arrow_bottom.svg" className='w-3' />}
                                </div>
                            </div>
                            {dummy[index] && <div className='mt-5 rounded-lg bg-bg px-4 pt-5 text-xs text-grey10'>
                                <div key={x.reservationCancelId} className='pb-5'>
                                    <div>{x.reservation.title}</div>
                                    <div className='flex'>
                                        <div>{moment(x.reservationDate).format("YYYY-MM-DD")}</div>
                                        <div className='mx-1'>|</div>
                                        <div>{clockText[x.reservationClock].startClock}~{clockText[x.reservationClock].endClock}</div>
                                        <div className='mx-1'>|</div>
                                        <div>인원수: {x.peopleCount}명</div>
                                    </div>
                                </div>

                            </div>}
                        </Reservation_Box>
                    )
                })}
            </ListBox>
            <div className='h-24' />
            <Navi />
        </Container>
    )
}

export default index