import React from 'react'
import {
    Container,
    Help,
    Help_Question,
    Question,
    IconBox,
    Button,
    Name,
} from './styles'

const index = () => {
    return (
        <Container>
            <Help>
                <Help_Question>
                    <Question>운통장</Question>
                    <div className='ml-2 text-xl text-ms font-bold'>MENU</div>
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
                        <img src="svg/Reservation.svg"></img>
                        <Name>예약</Name>
                    </Button>
                    <Button>
                        <img src="svg/Community.svg"></img>
                        <Name>커뮤니티</Name>
                    </Button>
                </IconBox>
            </Help>

        </Container>
    )
}

export default index