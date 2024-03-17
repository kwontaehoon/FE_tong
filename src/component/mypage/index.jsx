import React, { useEffect, useState } from 'react'
import {
  Div, Info, Left, Icon, H3, P, P2, Reservation,
  InfoBox, List1, Icon2, Icon1, Icon3, P3, P4, Comment, Span, H4,
  Wrap, ListBox, List2, Bottom
} from './styles'
import Header from '../../function/header'
import Navi from '../../function/navi'
import { useNavigate } from 'react-router-dom'
import { useExpireStore } from '../../store/Expire'
import { useMyWishListQuery } from '../../hooks/queries/api/Wish'
import { useMyBoardListQuery } from '../../hooks/queries/api/Board'
import { useMyCommentListQuery } from '../../hooks/queries/api/Comment'
import { getToken } from '../../utill/GetToken'
import { numberTwo } from '../../utill/NumberTwo'
import { useReservationCancelListQuery, useReservationListQuery } from '../../hooks/queries/api/Reservation'
import { useInfoQuery, useProfileUpdateMutation } from '../../hooks/queries/api/Account'
import Spinner from '../../function/spinner'
import { profile } from '../../function/profile'
import moment from 'moment'

const index = () => {

  const navigate = useNavigate();

  const profileSelect = Array(7).fill(false);

  const [myReservation, setMyReservation] = useState({
    myReservation: 0,
    myCancel: 0,
    myFinish: 0
  });

  const [profileFlag, setProfileFlag] = useState(false);

  const { data: myWish, isSuccess: wishSuc, refetch } = useMyWishListQuery({ users: { userId: getToken().userId }});

  const { data: myBoard, isSuccess: boardSuc } = useMyBoardListQuery({ user: { userId: getToken().userId }});

  const { data: myComments, isSuccess: commentsSuc } = useMyCommentListQuery({ user: { userId: getToken().userId }});

  const { data: myReservationData, isSuccess: myReservationDataSuc, refetch: myReservationRefetch } = useReservationListQuery();

  const { data: info, isSuccess: infoSuccess, refetch: infoRefetch } = useInfoQuery({ userId: getToken().userId} );
  
  const { mutateAsync: profileUpdate, isLoading } = useProfileUpdateMutation();

  const { data: myCancel, isSuccess: myCancleSuc } = useReservationCancelListQuery();

  useEffect(()=>{
    if (myReservationData && myCancel) {
      let arr = [];
      let arr2 = [];
      myReservationData?.map(x => {
          if (moment(new Date()).diff(x.deadLine, 'hour') < 24 && x?.resrvationApplicants?.filter(x => x.userId == getToken().userId).length > 0) {
              arr.push(x);
          }
          if (moment(new Date()).diff(x.deadLine, 'hour') > 24 && x?.resrvationApplicants?.filter(x => x.userId == getToken().userId).length > 0) {
              arr2.push(x);
          }
      });
      setMyReservation({
        ...myReservation,
        myReservation: arr.reduce((acc, cur) => acc.concat(cur), []),
        myCancel: myCancel.filter(x => x.userId === getToken().userId),
        myFinish: arr2.reduce((acc, cur) => acc.concat(cur), [])
      })
  }
  }, [myCancel, myReservationData]);

  useEffect(()=>{
    refetch();
    infoRefetch();
    myReservationRefetch();
  }, []);

  return (
    <Div onClick={()=>{
      if(profileFlag){
        setProfileFlag(false);
      }
    }}>
      <Header title={"MY"} padding noClose arrowUrl={"/"} />
      {!(wishSuc && boardSuc && commentsSuc && infoSuccess && !isLoading && myReservationDataSuc && myCancleSuc) ? <Spinner />
      :
      <div className='flex flex-col h-full pb-5'>
      <Info>
        <Left>
          <div className='relative flex flex-col items-center'>
            {profileFlag && <div className='absolute -bottom-16 bg-grey07 flex w-auto z-50 left-1/2 shadow-custom rounded-xl'>
              {profileSelect.map((_, index) => {
                return (
                  <div key={index} className='w-9 py-2 mx-1'><img src={`/svg/profile${index}.svg`} 
                    onClick={async()=>{
                      await profileUpdate({ userId: getToken().userId, profile: index});
                      infoRefetch();
                    }}/>
                  </div>
                )
              })}
              </div>}
            <Icon>
              {profile(info?.profile)}
            </Icon>
            <div className='mt-2 rounded-lg bg-grey07' style={{padding: "2px 4px", fontSize: "10px"}} onClick={()=>setProfileFlag(!profileFlag)}>프로필 변경</div>
          </div>
          <div style={{ marginBottom: '10px' }}>
            <H3>안녕하세요, {info.name}님</H3>
            <P>{info.email}</P>
          </div>
        </Left>
        <P2 onClick={()=>navigate("/myInfo")}>내 정보 관리</P2>
      </Info>
      {/*  예약기록<상단순서변경*/}
      <Wrap>
        <H4>나의 예약 기록</H4>

        <P4 style={{ textAlign: 'center', color: '#9FA4A9', fontWeight: '500' }}>*최근 90일 이내의 활동만 조회됩니다.</P4>
        <ListBox>
          {/* 수정필요 태그분리 */}
          <List2 onClick={()=>navigate("/myReservation_ing")}><Icon2 src="./svg/Reserve.png" alt='예약'></Icon2><P3>예약 {myReservation.myReservation.length}</P3></List2>
          <List2 onClick={()=>navigate("/myReservation_cancel", { state: "cancel" })}><Icon2 src="./svg/Manual.png" alt='대기'></Icon2><P3>취소 {myReservation.myCancel.length}</P3></List2>
          <List2 onClick={()=>navigate("/myReservation_finish", { state: "finish "})}><Icon2 src="./svg/Completed.png" alt='완료'></Icon2><P3>완료 {myReservation.myFinish.length}</P3></List2>
        </ListBox>


      </Wrap>

      <InfoBox>
        {/* 리스트1 */}
        <List1 onClick={()=>navigate("/myActive/wish")}>
          <Left style={{ gap: '4px' }}>
            <Icon1 src="./svg/uil_comment-city.png" alt='찜한 시설'></Icon1>
            <P3>찜한 시설</P3>
          </Left>
          <Left style={{ gap: '4px' }}>
            <P3>{numberTwo(myWish.length)}</P3>
            <Icon3 src="./svg/gravity-ui_chevron-right.png" alt='더보기아이콘'></Icon3>
          </Left>
        </List1>
        {/* 리스트2 */}
        <List1 onClick={()=>navigate("/myActive/board")}>
          <Left style={{ gap: '4px' }}>
            <Icon1 src="./svg/uil_comment-alt-plus.png" alt='게시글아이콘'></Icon1>
            <P3>게시글</P3>
          </Left>
          <Left style={{ gap: '4px' }}>
            <P3>{numberTwo(myBoard.length)}</P3>
            <Icon3 src="./svg/gravity-ui_chevron-right.png" alt='더보기아이콘'></Icon3>
          </Left>
        </List1>
        {/* 리스트3 */}
        <List1 onClick={()=>navigate("/myActive/comment")}>
          <Left style={{ gap: '4px' }}>
            <Icon1 src="./svg/uil_comment-search.png" alt='댓글'></Icon1>
            <P3>댓글</P3>
          </Left>
          <Left style={{ gap: '4px' }}>
            <P3>{numberTwo(myComments.length)}</P3>
            <Icon3 src="./svg/gravity-ui_chevron-right.png" alt='더보기아이콘'></Icon3>
          </Left>
        </List1>
      </InfoBox>
      <Comment>
        <P4>더욱 <Span>많은</Span> 활동을 원하신다면 게시판을 이용해보세요!</P4>
        <Icon3 src="./svg/gravity-ui_chevron-right.png" alt='더보기아이콘' onClick={()=>navigate("/board")}></Icon3>
      </Comment>
      <Bottom>
        <P4 onClick={()=>navigate("/expire")}>회원탈퇴</P4>
        <Left style={{ gap: '4px', alignItems: 'end' }}>
          <P4 onClick={()=>{ localStorage.removeItem("token"); navigate("/"); window.location.reload();}}>로그아웃</P4>
          <Icon3 src="./svg/line-md_arrow-close-right.png" alt='로그아웃아이콘'></Icon3>
        </Left>
      </Bottom>
      </div>}
    </Div>
  )
}

export default index