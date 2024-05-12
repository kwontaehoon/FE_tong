import React, { useState } from 'react'
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
import { useMyBoardListQuery } from '../../../hooks/queries/api/Board'
import { getToken } from '../../../utill/GetToken'
import { dateDiff } from '../../../utill/DateDiff'
import { useNavigate } from 'react-router-dom'
import Spinner from '../../../function/spinner'
import Header from '../../../function/header'
import { myTabText } from '../../../constants/text/api/Board'
import Navi from '../../../function/navi'

const index = () => {

  const navigate = useNavigate();

  const [tab, setTab] = useState(Array(3).fill().map((_, index) => index === 1));

  const { data, isSuccess } = useMyBoardListQuery({ user: { userId: getToken().userId } });

  return (
    <Container>
      <Header title={myTabText[tab.findIndex(x => x)].content} padding search />
      <TabBox>
        <div className='h-full flex mb-5'>
          {myTabText.map((x, index) => {
            return (
              <Tab key={x.id} $border={tab[index]}
                onClick={() => {
                  if (index == 0) {
                    navigate('/myActive/wish');
                  } else if (index == 2) {
                    navigate('/myActive/comment');
                  }
                }}>{x.content}
              </Tab>
            )
          })}
        </div>
      </TabBox>
      {!isSuccess ? <Spinner /> : data.length === 0 ?
        <div className='mt-40 flex items-center flex-col'>
          <img src="/svg/listNull.svg" />
          <div className='mt-4 text-grey04'>업로드한 게시글이 없습니다.</div>
        </div> : data.map(x => {
          return (
            <Recruitment_Box key={x.boardId} onClick={() => navigate(x.category.includes("팀") ? `/board/${x.boardId}` : `/mercenary/${x.boardId}`)}>
              <Recruitment>
                <Area $category={x.category.includes("팀")}>{x.category.includes("팀") ? '팀' : '용병'}</Area>
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
      <div className='h-20' />
      <Navi />
    </Container>
  )
}

export default index