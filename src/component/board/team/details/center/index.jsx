import React from 'react'
import {
  Container,
  Bulletin,
  Notification
} from './styles'
import { useBoardDeleteMutation } from '../../../../../hooks/queries/api/Board';
import { useNavigate } from 'react-router-dom';

const index = ({id, boardList}) => {

  const navigate = useNavigate();

  const { mutateAsync: boardDel } = useBoardDeleteMutation();

  return (
    <Container>
      <Bulletin>{boardList.content}</Bulletin>
      <Notification>부적절한 게시글이라면 김포운통장에 알려주세요</Notification>
      <div className='flex justify-end'>
        <div className='border px-2' onClick={()=>navigate('/boardWrite', { state: ["수정", boardList, '팀'] })}>수정</div>
        <div className='border px-2'
         onClick={async()=>{
          await boardDel({ boardId: id });
          navigate(-1);
        }}>삭제</div>
      </div>
    </Container>
  )
}

export default index