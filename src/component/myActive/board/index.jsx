import React from 'react'
import {
  Container,
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
import { useMyBoardListQuery } from '../../../hooks/queries/api/Board'
import { getToken } from '../../../utill/GetToken'
import { dateDiff } from '../../../utill/DateDiff'
import { useNavigate } from 'react-router-dom'
import Spinner from '../../../function/spinner'

const index = () => {

  const navigate = useNavigate();

  const { data, isSuccess } = useMyBoardListQuery({ user: { userId: getToken().userId } });

  return isSuccess ? (
    <Container>
      <Choice_Box>
        <Choice>최신순</Choice>
        <img src="svg/down_arrow.svg"></img>
      </Choice_Box>
      {data.map(x => {
        return (
          <Recruitment_Box key={x.boardId} onClick={() => navigate(`/board/${x.boardId}`)}>
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
    </Container>
  ) : <Spinner />
}

export default index