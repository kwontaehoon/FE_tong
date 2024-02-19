import React from 'react'
import {Container,
  Weather_Box,
  Weather,
  Temperature,
  Time_Container ,
  Time_Choice,
  Time_Box,
  Time_Text,
  Time,
  Text,
  Personnel_Box,
  Personnel,
  Max,
  Max_Box,
  Number,
  Lorem
} from './styles'

const index = () => {
  return (
    <Container>
      <Weather_Box>
        <Weather>
        <img style={{width:"36px"}}src="svg/Sun.svg"></img>
        <Temperature>
          23° 
        </Temperature>
        <Lorem>Lorem</Lorem>
        </Weather>
      </Weather_Box>
      <Time_Container >
        <Time_Choice>
          시간을 선택하세요
        </Time_Choice>
        <Time_Box>
          <Time_Text>
            <Text>
              06:~08:00
            </Text>
          </Time_Text>
          <Time>
            <Text>08:00~10:00</Text>
          </Time>
          <Time>
            <Text>10:00~12:00</Text>
          </Time>
          <Time>
            <Text>
              12:00~14:00
            </Text>
          </Time>
        </Time_Box>
      </Time_Container >

      <Personnel_Box>
        <Personnel>인원선택</Personnel>
        <Max_Box>
          <Max>(최대 5명)</Max>
        </Max_Box>
        <img style={{width:"42px",height:"42px"}}src="svg/Minus.svg"></img>
        <Number>0명 </Number>
        <img style={{width:"42px", height:"42px",marginRight:"10px"}}src="svg/Plus.svg"></img>
      </Personnel_Box>
    </Container>
  )
}

export default index