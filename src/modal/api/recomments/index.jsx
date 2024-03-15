import React, { useState } from 'react'
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

const index = () => {

  const recommentsModal = useRecommentsStore((state) => state.open);
  const openRecommentsModal = useRecommentsStore((state) => state.setOpen);
  const recommentsCommentsModal = useRecommentsStore((state) => state.id);
  console.log("recommentsCommentsModal: ", recommentsCommentsModal);
  const setRecommentsCommentsModal = useRecommentsStore((state) => state.setComments);

  const [info, setInfo] = useState();

  return (
    <ModalMobileContainer $show={recommentsModal} onClick={() => openRecommentsModal(false)}>
      <ModalMobileSubContainer $show={recommentsModal} onClick={(e)=> e.stopPropagation()}>
        <div className='text-base font-bold relative'>
          <div>대댓글</div>
          <div className='absolute h-1 w-full top-0 flex justify-center'>
            <div className='bg-grey07 rounded-lg w-12' onClick={()=>openRecommentsModal(false)}></div>
          </div>
        </div>
        <div className='my-5 h-40 overflow-scroll'>
          {recommentsCommentsModal.recomments.map(x => {
            return (
              <div className='flex'>
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
                </Right>
              </div>
            )
          })}

        </div>
        <div className='text-2xl'>대댓글 진행중임 토요일에 끝남</div>
        <div className='flex-1 flex items-center'>
          {/* <div className='h-12 flex justify-center items-center bg-m text-white w-full rounded-lg'
                onClick={() => openRecommentsModal(false)}>닫기
            </div> */}
          <input className={'bg-bg w-full h-14 rounded-full pr-11 text-xs pl-4'}
            placeholder='답글을 입력하세요.'
            value={info}
            onClick={(e)=> e.stopPropagation()}
            onChange={(e) => {
              setInfo(e.target.value);
            }}
            onKeyDown={(e) => {

            }} />
          <img src="/svg/Send.svg" className='absolute right-9' />
        </div>
      </ModalMobileSubContainer>
    </ModalMobileContainer>
  )
}

export default index