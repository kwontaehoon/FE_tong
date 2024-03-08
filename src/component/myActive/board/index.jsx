import React from 'react'
import {
  Container,
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

const index = () => {

  const navigate = useNavigate();

  const { data, isSuccess } = useMyBoardListQuery({ user: { userId: getToken().userId } });
  
  console.log("data: ", data);

  return isSuccess ? (
    <Container>
      <Choice_Box>
        <Choice>최신순</Choice>
        <img src="svg/down_arrow.svg"></img>
      </Choice_Box>
      {data.map(x => {
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
              <Comment>{x.recommend}</Comment>
            </Time_Box>
          </Recruitment_Box>
        )
      })}
    </Container>
  ) : <Spinner />
}

export default index