import React from 'react'
import {
  Container,
  Exchange,
  Exchange_Text,
  Comment_Box,
} from './styles'
import moment from 'moment';

const index = ({commentList}) => {

  console.log("commentList: ", commentList);

  return (
    <Container>
      <Exchange>
        <img src="/svg/Whiteheart.svg" className='mr-1' />
        <Exchange_Text>좋아요 1</Exchange_Text>
        <img src="/svg/comment.svg" className='mr-1' />
        <Exchange_Text>댓글 1</Exchange_Text>
      </Exchange>
      {commentList.length !== 0 && commentList.map((x, index) => {
        return (
          <Comment_Box key={x.commentsId}>
            <img src="/svg/Ikon.svg" className='mr-1 w-12' />
            <div>
              <div className='flex items-center mb-2'>
                <div className='text-lg mr-2 font-bold'>{x.user.name}</div>
                <div>{x.content}</div>
              </div>
              <div className='flex items-center text-sm'>
                <div className='mr-2 text-grey05'>{moment(x.createDate).format("YYYY.MM.DD")}</div>
                <div className='text-grey04'>답글달기</div>
              </div>
            </div>
          </Comment_Box>
        )
      })}
    </Container>
  )
}

export default index