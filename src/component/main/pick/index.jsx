import React from 'react'
import { Container,
  Ground_Pick,
  Ground,
  Pick,
  Pick_Gimpo,
  Gimpo,
  Restaurant_Box,
  SpeechBubble_Box,
  SpeechBubble_Center,
  Interview,
  MZ,
  Club,
  
} from './styles'

const index = () => {
  return (
    <Container>
      
      <Ground_Pick>
        <Ground>운통장</Ground>
        <Pick>MANU</Pick>
      </Ground_Pick>
        < Pick_Gimpo>
          <Gimpo>
            #김포 핫플은 요즘 여기!!
          </Gimpo>
        </Pick_Gimpo>
        <Restaurant_Box>
          #운통장 추천 맛집!!
        </Restaurant_Box>
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
       
    </Container>
  )
}

export default index