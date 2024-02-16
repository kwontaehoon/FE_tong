import React from 'react'
import {
  Container,
  Heather,
  Heather_Text,
  TITLE_Box,
  IMG,
  Img_Text,
  Lorem,
  Lorem_Text,
  Button_Box,
  Button,
  Ikon,
  Ikon_name,
  Home_Box,
} from './styles'


const index = () => {
  return (
    <Container>
      <Heather>
        <img src="svg/BackArrow.svg"></img>
        <Heather_Text>
          예약
        </Heather_Text>
        <img src="svg/search.svg"></img>
      </Heather>
      <TITLE_Box>
        장기동
      </TITLE_Box>
      <IMG>
        <img style={{objectFit:"fill", width:"100%"}}src="svg/Ground_5.svg"></img>
      </IMG>
      <Img_Text>
        <Lorem>
          장기 통통축구장
        </Lorem>
        <Lorem_Text>
          김포한강4로 125 장기역 2번출구 도보 5분
        </Lorem_Text>
      </Img_Text>
      <IMG>
        <img style={{objectFit:"fill", width:"100%"}}src="svg/Ground_6.svg"></img></IMG>
      <Img_Text>
        <Lorem>
          솔터 축구장
        </Lorem>
        <Lorem_Text>
          김포한강4로 125 장기역 2번출구 도보5분
        </Lorem_Text>
      </Img_Text>

      <IMG>
        <img style={{objectFit:"fill", width:"100%"}} src="svg/Ground_7.svg"></img>
      </IMG>
      <Img_Text>
        <Lorem>
          FC PJ 축구센터
        </Lorem>
        <Lorem_Text>
          김포한강4로 125 장기역 2번출구 도보5분
        </Lorem_Text>
      </Img_Text>

      <IMG>
        <img style={{objectFit:"fill", width:"100%"}} src="svg/Ground_8.svg"></img>
      </IMG>
      <Img_Text>
        <Lorem>
          PAJU 축구클럽
        </Lorem>
        <Lorem_Text>
          김포한강4로 125 장기역 2번출구 도보5분
        </Lorem_Text>
      </Img_Text>
      <IMG>
        <img style={{objectFit:"fill", width:"100%"}} src="svg/Ground_9.svg"></img>
      </IMG>
      <Img_Text>
        <Lorem>
          PAJU 축구클럽
        </Lorem>
        <Lorem_Text>
          김포한강4로 125 장기역 2번출구 도보5분
        </Lorem_Text>
      </Img_Text>
      <IMG>
        <img style={{objectFit:"fill", width:"100%"}} src="svg/Ground_10.svg"></img>
      </IMG>
      <Img_Text>
        <Lorem>
          장기 통통축구장
        </Lorem>
        <Lorem_Text>
          장기 통통 축구장
        </Lorem_Text>
      </Img_Text>
      <IMG>
        <img style={{objectFit:"fill", width:"100%"}} src="svg/Ground_11.svg"></img>
      </IMG>
      <Img_Text>
        <Lorem>
          장기 통통축구장
        </Lorem>
        <Lorem_Text>
          김포한강4로 125 장기역 2번출구 도보5분
        </Lorem_Text>
      </Img_Text>
      <Button_Box>
        <Ikon>
          <Button>
        <img src="svg/Calendar.svg"></img>
        </Button>
        <Ikon_name>예약</Ikon_name>
        </Ikon>
        <Ikon>
          <Button>
          <img src="svg/Smile.svg"></img>
          </Button>
        <Ikon_name>MY</Ikon_name>
        </Ikon>
          <Home_Box>
            <img style={{width:"50%"}}src="svg/home_4.svg"></img>
          </Home_Box>
        <Ikon>
          <Button>
        <img src="svg/heart.svg"></img>
        </Button>
        <Ikon_name>찜</Ikon_name>
        </Ikon>
        <Ikon>
          <Button>
          <img src="svg/rectangles.svg"></img>
          </Button>
        <Ikon_name>카테고리</Ikon_name>
        </Ikon>

      </Button_Box>
    </Container>
  )
}

export default index