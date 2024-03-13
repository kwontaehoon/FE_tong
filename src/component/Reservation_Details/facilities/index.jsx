import React from 'react'
import {
    Container,
    Facilities_Box,
    Ikon_Box,
    Ikon,
    Ikon_name,
    Rule,
    Description,
} from './styles'

const index = () => {
    return (
        <Container>
            <Facilities_Box>편의시설</Facilities_Box>
            <Ikon_Box>
                <Ikon>
                    <img style={{width:"25px",height:"25px"}}src="/svg/wifi.svg"></img>
                    <Ikon_name>wi-fi</Ikon_name>
                </Ikon>
                <img src="/svg/line_2.svg"></img>
                <Ikon>
                    <img style={{width:"25px",height:"25px"}}src="/svg/Medicine.svg"></img>
                    <Ikon_name>비상약</Ikon_name>
                </Ikon>
                <img src="/svg/line_2.svg"></img>
                <Ikon>
                    <img style={{width:"25px",height:"25px"}}src="/svg/24.svg"></img>
                    <Ikon_name>24시</Ikon_name>
                </Ikon>
                <img src="/svg/line_2.svg"></img>
                <Ikon>
                    <img style={{width:"25px",height:"25px"}}src="/svg/Box.svg"></img>
                    <Ikon_name>탈의실</Ikon_name>
                </Ikon>
            </Ikon_Box>

            <Rule>이용규칙</Rule>
            <Description>
                <div>1. 예약시간을 꼭 준수해주세요.</div>
                <div>2. 음식물 반입 금지합니다.(물, 음료만 가능)</div>
                <div>3. 주차장은 별도로 없으니 도모로 이용해주세요.</div>
                <div>4. 공용시설로 정리정돈 부탁합니다.</div>
                <div>5. 시설내 흡연 및 음주행위는 금지합니다.</div>
            </Description>
        </Container>
    )
}

export default index