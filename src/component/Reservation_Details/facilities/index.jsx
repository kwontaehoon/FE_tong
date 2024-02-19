import React from 'react'
import {
    Container,
    Facilities_Box,
    Ikon_Box,
    Ikon,
    Ikon_name,
    Rule,
    Description,
    Description_Box,
    Reservation_Box,
    Reservation,
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
            <Facilities_Box>
                편의시설
            </Facilities_Box>
            <Ikon_Box>
                <Ikon>
                    <img src="svg/wifi.svg"></img>
                    <Ikon_name>wi-fi</Ikon_name>
                </Ikon>

                <img src="svg/line_2.svg"></img>
                <Ikon>
                    <img src="svg/Medicine.svg"></img>
                    <Ikon_name>비상약</Ikon_name>
                </Ikon>
                <img src="svg/line_2.svg"></img>
                <Ikon>
                    <img src="svg/Washing machine.svg"></img>
                    <Ikon_name>세탁기</Ikon_name>
                </Ikon>
                <img src="svg/line_2.svg"></img>
                <Ikon>
                    <img src="svg/24.svg"></img>
                    <Ikon_name>24시</Ikon_name>
                </Ikon>
                <img src="svg/line_2.svg"></img>
                <Ikon>
                    <img src="svg/Box.svg"></img>
                    <Ikon_name>탈의실</Ikon_name>

                </Ikon>
            </Ikon_Box>
            <Rule>이용규칙</Rule>
            <Description>
                Lorem ipsum dolor sit amet consectetur.
                Auctor vestibulum pharetra enim id feugiat arcu felis ac.
                Ipsum arcu sit facilisis tristique.Lorem ipsum dolor
                <Description_Box>
                    sit amet consectetur. Auctor vestibulum pharetra enim id feugiat arcu felis ac.
                    Ipsum arcu sit facilisis tristique.</Description_Box>
            </Description>
            <Reservation_Box>
                <Reservation>
                    예약하기
                </Reservation>
            </Reservation_Box>
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