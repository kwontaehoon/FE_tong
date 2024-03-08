import React from 'react'
import { useMyCommentListQuery } from '../../../hooks/queries/api/Comment'
import { Container, Area, Title } from './styles'
import Spinner from '../../../function/spinner'
import { getToken } from '../../../utill/GetToken'

const index = () => {

  const { data, isSuccess } = useMyCommentListQuery({ user: { userId: getToken().userId } });

  return !isSuccess ? <Spinner /> : (
    <Container>
      {data.map(x => {
        return (
          <div key={x.commentsId} className='p-4 rounded-lg bg-white mb-2'>
            <div className='flex items-center'>
              <Area $category={x.board.category.includes("팀")}>{x.board.category.includes("팀") ? '팀' : '용병'}</Area>
              <Title>{x.content}</Title>
            </div>
          </div>
        )
      })}

    </Container>
  )
}

export default index