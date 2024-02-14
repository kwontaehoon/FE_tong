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
    Besides
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
                    <Check>체크인</Check>
                    <Besides>23.11.23(토)</Besides>
                </Details>

                <Details>
                    <Check>체크아웃</Check>
                    <Besides>23.11.24(일)</Besides>
                </Details>

                <Details>
                    <Check>예약번호</Check>
                    <Besides>Lorrem ipsum dolor</Besides>
                </Details>

                <Details>
                    <Check>예약자 이름</Check>
                    <Besides>***</Besides>
                </Details>

                <Details>
                    <Check>안심번호</Check>
                    <Besides>010-1234-5678</Besides>
                </Details>
            </Information_Box>
        </Container>
    )
}

export default index