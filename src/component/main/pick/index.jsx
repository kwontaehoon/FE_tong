import React from 'react'
import { Container,
  Ground_Pick,
Ground,
Pick,
Icon,
Icon_Box,
Home_Box,
Home,
Home_Name ,
House,
Scrollbar,
SpeechBubble,
SpeechBubble_Box, 
SpeechBubble_Center,
Interview,
MZ,
Club,
Weather} from './styles'

const index = () => {
  return (
    <Container>
      <Ground_Pick>
        <Ground>운통장</Ground>
        <Pick>PICK</Pick>
      </Ground_Pick>
      <Icon>
        <Icon_Box>
          <img src="svg/Home.svg"></img>
          <House>예약</House>
        </Icon_Box>
        <Icon_Box>
          <img src="svg/Home.svg"></img>
          <House>마이</House>
        </Icon_Box>
        <Home_Box>
          <Home>
            <House>
              <img src="svg/Home_black.svg"></img>
            </House>
          </Home>

          <Home_Name>홈</Home_Name>
        </Home_Box>

        <Icon_Box>
          <img src="svg/Home.svg"></img>
          <House>찜</House>
        </Icon_Box>

        <Icon_Box>
          <img src="svg/Home.svg"></img>
          <House>카테고리</House>

        </Icon_Box>
      </Icon>
      < Scrollbar>

      </Scrollbar>
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
          < Weather>

            #오늘의날씨!!
          </Weather>
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