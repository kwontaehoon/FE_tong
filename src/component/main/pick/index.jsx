import React from 'react'
import { Container,
  Ground_Pick,
Ground,
Pick,
SpeechBubble,
SpeechBubble_Box, 
SpeechBubble_Center,
Interview,
MZ,
Club,
} from './styles'
import { usePickListQuery } from '../../../hooks/queries/api/Main'

const index = () => {

  // const { data } = usePickListQuery();
  // console.log("data: ", data);

  return (
    <Container>
      <Ground_Pick>
        <Ground>운통장</Ground>
        <Pick>PICK</Pick>
      </Ground_Pick>
      
      <SpeechBubble>
        <SpeechBubble_Box>
          <MZ>
            #김포5일장 MZ세대 취향저경!!
          </MZ>
        </SpeechBubble_Box>

        <SpeechBubble_Center>
          <Club>

            #동호회축구대회!!
          </Club>
         <Club>#오늘의날씨</Club>
        </SpeechBubble_Center>
        <SpeechBubble_Box>
          <Interview>
            #사우동유투버**인터뷰!!
          </Interview>
        </SpeechBubble_Box>

      </SpeechBubble>
    </Container>
  )
}

export default index