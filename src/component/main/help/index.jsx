import React from 'react'
import {
    Container,
    Help,
    Help_Question,
    Question,
    IconBox,
    Button,
    Name,
    Reservation,
    Community,

} from './styles'

const index = () => {
    return (
        <Container>
            <Help>
                <Help_Question>
                    <Question>무엇을 도와드릴까요</Question>
                </Help_Question>
                <IconBox>
                    <Button>
                        <img src="svg/Playground_1.svg"></img>
                        <Name>운동장</Name>
                    </Button>

                    <Button>
                        <img src="svg/Cloud.svg"></img>
                        <Name>스케쥴</Name>
                    </Button>
                    <Button>
                            <img src="svg/Cloud.svg"></img>
                            <Reservation>예약</Reservation>
                    </Button>
                    <Button>
                            <img src="svg/Cloud.svg"></img>
                            <Community>커뮤니티</Community>
                    </Button>
                </IconBox>
            </Help>

        </Container>
    )
}

export default index