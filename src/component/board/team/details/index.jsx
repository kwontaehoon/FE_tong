import React, { useState, useEffect, useRef } from 'react'
import Title from './title'
import Center from './center'
import Bottom from './bottom'
import Header from '../../../../function/header'
import { useBoardDeleteMutation, useBoardDetailsQuery } from '../../../../hooks/queries/api/Board'
import { useParams } from 'react-router-dom'
import { useCommentDeleteMutation, useCommentListQuery, useCommentUpdateMutation, useCommentWriteMutation } from '../../../../hooks/queries/api/Comment'
import { getToken } from '../../../../utill/GetToken'
import { loginFlag } from '../../../../utill/LoginFlag'
import { useLoginStore } from '../../../../store/LoginFlag'

const index = () => {

  const { id } = useParams();
  const inputRef = useRef(null);

  const openLoginModal = useLoginStore((state) => state.setOpen);

  const { data: boardList, isSuccess: boardSuccess, refetch: boardRefetch } = useBoardDetailsQuery({ boardId: id, userId: getToken() ? getToken().userId : 0 });

  const { data: commentList, isSuccess: commentSuccess, refetch: commentRefetch } = useCommentListQuery();

  const { mutateAsync: write } = useCommentWriteMutation();

  const { mutateAsync: commentUpdate } = useCommentUpdateMutation();

  const [info, setInfo] = useState();

  const [popupFlag, setPopupFlag] = useState(false);

  const [commentModify, setCommentModify] = useState({
    commentsId: 0,
    commentFlag: false,
    comment: '', // 댓글 수정
    comment2Flag: false,
    comment2: '' // 대댓글 수정
  });

  useEffect(() => {
    boardRefetch();
    commentRefetch();
  }, []);

  return boardSuccess && commentSuccess && (
    <div className='bg-bg h-full flex flex-col'
      onClick={() => {
        if (popupFlag) {
          setPopupFlag(false);
        }
      }}>
      <Header padding title="팀 구하기" noClose />
      <Title popupFlag={popupFlag} setPopupFlag={setPopupFlag} id={id} boardList={boardList} />
      <Center boardList={boardList} />
      <Bottom setInfo={setInfo} commentModify={commentModify} setCommentModify={setCommentModify} inputRef={inputRef} boardList={boardList} commentList={commentList?.content?.filter(x => x.board?.boardId == id)} commentRefetch={commentRefetch} />
      <div className='bg-white flex items-end py-4 px-3 flex-1'>
        <div className='flex relative w-full items-center'>
          {(commentModify.commentFlag || commentModify.comment2Flag) && <div className='absolute left-5 border text-xs py-1 px-2 rounded-xl bg-grey05 text-white'>수정</div>}
          <input className={'bg-bg w-full h-14 rounded-full pr-11 text-xs' + (commentModify.commentFlag || commentModify.comment2Flag ? ' pl-16' : ' pl-4')}
            ref={inputRef}
            placeholder='답글을 입력하세요.'
            value={info}
            onChange={(e) => setInfo(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Backspace' || e.keyCode === 8) {
                if(info == ''){
                    setCommentModify({...commentModify, commentFlag: false, comment2Flag: false});
                }
                // Backspace 키를 눌렀을 때 수행할 작업을 여기에 추가합니다.
              }
            }} />
          <img src="/svg/Send.svg" className='absolute right-4'
            onClick={async () => {
              setInfo('');
              if(commentModify.commentFlag || commentModify.comment2Flag){
                await commentUpdate({ commentsId: commentModify.commentsId, content: info});
              } else if (loginFlag()) {
                await write({
                  content: info,
                  board: {
                    boardId: id
                  },
                  user: {
                    userId: getToken().userId
                  }

                });
              } else openLoginModal(true);
              commentRefetch();
              setCommentModify({...commentModify, commentFlag: false, comment2Flag: false});
            }} />
        </div>
      </div>
    </div>
  )
}

export default index