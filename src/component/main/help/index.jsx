import React from 'react'
import {
    Container,
    Help,
    Help_Question,
    Question,
    IconBox,
    Button,
    Icon,
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
                        <Icon>
                            <img src="svg/Cloud.svg"></img>
                            <Name>운동장</Name>
                        </Icon>
                    </Button>

                    <Button>
                        <Icon>
                            <img src="svg/Cloud.svg"></img>
                            <Name>스케쥴</Name>
                        </Icon>
                    </Button>
                    <Button>
                        <Icon>
                            <img src="svg/Cloud.svg"></img>
                            <Reservation>예약</Reservation>
                        </Icon>
                    </Button>
                    <Button>
                        <Icon>
                            <img src="svg/Cloud.svg"></img>
                            <Community>커뮤니티</Community>

                        </Icon>
                    </Button>
                </IconBox>
            </Help>
            
        </Container>
    )
}

export default index