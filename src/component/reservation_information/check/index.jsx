import React from 'react'
import {Container,
Reservation_Box,
Reservation,
Text,
Check_Box
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
        <Check_Box></Check_Box>
      </Reservation_Box>
    </Container>
  )
}

export default index