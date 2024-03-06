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

const index = () => {

    const navigate = useNavigate();

    const [tab, setTab] = useState(Array(3).fill().map((_, index) => index === 0));

    const [dummy, setDummy] = useState(Array(5).fill(false));

    const { data, isSuccess } = useReservationListQuery();
    console.log("data: ", data);

    const [Ing, setIng] = useState([]);
    console.log("Ing: ", Ing);

    useEffect(() => {
        if (data) {
            let arr = [];
            data?.map(x => {
                if(moment(new Date()).diff(x.deadLine, 'hour') < 0){
                    arr.push(x.resrvationApplicants?.filter(y => y.userId == getToken().userId));
                }
            });
            setIng(arr.reduce((acc, cur) => acc.concat(cur), []));
        }
    }, [isSuccess]);

    return isSuccess && (
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
                {Ing.map((_, index) => {
                    return (
                        <Reservation_Box key={index}>
                            <div className='flex items-center'>
                                <Reservation>
                                    <img src="/svg/checkBox.svg" />
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
                            {dummy[index] && <div className='mt-5 rounded-lg flex bg-bg px-4 py-5 text-xs text-grey10'>
                                <div className='flex flex-col flex-1'>
                                    <div>장기동 장기 통통 축구장</div>
                                    <div>2024.04.20 | 12:30~14:30 | 인원수: 11명</div>
                                </div>
                                <div className='bg-grey07 flex justify-center items-center px-2 py-1 rounded-lg'>예약취소</div>
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