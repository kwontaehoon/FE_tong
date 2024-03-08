import React from 'react'
import {
  Container,
  Bulletin,
  Notification
} from './styles'
import { useBoardDeleteMutation } from '../../../../../hooks/queries/api/Board';
import { useNavigate } from 'react-router-dom';

const index = ({boardList}) => {

  return (
    <Container>
        <Bulletin>{boardList.content}</Bulletin>
        <Notification>부적절한 게시글이라면 김포운통장에 알려주세요</Notification>
    </Container>
  )
}

export default index