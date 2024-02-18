import React from 'react'
import {
    Container,
    Breakdown,
    Breakdown_Text,
    Lorem_Box,
    Lorem,
    Lorem_Text,
    Information_Box,
    Details,
    Check,
    Besides,
    Button_Box,
    Button,
    Img,
    Name,
    Home_Box,
    Home_Name,
    Home
} from './styles'

const index = () => {
    return (
        <Container>
            <Breakdown>
                <img src="svg/BackArrow.svg"></img>
                <Breakdown_Text>
                    예약내역
                </Breakdown_Text>
                <img src="svg/home_1.svg"></img>
            </Breakdown>
            <Lorem_Box>
                <Lorem>
                    Lorem
                </Lorem>
                <Lorem_Text>
                    Lorem ipsum dolor
                </Lorem_Text>
            </Lorem_Box>
            <Information_Box>
                예약정보
                <Details>
                    <Check>예약번호</Check>
                    <Besides>133442509-DSGGG</Besides>
                </Details>

                <Details>
                    <Check>예약자이름</Check>
                    <Besides>이민희</Besides>
                </Details>

                <Details>
                    <Check>안심번호</Check>
                    <Besides>010-1234-5678</Besides>
                </Details>
            </Information_Box>
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