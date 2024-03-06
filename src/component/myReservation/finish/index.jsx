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
import Header from '../../../function/header';
import { myReservationTabText } from '../../../constants/text/api/Board';
import { useNavigate } from 'react-router-dom';
import { useReservationListQuery } from '../../../hooks/queries/api/Reservation';
import moment from 'moment';
import { getToken } from '../../../utill/GetToken';

const index = () => {

    const navigate = useNavigate();

    const [tab, setTab] = useState(Array(3).fill().map((_, index)=>index === 2));

    const [dummy, setDummy] = useState(Array(5).fill(false));

    const { data, isSuccess } = useReservationListQuery();
    console.log("data: ", data);

    const [Ing, setIng] = useState([]);
    console.log("Ing: ", Ing);

    useEffect(() => {
        if (data) {
            let arr = [];
            data?.map(x => {
                if(moment(new Date()).diff(x.deadLine, 'hour') >= 0){
                    arr.push(x.resrvationApplicants?.filter(y => y.userId == getToken().userId));
                }
            });
            setIng(arr.reduce((acc, cur) => acc.concat(cur), []));
        }
    }, [isSuccess]);

    return isSuccess && (
        <Container>
            <Header padding title="완료내역" arrowUrl={'/mypage'} />
            <TabBox>
                <div className='h-full flex mb-5'>
                    {myReservationTabText.map((x, index) => {
                        return (
                            <Tab key={x.id} $border={tab[index]}
                                onClick={() => {
                                    if(index == 0){
                                        navigate("/myReservation_ing");
                                    }else if(index == 1){
                                        navigate("/myReservation_cancel");
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
                                <div className='mx-six'>완료내역</div>
                                <div className='text-xs'>(90일간 내역을 확인할 수 있습니다.)</div>
                            </Reservation>
                            <div onClick={() => {
                                let arr = [...dummy];
                                arr[index] = !arr[index];
                                setDummy(arr);
                            }}>
                                {dummy[index] ? <img src="svg/false_arrow.svg" /> : <img src="/svg/Arrow_bottom.svg" />}
                            </div>
                        </div>
                        {dummy[index] && <div className='mt-5 rounded-lg bg-bg px-4 py-5 text-xs text-grey10'>
                            <div>123123</div>
                            <div>321</div>
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