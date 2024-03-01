import React from 'react'
import {
  Div, Info, Left, Icon, H3, P, P2, Reservation,
  InfoBox, List1, Icon2, Icon1, Icon3, P3, P4, Comment, Span, H4,
  Wrap, ListBox, List2, Bottom
} from './styles'
import Header from '../../function/header'
import Navi from '../../function/navi'
import { useNavigate } from 'react-router-dom'

const index = () => {

  const navigate = useNavigate();

  return (
    <Div>
      <Header Arrow title={"MY"} padding />

      <Info>
        <Left>
          <Icon src="./svg/proflie.png" alt='이미지'></Icon>
          <div style={{ marginBottom: '10px' }}>
            <H3>000님</H3>
            <P>오늘로 00번 로그인 하였습니다!</P>
          </div>
        </Left>
        <P2>내정보관리</P2>
      </Info>
      {/*  예약기록<상단순서변경*/}
      <Wrap>
        <H4>나의 활동 기록</H4>

        <P4 style={{ textAlign: 'center', color: '#9FA4A9', fontWeight: '500' }}>*최근 90일 이내의 활동만 조회됩니다.</P4>
        <ListBox>
          {/* 수정필요 태그분리 */}
          <List2><Icon2 src="./svg/Reserve.png" alt='예약'></Icon2><P3>예약 1</P3></List2>
          <List2><Icon2 src="./svg/Manual.png" alt='대기'></Icon2><P3>대기 0</P3></List2>
          <List2><Icon2 src="./svg/Completed.png" alt='완료'></Icon2><P3>완료 10</P3></List2>
        </ListBox>


      </Wrap>

      <InfoBox>
        {/* 리스트1 */}
        <List1>
          <Left style={{ gap: '4px' }}>
            <Icon1 src="./svg/uil_comment-alt-plus.png" alt='게시글아이콘'></Icon1>
            <P3>게시글</P3>
          </Left>
          <Left style={{ gap: '4px' }}>
            <P3>02</P3>
            <Icon3 src="./svg/gravity-ui_chevron-right.png" alt='더보기아이콘'></Icon3>
          </Left>
        </List1>
        {/* 리스트2 */}
        <List1>
          <Left style={{ gap: '4px' }}>
            <Icon1 src="./svg/uil_comment-search.png" alt='댓글'></Icon1>
            <P3>댓글</P3>
          </Left>
          <Left style={{ gap: '4px' }}>
            <P3>00</P3>
            <Icon3 src="./svg/gravity-ui_chevron-right.png" alt='더보기아이콘'></Icon3>
          </Left>
        </List1>
        {/* 리스트3 */}
        <List1>
          <Left style={{ gap: '4px' }}>
            <Icon1 src="./svg/uil_comment-city.png" alt='찜한 시설'></Icon1>
            <P3>찜한 시설</P3>
          </Left>
          <Left style={{ gap: '4px' }}>
            <P3>00</P3>
            <Icon3 src="./svg/gravity-ui_chevron-right.png" alt='더보기아이콘'></Icon3>
          </Left>
        </List1>
      </InfoBox>
      <Comment>
        <P4>더욱 <Span>많은</Span> 활동을 원하신다면 게시판을 이용해보세요!</P4>
        <Icon3 src="./svg/gravity-ui_chevron-right.png" alt='더보기아이콘' onClick={()=>navigate("/board")}></Icon3>
      </Comment>
      <Bottom>
        <P4>회원탈퇴</P4>
        <Left style={{ gap: '4px', alignItems: 'end' }}>
          <P4>로그아웃</P4>
          <Icon3 src="./svg/line-md_arrow-close-right.png" alt='로그아웃아이콘'></Icon3>
        </Left>
      </Bottom>
      <Navi />
    </Div>
  )
}

export default index