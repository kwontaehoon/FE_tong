import React from 'react'
import {
  Container,
  Recruitment,
  Anonymous,
  Comment_Box,
  Comment,
  TongTong_Box,
  TongTong,
  Days
} from './styles'
import { dateDiff } from '../../../../../utill/DateDiff';

const index = ({boardList}) => {

  return (
    <Container>
        <Recruitment>{boardList.title}</Recruitment>
      <Comment_Box>
        <img style={{ width: "16px" }} src="/svg/eye.svg" className='mr-1' />
        <Comment>{boardList.hits}</Comment>
        <img style={{ width: "16px" }} src="/svg/comment.svg" className='mr-1' />
        <Comment>{boardList.recommend}</Comment>
      </Comment_Box>
      <Anonymous>
        <img style={{ width: "36px" }} src="/svg/Ikon.svg" />
        <TongTong_Box>
          <TongTong>{boardList?.user?.name}</TongTong>
          <Days>{dateDiff(boardList.createDate)}</Days>
        </TongTong_Box>
        <img style={{ width: "24px" }} src="/svg/details.svg" />
      </Anonymous>
    </Container>
  )
}

export default index