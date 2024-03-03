import React, { useEffect } from 'react'
import {
    Container,
    TabBox,
    Tab,
    Choice_Box,
    Choice,
    Recruitment_Box,
    FC,
    FC_Box,
    Jangi_FC,
    Comments_Box,
    Comment,
    Activity,
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
                <img src="svg/down_arrow.svg"></img>
            </Choice_Box>
            <div className='mx-5'>
                {data?.content?.filter(x => x.category.includes("팀")).map((x, index) => {
                    return (
                        <Recruitment_Box key={index} onClick={() => navigate(`${x.boardId}`)}>
                            <FC_Box>
                                <FC>{x.title}</FC>
                                <Jangi_FC>{x.content}</Jangi_FC>
                                <Comments_Box>
                                    <img src="/svg/eye.svg" className='mr-1' />
                                    <Comment>{x.hits}</Comment>
                                    <img src="/svg/comment.svg" className='mr-1' />
                                    <Comment>{x.recommend}</Comment>
                                    <Activity>{dateDiff(x.createDate)}</Activity>
                                </Comments_Box>
                            </FC_Box>
                            <img src="svg/Teamwork_5.svg"></img>
                        </Recruitment_Box>
                    )
                })}
                {loginFlag() &&
                    <div className='fixed right-5 bottom-32 flex justify-center items-center bg-grey10 rounded-full' style={{ width: "60px", height: "60px" }}
                        onClick={() => navigate("/boardWrite", { state: '팀' })}>
                        <img src="/svg/Pencil_Icon.svg" />
                    </div>}
            </div>
            <div className='h-24' />
            <Navi />
        </Container>
    )
}

export default index