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
import { useNavigate } from 'react-router-dom';
import { useBoardListQuery } from '../../../hooks/queries/api/Board';
import moment from 'moment';
import { dateDiff } from '../../../utill/DateDiff'

const index = () => {

    const navigate = useNavigate();
    
    const { data, isSuccess } = useBoardListQuery();
    console.log("data: ", data?.content?.filter(x => x.category.includes("용병")));

    return isSuccess && (
        <Container>
            {data?.content?.filter(x => x.category.includes("용병")).map((x, index) => {
                return (
                    <Recruitment_Box key={x.boardId} onClick={()=>navigate(`${x.boardId}`)}>
                        <Recruitment>
                            <Area>장기동</Area>
                            <Title>{x.title}</Title>
                        </Recruitment>
                        <Text>{x.content}</Text>
                        <Time_Box>
                            <Time>{dateDiff(x.createDate)}</Time>
                            <img src="svg/eye.svg" className='mr-1'></img>
                            <Comment>{x.hits}</Comment>
                            <img src="svg/comment.svg" className='mr-1'></img>
                            <Comment>{x.recommend}</Comment>
                        </Time_Box>
                    </Recruitment_Box>
                )
            })}
        </Container>
    )
}

export default index