import React, { useState } from 'react'
import {
  Container,
  Exchange,
  Exchange_Text,
  Comment_Box,
} from './styles'
import moment from 'moment';
import { useCommentDeleteMutation, useCommentUpdateMutation } from '../../../../../hooks/queries/api/Comment';
import { profile } from '../../../../../function/profile';
import { getToken } from '../../../../../utill/GetToken';

const index = ({ inputRef, boardList, commentList, commentRefetch }) => {

  const { mutate: commentUpdate } = useCommentUpdateMutation();

  const { mutateAsync: commentDel } = useCommentDeleteMutation();

  const [commentEdit, setCommentEdit] = useState(Array(commentList.length).fill(false));

  return (
    <Container>
      <Exchange>
        {/* <img src="/svg/Whiteheart.svg" className='mr-1' />
        <Exchange_Text>좋아요 {boardList.recommend}</Exchange_Text> */}
        <img src="/svg/comment.svg" className='mr-1 w-4' />
        <Exchange_Text>댓글 {commentList.length}</Exchange_Text>
      </Exchange>
      {commentList.length == 0 ?
        <div className='mt-14 mb-10 flex-1 text-xs text-grey05 flex justify-center'>등록된 댓글이 없습니다.</div>
        : commentList.map((x, index) => {
          return (
            <Comment_Box key={x.commentsId}>
              <div className='flex flex-1'>
                <div className='mr-2 flex items-center justify-center'>
                  {profile(x.user.profile)}
                </div>
                <div>
                  <div className='flex items-center'>
                    <div className='text-lg mr-2 font-bold'>{x.user.name}</div>
                    <div>{x.content}</div>
                  </div>
                  <div className='flex items-center text-sm'>
                    <div className='mr-2 text-grey05'>{moment(x.createDate).format("YYYY.MM.DD")}</div>
                    {/* <div className='text-grey04'>답글달기</div> */}
                  </div>
                </div>
              </div>
              <div className='flex items-center relative'>
                {x.user.userId !== getToken().userId ? '' : <img src="/svg/details.svg"
                  onClick={() => {
                    let arr = [...commentEdit];
                    if (!arr[index]) {
                      arr = Array(commentList.length).fill(false);
                    }
                    arr[index] = !arr[index];
                    setCommentEdit(arr);
                  }} />}
                {commentEdit[index] &&
                  <div className='absolute right-5 bg-white w-50 w-28 top-6 whitespace-nowrap font-bold text-xs rounded-lg shadow-lg'>
                    <div className='px-4 py-2' onClick={async () => {
                      setCommentEdit(Array(commentList.length).fill(false));
                      await commentDel({ commentsId: x.commentsId });
                      commentRefetch();
                    }}>삭제</div>
                    <div className='px-4 py-2' onClick={() => {
                      inputRef.current.focus();
                      setCommentEdit(Array(commentList.length).fill(false));
                    }}>수정</div>
                  </div>}
              </div>
            </Comment_Box>
          )
        })}
    </Container>
  )
}

export default index