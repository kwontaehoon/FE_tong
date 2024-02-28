import React, { useEffect } from 'react'
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
import { loginFlag } from '../../../utill/LoginFlag';

const index = () => {

    const navigate = useNavigate();

    const { data, isSuccess, refetch } = useBoardListQuery();

    useEffect(()=>{
        refetch();
    }, [navigate]);

    return isSuccess && (
        <Container>
            {data?.content?.filter(x => x.category.includes("용병")).map((x, index) => {
                return (
                    <Recruitment_Box key={x.boardId} onClick={() => navigate(`${x.boardId}`)}>
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
            {loginFlag() &&
                <div className='fixed right-5 bottom-32 flex justify-center items-center bg-grey10 rounded-full' style={{ width: "60px", height: "60px" }}
                    onClick={() => navigate("/boardWrite", { state: '용병' })}>
                    <img src="/svg/Pencil_Icon.svg" />
                </div>}
        </Container>
    )
}

export default index