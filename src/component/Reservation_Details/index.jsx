import React from 'react'
import {Container,
    Heather,
Banner,
Details,
Weather,
Besides_that,
Check_Box,
Check} from './styles'

const index = () => {
  return (
    <Container>
        <Heather></Heather>
        <Banner></Banner>
        <Details></Details>
        <Weather></Weather>
        <Besides_that></Besides_that>
        <Check_Box>
            <Check>예약하기</Check>
        </Check_Box>
    </Container>
  )
}

export default index