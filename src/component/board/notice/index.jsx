import React, { useState } from 'react'
import {
  Container,
  Announcement_Box,
  Update_Box,
  Update,
  Update_in,
  Announcement,
  Days
} from './styles'

const index = () => {

  const [dummy, setDummy] = useState(Array(10).fill(false));

  return (
    <Container>
      {dummy.map((_, index) => {
        return (
          <Announcement_Box key={index}>
            <div className='flex items-center w-full'>
              <Update_in>
                <Update_Box>
                  <Update>[업데이트]</Update>
                  <Announcement>v5.13.0업데이트 안내</Announcement>
                </Update_Box>
                <Days>2024.02.23</Days>
              </Update_in>
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
          </Announcement_Box>
        )
      })}
    </Container>
  )
}

export default index