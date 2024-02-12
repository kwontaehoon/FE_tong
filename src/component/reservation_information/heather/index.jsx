import React from 'react'
import {Container,
Heather,
Reservation,
Reservation_Box 
} from './styles'

const index = () => {
  return (
    <Container>
      <Heather>
        <img src="svg/BackArrow.svg"></img>

        <Reservation>
          <Reservation_Box>
            예약
          </Reservation_Box>

        </Reservation>

      </Heather>
    </Container>
  )
}

export default index