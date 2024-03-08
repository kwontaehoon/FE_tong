import React, { useState } from 'react'
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
import { getToken } from '../../../../../utill/GetToken';
import { useBoardDeleteMutation } from '../../../../../hooks/queries/api/Board';
import { useNavigate } from 'react-router-dom';
import { profile } from '../../../../../function/profile';

const index = ({id, boardList}) => {
  console.log("boardList: ", boardList);

  const navigate = useNavigate();

  const [popupFlag, setPopupFlag] = useState(false);

  const { mutateAsync: boardDel } = useBoardDeleteMutation();

  return (
    <Container>
        <Recruitment>{boardList.title}</Recruitment>
      <Comment_Box>
        <img style={{ width: "16px" }} src="/svg/eye.svg" className='mr-1' />
        <Comment>{boardList.hits}</Comment>
        <img style={{ width: "16px" }} src="/svg/comment.svg" className='mr-1' />
        <Comment>{boardList.commentCount}</Comment>
      </Comment_Box>
      <Anonymous>
        {profile(boardList.user.profile)}
        <TongTong_Box>
          <TongTong>{boardList?.user?.name}</TongTong>
          <Days>{dateDiff(boardList.createDate)}</Days>
        </TongTong_Box>
        {boardList.user.userId == getToken().userId && <div className='relative'>
          <img src="/svg/details.svg" onClick={()=>setPopupFlag(!popupFlag)} />
          {popupFlag && <div className='absolute flex-1 right-2 w-28 text-xs shadow-custom rounded-lg overflow-hidden top-8 font-bold bg-white z-50 whitespace-nowrap'>
            <div className='px-4 py-2 bg-grey07'
              onClick={async()=>{
                await boardDel({ boardId: id });
                navigate(-1);
              }}>삭제
            </div>
            <div className='px-4 py-2' onClick={()=>navigate('/boardWrite', { state: ["수정", boardList, '팀'] })}>수정</div>
          </div>}
        </div>}
      </Anonymous>
    </Container>
  )
}

export default index