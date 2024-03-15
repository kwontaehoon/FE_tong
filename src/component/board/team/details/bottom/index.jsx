import React, { useState } from 'react'
import {
  Container,
  Exchange,
  Exchange_Text,
  Comment_Box,
  Inner, Div, Wrap, Left, Imgbox, Img, Right, List, Li, ComenBox,
  P, P2, P3, IcoWrap, IcoList, IcoBox, Img2, Count, Plus, IcoBox2, Span
} from './styles'
import moment from 'moment';
import { useCommentDeleteMutation, useCommentResponseMutation, useCommentUpdateMutation } from '../../../../../hooks/queries/api/Comment';
import { profile } from '../../../../../function/profile';
import { getToken } from '../../../../../utill/GetToken';
import { useRecommentsStore } from '../../../../../store/Recomments';

const index = ({ responseFlag, setResponseFlag, setInfo, commentModify, setCommentModify, inputRef, boardList, commentList, commentRefetch }) => {

  const { mutateAsync: commentDel } = useCommentDeleteMutation();

  const { mutateAsync: response } = useCommentResponseMutation();
  console.log(commentList);

  const openRecommentsModal = useRecommentsStore((state) => state.setOpen);
  const setRecommentsCommentsModal = useRecommentsStore((state) => state.setComments);

  return (
    <Container
      onClick={() => {
        if (responseFlag.findIndex(x => x) !== -1) {
          setResponseFlag(Array(commentList.length).fill(false));
        }
      }}>
      <Exchange>
        {/* <img src="/svg/Whiteheart.svg" className='mr-1' />
        <Exchange_Text>좋아요 {boardList.recommend}</Exchange_Text> */}
        <img src="/svg/comment.svg" className='mr-1 w-4' />
        <Exchange_Text>댓글 {commentList.length}</Exchange_Text>
      </Exchange>
      {commentList.length === 0 ?
        <div className='mt-14 mb-10 flex-1 text-xs text-grey05 flex justify-center'>등록된 댓글이 없습니다.</div> : commentList.map((x, index) => {
          return (
            <Div key={x.commentsId}>
              <Inner>
                {/* 댓글박스 */}
                <Wrap>
                  <Left>
                    <Imgbox>{profile(x.user.profile)}</Imgbox>
                  </Left>
                  <Right>
                    <List>
                      <Li>{x.user.name}</Li>
                      <Li>{moment(x.createDate).format("MM.DD hh:mm")}</Li>
                      {x.user.userId !== getToken().userId ? '' : <div className='flex'>
                        <Li onClick={() => {
                          inputRef.current.focus();
                          setCommentModify({ ...commentModify, commentFlag: true, commentsId: x.commentsId });
                          setInfo(x.content);
                        }}>수정</Li><Span></Span>
                        <Li onClick={async () => {
                          await commentDel({ commentsId: x.commentsId });
                          commentRefetch();
                        }}>삭제</Li>
                      </div>}
                    </List>
                    <ComenBox>
                      <P>{x.content}</P>
                    </ComenBox>
                    <IcoWrap>
                      <IcoList>
                        {responseFlag[index] && <div className='bg-grey07 flex w-auto z-50 absolute bottom-7 shadow-custom rounded-xl'>
                          {Array(5).fill(0).map((_, index) => {
                            return (
                              <div key={index} className='w-9 py-2 mx-1'>
                                <img
                                  key={index}
                                  src={`/svg/response${index}.svg`}
                                  className='w-full h-full'
                                  onClick={async () => {
                                    switch (index) {
                                      case 0: await response({ commentsId: x.commentsId, star: 1 }); return commentRefetch();
                                      case 1: await response({ commentsId: x.commentsId, heart: 1 }); return commentRefetch();
                                      case 2: await response({ commentsId: x.commentsId, smile: 1 }); return commentRefetch();
                                      case 3: await response({ commentsId: x.commentsId, twist: 1 }); return commentRefetch();
                                      case 4: await response({ commentsId: x.commentsId, angry: 1 }); return commentRefetch();
                                    }
                                    setResponseFlag(Array(commentList.length).fill(false));
                                  }} />
                              </div>
                            )
                          })}
                        </div>}
                        {/* 아이콘1 */}
                        {x.star !== 0 && <IcoBox>
                          <img src='/svg/response0.svg' alt='별점아이콘'
                            onClick={async () => { await response({ commentsId: x.commentsId, star: 1 }); commentRefetch(); }} />
                          <Count>{x.star}</Count>
                        </IcoBox>}
                        {x.heart !== 0 && <IcoBox>
                          <img src='/svg/response1.svg' alt='하트아이콘'
                            onClick={async () => { await response({ commentsId: x.commentsId, heart: 1 }); commentRefetch(); }} />
                          <Count>{x.heart}</Count>
                        </IcoBox>}
                        {x.smile !== 0 && <IcoBox>
                          <img src='/svg/response2.svg' alt='스마일아이콘'
                            onClick={async () => { await response({ commentsId: x.commentsId, smile: 1 }); commentRefetch(); }} />
                          <Count>{x.smile}</Count>
                        </IcoBox>}
                        {x.twist !== 0 && <IcoBox>
                          <img src='/svg/response3.svg' alt='찡그림아이콘'
                            onClick={async () => { await response({ commentsId: x.commentsId, twist: 1 }); commentRefetch(); }} />
                          <Count>{x.twist}</Count>
                        </IcoBox>}
                        {x.angry !== 0 && <IcoBox>
                          <img src='/svg/response4.svg' alt='화남아이콘'
                            onClick={async () => { await response({ commentsId: x.commentsId, angry: 1 }); commentRefetch(); }} />
                          <Count>{x.angry}</Count>
                        </IcoBox>}
                        {(x.star !== 0 && x.heart !== 0 && x.smile !== 0 && x.twist !== 0 && x.angry !== 0) ?
                          '' : (x.star == 0 && x.heart == 0 && x.smile == 0 && x.twist == 0 && x.angry == 0) ?
                            <Plus><Img2 src="/svg/response_plus.svg"
                              onClick={() => {
                                let arr = Array(commentList.length).fill(false);
                                arr[index] = !arr[index];
                                setResponseFlag(arr);
                              }
                              }></Img2></Plus>
                            : <Plus>
                              <Img2 src='/svg/response_plus2.svg' alt='플러스아이콘'
                                onClick={() => {
                                  let arr = Array(commentList.length).fill(false);
                                  arr[index] = !arr[index];
                                  setResponseFlag(arr);
                                }
                                }></Img2>
                            </Plus>}
                      </IcoList>
                      <IcoBox2>
                        <img src='/svg/comment_comment.svg' alt='대댓글아이콘'></img>
                        <P3 onClick={() => {
                          setRecommentsCommentsModal(x);
                          openRecommentsModal(true);
                        }}>{x.recomments.length == 0 ? '답글쓰기' : `${x.recomments.length}개의 댓글`}
                        </P3>
                      </IcoBox2>
                    </IcoWrap>
                  </Right>
                </Wrap>
              </Inner>
            </Div>
          )
        })}
    </Container>
  )
}

export default index