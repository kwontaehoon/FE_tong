import React from 'react'
import {
  Component, Top, Logo, Search,
  Center, Center_Box, BoardBox, CountBox,
  Reservation,
  Reservation_A
} from './styles'

const index = () => {
  return (
    <Component>
      <Top>
        <Logo>Logo</Logo>
        <Search></Search>
        <img src="/svg/Vector_2.svg" />

      </Top>
      <Center>
        <Center_Box>
          <BoardBox>jj</BoardBox>
          <CountBox>12</CountBox>
        </Center_Box>

        <Center_Box>
          <BoardBox></BoardBox>
          <CountBox>12</CountBox>
        </Center_Box>

        <Center_Box>
          <CountBox>12</CountBox>
        </Center_Box>

      </Center>
      <Reservation>나의 예약 기록</Reservation>
      <Reservation_A></Reservation_A>

    </Component>
  )
}

export default index