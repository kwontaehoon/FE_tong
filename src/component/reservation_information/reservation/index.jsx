import React from 'react'
import {
  Container,
  Information_Container,
  Information_Box,
  Information,
  Input,
  Check,
  Test,
  Option_Box,
  Choice_Box,
  Choice,
  Max,
  Personnel,
  Text,
  Button_Box,
  Button,
  Img,
  Name,
  Home_Box,
  Home,
  Home_Name,
  Calendar,
  Option,
  Option_name,
  Option_Text

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
        <Input placeholder='이름을 입력하세요'></Input>
        <Information>휴대폰번호</Information>
        <Input placeholder='번호를 입력하세요'></Input>
      </Information_Container>

      <Option_Box>
        <Information>옵션선택</Information>
      <Option>
        <Option_name>
          <Option_Text>날짜선택</Option_Text>
        </Option_name>
        <Calendar>
          <img src="svg/Calendar_2.svg"></img>
        </Calendar>
      </Option>
      <Option>
        <Option_name>
          <Option_Text>시간선택</Option_Text>
        </Option_name>
        <Calendar>
        <img src="svg/Calendar_2.svg"></img>
        </Calendar>
      </Option>
     
        <Choice_Box>

          <Choice>
            <Text>인원선택
            </Text>
            <Text>
              <Max>(최대5명)</Max>
            </Text>
          </Choice>

          <img src="svg/Minus.svg"></img>
          <Personnel>0명</Personnel>
          <img src="svg/Plus.svg"></img>
        </Choice_Box>
      </Option_Box>
        <Check>
          <Test>예약하기</Test>
        </Check>
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