import React from 'react'
import {Container,
Reservation_Box,
Reservation,
Text,
Check_Box,
Check,
Check_inout ,
Check_in,
Days_Time,
Days

} from './styles'

const index = () => {
  return (
    <Container>
      <Reservation_Box>
        <Reservation>
          Lorem ipsum dolor sit amet
        </Reservation>
        <Text>
          Lorem ipsum dolor
        </Text>
        <Check_Box>
          <Check>
           <Check_inout>
            <Check_in>체크인</Check_in>
            <Days_Time>
              <Days>01.31목</Days>
              <img src="svg/Line_5.svg"></img>
              <Days>13:00</Days>
            </Days_Time>
           </Check_inout>
           <Check_inout>
            <Check_in>체크아웃</Check_in>
            <Days_Time>
              <Days>02.01목</Days>
              <img src="svg/Line_5.svg"></img>
              <Days>12:00</Days>
            </Days_Time>
           </Check_inout>
            </Check> 
        </Check_Box>
      </Reservation_Box>
    </Container>
  )
}

export default index