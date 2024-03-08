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
import { useReservationListQuery } from '../../../hooks/queries/api/Main'
import { getToken } from '../../../utill/GetToken'
import moment from 'moment'
import { useReservationCancelStore } from '../../../store/ReservationCancel'
import { clockText } from '../../../constants/text/api/Reservation'
import { useReservationCancelMutation } from '../../../hooks/queries/api/Reservation'
import Spinner from '../../../function/spinner'

const index = () => {

    const navigate = useNavigate();

    const openReservationCancelModal = useReservationCancelStore((state) => state.setOpen);
    const funcReservationFunc = useReservationCancelStore((state) => state.setFunc);

    const [tab, setTab] = useState(Array(3).fill().map((_, index) => index === 0));

    const [dummy, setDummy] = useState(Array(5).fill(false));

    const { data, isSuccess: listSuccess, refetch } = useReservationListQuery();
    console.log("data: ", data);

    const [Ing, setIng] = useState([]);
    console.log("ING: ", Ing);

    const { mutateAsync: cancel, isLoading: cancelLoading } = useReservationCancelMutation();

    useEffect(() => {
        if (data) {
            let arr = [];
            data?.map(x => {
                if (moment(new Date()).diff(x.deadLine, 'hour') < 24 && x?.resrvationApplicants?.filter(x => x.userId == getToken().userId).length > 0) {
                    arr.push(x);
                }
            });
            setIng(arr.reduce((acc, cur) => acc.concat(cur), []));
        }
        refetch();
    }, [data]);

    return (
        <Container>
            <Header padding title="예약내역" arrowUrl={'/mypage'} />
            <TabBox>
                <div className='h-full flex mb-5'>
                    {myReservationTabText.map((x, index) => {
                        return (
                            <Tab key={x.id} $border={tab[index]}
                                onClick={() => {
                                    if (index == 1) {
                                        navigate("/myReservation_cancel");
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
                {!listSuccess || cancelLoading ? <Spinner /> : Ing.map((x, index) => {
                    return (
                        <Reservation_Box key={index}>
                            <div className='flex items-center'>
                                <Reservation>
                                    <img src="/svg/myReservation_ing.svg" className='w-4' />
                                    <div className='mx-six'>예약내역</div>
                                    <div className='text-xs'>(90일간 내역을 확인할 수 있습니다)</div>
                                </Reservation>
                                <div onClick={() => {
                                    let arr = [...dummy];
                                    arr[index] = !arr[index];
                                    setDummy(arr);
                                }}>
                                    {dummy[index] ? <img src="svg/false_arrow.svg" /> : <img src="/svg/Arrow_bottom.svg" />}
                                </div>
                            </div>
                            {dummy[index] && <div className='mt-5 rounded-lg bg-bg px-4 pt-5 text-xs text-grey10'>
                                {x.resrvationApplicants.map(y => {
                                    return (
                                        <div key={y.reservationApplicantsId} className='flex pb-5'>
                                            <div className='flex flex-col flex-1'>
                                                <div>{x.title}</div>
                                                <div className='flex'>
                                                    <div>{x.deadLine}</div>
                                                    <div className='mx-1'>|</div>
                                                    <div>{clockText[y.reservationClock].startClock}~{clockText[y.reservationClock].endClock}</div>
                                                    <div className='mx-1'>|</div>
                                                    <div>인원수: {x.peopleCount}명</div>
                                                </div>
                                            </div>
                                            <div className='bg-grey07 flex justify-center items-center px-2 py-1 rounded-lg'
                                                onClick={() => {
                                                    openReservationCancelModal(true);
                                                    funcReservationFunc(async()=>{
                                                        await cancel({ 
                                                            reservation: {
                                                                reservationId: x.reservationId
                                                            },
                                                            reservationApplicantsId: y.reservationApplicantsId
                                                    });
                                                        refetch();
                                                    });
                                                    }}>예약취소
                                            </div>
                                        </div>
                                    )
                                })}
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