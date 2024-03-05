import React, { useEffect } from 'react'
import {
    Container,
    TabBox,
    Tab,
    Choice_Box,
    Choice,
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
import { dateDiff } from '../../../utill/DateDiff';
import Spinner from '../../../function/spinner'
import { loginFlag } from '../../../utill/LoginFlag';
import Header from '../../../function/header';
import { boardTabText } from '../../../constants/text/api/Board';
import Navi from '../../../function/navi'

const index = () => {

    const navigate = useNavigate();

    const tab = Array(4).fill().map((_, index) => index === 0);

    const { data, isSuccess, refetch } = useBoardListQuery();

    useEffect(() => {
        refetch();
    }, [navigate]);

    return !isSuccess ? <Spinner /> : (
        <Container>
            <Header padding title="게시판" />
            <TabBox>
                <div className='h-full flex'>
                    {boardTabText.map((x, index) => {
                        return (
                            <Tab key={x.id} $border={tab[index]}
                                onClick={() => {
                                    switch (index) {
                                        case 1: return navigate("/mercenary");
                                        case 2: return navigate("/notice");
                                        case 3: return navigate("/faq");
                                    }
                                }}>{x.content}
                            </Tab>
                        )
                    })}
                </div>
            </TabBox>
            <Choice_Box>
                <Choice>최신순</Choice>
                <img src="/svg/down_arrow.svg" className='w-3' />
            </Choice_Box>
                {data?.content?.filter(x => x.category.includes("팀")).map((x, index) => {
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
                        onClick={() => navigate("/boardWrite", { state: '팀' })}>
                        <img src="/svg/Pencil_Icon.svg" />
                    </div>}
            <div className='h-24' />
            <Navi />
        </Container>
    )
}

export default index