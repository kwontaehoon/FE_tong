import React from 'react'
import {Container,
Personnel_Box,
Personnel,
Choice,
Number,
Button_Box,
Button,
Img,
Name,
Home_Box,
Home,
Home_Name} from './styles' 

const index = () => {
  return (
   <Container>
        <Personnel_Box>
            <Personnel>인원선택</Personnel>
            <Choice>(최대5명)</Choice>
            <img style={{width:"42px",height:"42px"}}src="svg/Minus.svg"></img>
            <Number>0명</Number>
            <img style={{width:"42px",height:"42px", marginRight:"10px"}}src="svg/Plus.svg"></img>
            </Personnel_Box>    
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