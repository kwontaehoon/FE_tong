import React from 'react'
import {
  Container,
  Exchange,
  Exchange_Text,
  Comment_Box,
} from './styles'

const index = () => {

  const dummy = Array(5).fill(0);

  return (
    <Container>
      <Exchange>
        <img src="/svg/Whiteheart.svg" className='mr-1' />
        <Exchange_Text>좋아요 1</Exchange_Text>
        <img src="/svg/comment.svg" className='mr-1' />
        <Exchange_Text>댓글 1</Exchange_Text>
      </Exchange>
      {dummy.map((_, index) => {
        return (
          <Comment_Box key={index}>
            <img src="/svg/Ikon.svg" className='mr-1 w-12' />
            <div>
              <div className='flex items-center mb-2'>
                <div className='text-lg mr-2 font-bold'>통통이</div>
                <div>안녕하세요.</div>
              </div>
              <div className='flex items-center text-sm'>
                <div className='mr-2 text-grey05'>2024.02.24</div>
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