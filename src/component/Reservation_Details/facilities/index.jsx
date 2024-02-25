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
                Lorem ipsum dolor sit amet consectetur.
                Auctor vestibulum pharetra enim id feugiat arcu felis ac.
                Ipsum arcu sit facilisis tristique.Lorem ipsum dolor
            </Description>
        </Container>
    )
}

export default index