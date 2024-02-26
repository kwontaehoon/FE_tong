import React from 'react'
import {
    Container,
    Recruitment_Box,
    Recruitment,
    Text,
    Area,
    Title,
    Time_Box,
    Time,
    Comment
} from './styles'

const index = () => {

    const dummy = Array(5).fill(0);

    return (
        <Container>
            {dummy.map((_, index) => {
                return (
                    <Recruitment_Box key={index}>
                        <Recruitment>
                            <Area>장기동</Area>
                            <Title>용병구합니다</Title>
                        </Recruitment>
                        <Text>Text</Text>
                        <Time_Box>
                            <Time>17시간전</Time>
                            <img src="svg/eye.svg" className='mr-1'></img>
                            <Comment>322</Comment>
                            <img src="svg/comment.svg" className='mr-1'></img>
                            <Comment>31</Comment>
                        </Time_Box>
                    </Recruitment_Box>
                )
            })}
        </Container>
    )
}

export default index