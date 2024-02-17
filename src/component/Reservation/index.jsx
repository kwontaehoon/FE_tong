import React from 'react'
import {
  Container,
  Heather,
  Reservation,
  Jangi,
  IMG,
  Tong_Tong,
  Lorem,
  Lorem_Text,
  Soccer_field,
  Button_Box,
  Button,
  Img,
  Name,
  Home_Box,
  Home,
  Home_Name
} from './styles'


const index = () => {
  return (
    <Container>
      <Heather>
        <img src="svg/BackArrow.svg"></img>
        <Reservation>
          예약
        </Reservation>
        <img src="svg/search.svg"></img>
      </Heather>
      <Jangi>
        장기동
      </Jangi>
      <IMG>
        <img style={{ objectFit: "fill", width: "100%" }} src="svg/Ground_5.svg"></img>
      </IMG>
      <Tong_Tong>
        <Lorem>
          장기 통통축구장
        </Lorem>
        <Lorem_Text>
          김포한강4로 125 장기역 2번출구 도보 5분
        </Lorem_Text>
      </Tong_Tong>
      <IMG>
        <img style={{ objectFit: "fill", width: "100%" }} src="svg/Ground_6.svg"></img></IMG>
      <Tong_Tong>
        <Lorem>
          솔터 축구장
        </Lorem>
        <Lorem_Text>
          김포한강4로 125 장기역 2번출구 도보5분
        </Lorem_Text>
      </Tong_Tong>
      <IMG>
        <img style={{ objectFit: "fill", width: "100%" }} src="svg/Ground_7.svg"></img>
      </IMG>
      <Tong_Tong>
        <Lorem>
          FC PJ 축구센터
        </Lorem>
        <Lorem_Text>
          김포한강4로 125 장기역 2번출구 도보5분
        </Lorem_Text>
      </Tong_Tong>
      <IMG>
        <img style={{ objectFit: "fill", width: "100%" }} src="svg/Ground_8.svg"></img>
      </IMG>
      <Tong_Tong>
        <Lorem>
          PAJU 축구클럽
        </Lorem>
        <Lorem_Text>
          김포한강4로 125 장기역 2번출구 도보5분
        </Lorem_Text>
      </Tong_Tong>
      <IMG>
        <img style={{ objectFit: "fill", width: "100%" }} src="svg/Ground_9.svg"></img>
      </IMG>
      <Tong_Tong>
        <Lorem>
          PAJU 축구클럽
        </Lorem>
        <Lorem_Text>
          김포한강4로 125 장기역 2번출구 도보5분
        </Lorem_Text>
      </Tong_Tong>
      <IMG>
        <img style={{ objectFit: "fill", width: "100%" }} src="svg/Ground_10.svg"></img>
      </IMG>
      <Tong_Tong>
        <Lorem>
          장기 통통축구장
        </Lorem>
        <Lorem_Text>
          장기 통통 축구장
        </Lorem_Text>
      </Tong_Tong>
      <IMG>
        <img style={{ objectFit: "fill", width: "100%" }} src="svg/Ground_11.svg"></img>
      </IMG>
      <Soccer_field>
        <Lorem>
          장기 통통축구장
        </Lorem>
        <Lorem_Text>
          김포한강4로 125 장기역 2번출구 도보5분
        </Lorem_Text>
      </Soccer_field>
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