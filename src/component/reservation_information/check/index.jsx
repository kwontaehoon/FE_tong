import React from 'react'
import {Container,
Reservation_Box,
Reservation,
Gimpo,
Check_Box,
Check_inout,
Handwriting,
Day_Box,
Day


} from './styles'

const index = () => {
  return (
    <Container>
      <Reservation_Box>
        <Reservation>
          장기 통통 운동장
        </Reservation>
        <Gimpo>
          경기도 김포시 김포한강3로 385 김포통통축구장
        </Gimpo>
        <Check_Box>
          <Check_inout>
            <Handwriting>체크인</Handwriting>
            <Day_Box>
              <Day>01.31목</Day>
              <img style={{ width: "1px", height: "13px" }} src="svg/Line_5.svg"></img>
              <Day>13:00</Day>
            </Day_Box>

          </Check_inout>

          <Check_inout>
            <Handwriting>체크아웃</Handwriting>
            <Day_Box>
              <Day>02.01목</Day>
              <img style={{ width: "1px", height: "13px" }} src="svg/Line_5.svg"></img>
              <Day>12:00</Day>
            </Day_Box>
          </Check_inout>
        </Check_Box>

      </Reservation_Box>
    </Container>
  )
}

export default index