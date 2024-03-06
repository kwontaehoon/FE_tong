import React from 'react'
import {
    Container,
    Lorem,
    Lorem_Text,
    Information_Box,
    Reservation_information,
    Details,
    Check,
    Besides,
} from './styles'
import Header from '../../function/header'
import Navi from '../../function/navi'
import { useLocation, useParams } from 'react-router'
import { useReservationDetailsQuery } from '../../hooks/queries/api/Reservation'

const index = () => {

    const { id } = useParams();
    const prevState = useLocation().state;

    const { data, isSuccess } = useReservationDetailsQuery({ id: id });

    return isSuccess && (
        <Container>
                <Header title="예약내역" noArrow closeUrl={'/'} />
                <Lorem>{data.title}</Lorem>
                <Lorem_Text>{data.location}</Lorem_Text>
            <Information_Box>
                <Details>
                    <Reservation_information>예약정보</Reservation_information>
                </Details>
                <Details>
                    <Check>예약번호</Check>
                    <Besides>133442509-DSGGG</Besides>
                </Details>

                <Details>
                    <Check>예약자이름</Check>
                    <Besides>{prevState.name}</Besides>
                </Details>
                <Details>
                    <Check>안심번호</Check>
                    <Besides>{prevState.phoneNumber}</Besides>
                </Details>
            </Information_Box>
            <Navi />
        </Container>
    )
}

export default index