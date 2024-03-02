import React from 'react'
import {
  Container,
  Reservation,
  Gimpo,
  Check_Box,
  Check_inout,
  Handwriting,
  Day_Box,
  Day
} from './styles'
import { numberTwo } from '../../../utill/NumberTwo'
import { clockText } from '../../../constants/text/api/Reservation'

const index = ({ info, data }) => {
  return (
    <Container>
      <div className='py-5'>
        <Reservation>{data.title}</Reservation>
        <Gimpo>{data.location}</Gimpo>
        <Check_Box>
          <Check_inout>
            <Day_Box>
              <Day>{numberTwo(info.selectMonth)}.{numberTwo(info.selectDate)} {info.selectDay}</Day>
                <div className='border h-3' style={{ margin: '0px 6px', color: "#CDCDCD" }}></div>
              <Day>{clockText[info.selectClock]?.startClock}</Day>
            </Day_Box>

          </Check_inout>

          <Check_inout>
            <Day_Box>
              <Day>{numberTwo(info.selectMonth)}.{numberTwo(info.selectDate)} {info.selectDay}</Day>
                <div className='border h-3' style={{ margin: '0px 6px', color: "#CDCDCD" }}></div>
                <Day>{clockText[info.selectClock]?.endClock}</Day>
            </Day_Box>
          </Check_inout>
        </Check_Box>
      </div>
    </Container>
  )
}

export default index