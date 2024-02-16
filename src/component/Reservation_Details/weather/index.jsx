import React from 'react'
import {Container,
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
  Number
} from './styles'

const index = () => {
  return (
    <Container>
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
          <Time>
            <Text>14:00~16:00</Text>
          </Time>
        </Time_Box>
      </Time_Container >

      <Personnel_Box>
        <Personnel>인원선택</Personnel>
        <Max_Box>
          <Max>(최대 5명)</Max>
        </Max_Box>
        <img src="svg/Minus.svg"></img>
        <Number>0명 </Number>
        <img src="svg/Plus.svg"></img>
      </Personnel_Box>
    </Container>
  )
}

export default index