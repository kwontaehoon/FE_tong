import React, { useState, useEffect } from 'react'
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
import { boardTabText, boardFilterText, freeBoardTabText } from '../../../constants/text/api/Board';
import Navi from '../../../function/navi'

const index = () => {

    const navigate = useNavigate();

    const [category, setCategory] = useState(Array(8).fill().map((_, index) => index === 0));
    const [categoryContent, setCategoryContent] = useState("자주찾는질문");
    const [filter, setFilter] = useState(false);

    const [info, setInfo] = useState("최신순");

    const { data, isSuccess, refetch } = useBoardListQuery();

    const [dataArr, setDataArr] = useState();
    console.log("dataArr: ", dataArr);

    useEffect(() => {
        if(data){
            switch(true){
                case "전체": setDataArr(data); break;
                case "일상": setDataArr(data.filter(x=> x.sub_category == "일상")); break;
                case "질문": setDataArr(data.filter(x=> x.sub_category == "질문")); break;
                case "정보공유": setDataArr(data.filter(x=> x.sub_category == "정보공유")); break;
            }
        }
    }, [data]);

    useEffect(() => {
        refetch();
    }, [navigate]);

    return (
        <Container>
            <Header padding title="자유게시판" arrowUrl={"/"} closeUrl={"/"} />
            <TabBox>
                {freeBoardTabText.map((x, index) => {
                    return (
                        <Tab $category={category[index]} key={x.id}
                            onClick={() => {
                                let arr = Array(4).fill(false);
                                arr[index] = true;
                                setCategory(arr);
                                setCategoryContent(x.content);
                            }}>{x.content}
                        </Tab>
                    )
                })}
            </TabBox>
            <Choice_Box>
                <div className='flex items-center relative' onClick={()=>setFilter(!filter)}>
                    <Choice>{info}</Choice>
                    <img src="/svg/down_arrow.svg" className='w-3' />
                    {filter && <div className='absolute text-xs shadow-custom rounded-lg bg-white top-6 left-0 flex-col flex justify-center p-2'>
                    {boardFilterText.map(x => {
                        return (
                            <div key={x.id} className='py-1' onClick={() => {
                                setFilter(!filter);
                                setInfo(x.content);
                            }}>{x.content}
                            </div>
                        )
                    })}
                </div>}
                </div>
            </Choice_Box>
            {!isSuccess ? <Spinner /> : data.filter(x => x.category.includes("자유")).map((x, index) => {
                return (
                    <Recruitment_Box key={x.boardId} onClick={() => navigate(`${x.boardId}`)}>
                        <Recruitment>
                            {/* <Area>팀</Area> */}
                            <Title>{x.title}</Title>
                        </Recruitment>
                        <Text>{x.content}</Text>
                        <Time_Box>
                            <Time>{dateDiff(x.createDate)}</Time>
                            <img src="/svg/eye.svg" className='w-3 mr-1' />
                            <Comment>{x.hits}</Comment>
                            <img src="/svg/comment.svg" className='w-3 mr-1' />
                            <Comment>{x.commentCount}</Comment>
                        </Time_Box>
                    </Recruitment_Box>
                )
            })}
            {loginFlag() &&
                <div className='fixed right-5 bottom-32 flex md:hidden justify-center items-center bg-grey10 rounded-full w-12 h-12'
                    onClick={() => navigate("/boardWrite", { state: '자유' })}>
                    <img src="/svg/Pencil_Icon.svg" className='w-5' />
                </div>}
            <div className='h-24' />
            <Navi />
        </Container>
    )
}

export default index