import React from 'react'
import {
  Container,
  Information_Container,
  Information_Box,
  Information,
  Input,
  Input_Box,
  Button_Box,
  Button,
  Img,
  Name,
  Home_Box,
  Home,
  Home_Name,

} from './styles'

const index = () => {
  return (
    <Container>
      <Information_Container>
        <Information_Box>
          예약자 정보
        </Information_Box>
        <Information>
          예약자이름
        </Information>
        <Input_Box>
        <Input placeholder='이름을 입력하세요'></Input>
        </Input_Box>
        <Information>휴대폰번호</Information>
        <Input_Box>
        <Input placeholder='번호를 입력하세요'></Input>
        </Input_Box>
      </Information_Container>


      <Button_Box>
        <Img>
          <Button>
            <img src="svg/Calendar.svg"></img>
          </Button>
          <Name>예약</Name>
        </Img>
        <Img>
          <Button>
            <img style={{ marginTop: "3px" }} src="svg/Smile.svg"></img>
          </Button>
          <Name>MY</Name>
        </Img>
        <Home_Box>
          <Home>
            <img style={{ width: "32px" }} src="svg/home_4.svg"></img>
          </Home>
          <Home_Name>홈</Home_Name>
        </Home_Box>
        <Img>
          <Button>
            <img src="svg/heart.svg"></img>
          </Button>
          <Name>찜</Name>
        </Img>
        <Img>
          <Button>
            <img src="svg/rectangles.svg"></img>
          </Button>
          <Name>카테고리</Name>
        </Img>

      </Button_Box>
    </Container>

  )
}

export default index