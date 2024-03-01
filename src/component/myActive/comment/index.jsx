import React from 'react'
import { useMyCommentListQuery } from '../../../hooks/queries/api/Comment'
import { Container } from './styles'
import Spinner from '../../../function/spinner'

const index = () => {

  const { data, isSuccess } = useMyCommentListQuery({ user: { userId: 5 } });
  console.log("comments data: ", data);

  return isSuccess ? (
    <Container>
      {data.map(x => {
        return (
          <div key={x.commentsId} className='p-4 rounded-lg bg-white mb-2'>
            <div className='flex items-center'>
              <div className='mr-2'>용병</div>
              <div className='text-lg font-bold'>{x.content}</div>
            </div>
          </div>
        )
      })}

    </Container>
  ) : <Spinner />
}

export default index