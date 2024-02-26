import React from 'react'
import {Container,
FAQ_Box,
FAQ,
Besides,
Reservation_Box,
Reservation,
Text} from './styles'

const index = () => {
  return (
    <Container>
        <FAQ_Box>
        <FAQ>자주찾는 FAQ</FAQ>
        <Besides>회원정보</Besides>
        <Besides>예약</Besides>
        <Besides>기타</Besides>
        </FAQ_Box>
        <Reservation_Box>
            <Reservation>
            [예약] 취소하고 싶어요.
            </Reservation>
            <img src="svg/false_arrow.svg"></img>
        </Reservation_Box>
        <Text>Text</Text>
    </Container>
  )
}

export default index