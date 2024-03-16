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
import { useNavigate } from 'react-router-dom'

const index = () => {

    const navigate = useNavigate();

    return (
        <Container>
            <Help> 
                <Help_Question>
                    <Question>MENU</Question>
                    <div className='ml-1 mt-2 text-xs flex flex-col text-grey04'>카테고리</div>
                </Help_Question>
                <IconBox>
                    <Button onClick={()=>navigate("/reservation")}>
                        <img src="/svg/main_reservation.svg"></img>
                        <Name>예약</Name>
                    </Button>
                    <Button onClick={()=>navigate("/reservation")}>
                        <img src="/svg/main_ground.svg"></img>
                        <Name>운동장찾기</Name>
                    </Button>
                    <Button onClick={()=>navigate("/board")}>
                        <img src="/svg/main_team.svg" style={{width: "36px", height: "36px"}}></img>
                        <Name>팀구하기</Name>
                    </Button>
                    <Button onClick={()=>navigate("/mercenary")}>
                        <img src="/svg/main_mercenary.svg"></img>
                        <Name>용병구하기</Name>
                    </Button>
                </IconBox>
            </Help>

        </Container>
    )
}

export default index