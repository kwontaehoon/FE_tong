import React, { useState } from 'react'
import {
  Container,
  FAQ_Box,
  Besides,
  Reservation_Box,
  Reservation,
} from './styles'

const index = () => {

  const [dummy, setDummy] = useState(Array(8).fill(false));

  return (
    <Container>
      <FAQ_Box>
        <Besides>자주찾는 FAQ</Besides>
        <Besides>회원정보</Besides>
        <Besides>예약</Besides>
        <Besides>기타</Besides>
      </FAQ_Box>
      {dummy.map((_, index) => {
        return (
          <Reservation_Box key={index}>
            <div className='flex items-center'>
              <Reservation>[예약] 취소하고 싶어요.</Reservation>
              <div onClick={() => {
                let arr = [...dummy];
                arr[index] = !arr[index];
                setDummy(arr);
              }}>
                {dummy[index] ? <img src="svg/false_arrow.svg" /> : <img src="/svg/Arrow_bottom.svg" />}
              </div>
            </div>
            {dummy[index] && <div className='mt-5 rounded-lg bg-bg px-4 py-5'>
              <div>123123</div>
              <div>321</div>
            </div>}
          </Reservation_Box>
        )
      })}
    </Container>
  )
}

export default index