import React from 'react'
import {
    Container,
    Heather,
    TITLE_Box,
    TITLE
} from './styles'


const index = () => {
    return (
        <Container>
            <Heather>
                <img src="svg/BackArrow.svg"></img>

                <TITLE_Box>
                    <TITLE>TITLE</TITLE>
                </TITLE_Box>
                <img src="svg/heart_2.svg"></img>
            </Heather>
        </Container>
    )
}

export default index