import React, { useState, useRef } from 'react'
import {
  Left,
  Imgbox,
  Right,
  List,
  Li,
  Span,
  ComenBox,
  P
} from './styles';
import { ModalMobileContainer, ModalMobileSubContainer } from '../../../layout/ModalContainer'
import { useRecommentsStore } from '../../../store/Recomments';
import { profile } from '../../../function/profile';
import moment from 'moment';
import { getToken } from '../../../utill/GetToken';
import { useCommentListQuery, useRecommentsDeleteMutation, useRecommentsUpdateMutation, useRecommentsWriteMutation } from '../../../hooks/queries/api/Comment';
import { loginFlag } from '../../../utill/LoginFlag';
import { useParams } from 'react-router-dom';
import { useLoginStore } from '../../../store/LoginFlag';

const index = () => {

  const { id } = useParams();
  const inputRef = useRef(null);

  const { data, refetch } = useCommentListQuery();

  const recommentsModal = useRecommentsStore((state) => state.open);
  const recommentCommentIdModal = useRecommentsStore((state) => state.commentId);
  const openRecommentsModal = useRecommentsStore((state) => state.setOpen);
  const openLoginModal = useLoginStore((state) => state.setOpen);

  const { mutateAsync: write } = useRecommentsWriteMutation();
  const { mutateAsync: update } = useRecommentsUpdateMutation();
  const { mutateAsync: del } = useRecommentsDeleteMutation();

  const [commentModify, setCommentModify] = useState({
    commentsId: 0,
    commentFlag: false,
    comment: '', // 댓글 수정
  });

  const [info, setInfo] = useState();

  return (
    <ModalMobileContainer $show={recommentsModal} onClick={() => openRecommentsModal(false)}>
      <ModalMobileSubContainer $show={recommentsModal} style={{height: '80%'}} onClick={(e) => e.stopPropagation()}>
        <div className='text-base font-bold relative'>
          <div>대댓글</div>
          <div className='absolute h-1 w-full top-0 flex justify-center'>
            <div className='bg-grey07 rounded-lg w-12' onClick={() => openRecommentsModal(false)}></div>
          </div>
        </div>
        <div className='my-5 overflow-scroll'>
          {data?.content?.filter(x => x.board?.boardId == id && x.commentsId == recommentCommentIdModal)[0].recomments.length == 0 ?
            <div className='pt-20 flex items-center justify-center text-grey05'>등록된 댓글이 없습니다.</div>
            : data?.content?.filter(x => x.board?.boardId == id && x.commentsId == recommentCommentIdModal)[0].recomments.map(x => {
              return (
                <div key={x.recommentsId} className='flex mb-5'>
                  <Left>
                    <Imgbox>{profile(x.user.profile)}</Imgbox>
                  </Left>
                  <Right>
                    <List>
                      <Li>{x.user.id}</Li>
                      <Li>{moment(x.createDate).format("MM.DD hh:mm")}</Li>
                      {x.user.userId !== getToken().userId ? '' : <div className='flex'>
                        <Li onClick={() => {
                          inputRef.current.focus();
                          setCommentModify({ ...commentModify, commentFlag: true, commentsId: x.recommentsId });
                          setInfo(x.content);
                        }}>수정</Li><Span></Span>
                        <Li onClick={async () => {
                          await del({ recommentsId: x.recommentsId });
                          refetch();
                        }}>삭제</Li>
                      </div>}
                    </List>
                    <ComenBox>
                      <P>{x.content}</P>
                    </ComenBox>
                  </Right>
                </div>
              )
            })}

        </div>
        <div className='flex-1 flex items-end'>
          <div className='flex relative w-full items-center'>
          {(commentModify.commentFlag) && <div className='absolute left-5 border text-xs py-1 px-2 rounded-xl bg-grey05 text-white'>수정</div>}
          <input className={'bg-bg w-full h-14 rounded-full pr-11 text-xs' + (commentModify.commentFlag ? ' pl-16' : ' pl-4')}
            placeholder='답글을 입력하세요.'
            ref={inputRef}
            value={info}
            onClick={(e) => e.stopPropagation()}
            onChange={(e) => {
              setInfo(e.target.value);
            }}
            onKeyDown={(e) => {

            }} />
          <img src="/svg/Send.svg" className='absolute right-4 bottom-3 '
            onClick={async () => {
              setInfo('');
              if (commentModify.commentFlag) {
                await update({ recommentsId: commentModify.commentsId, content: info });
              } else if (loginFlag()) {
                await write({
                  content: info,
                  board: {
                    boardId: id
                  },
                  user: {
                    userId: getToken().userId
                  },
                  comments: {
                    commentsId: recommentCommentIdModal
                  }

                });
              } else {
                openRecommentsModal(false);
                openLoginModal(true);
              }
              refetch();
              setCommentModify({ ...commentModify, commentFlag: false });
            }} />
            </div>
        </div>
      </ModalMobileSubContainer>
    </ModalMobileContainer>
  )
}

export default index