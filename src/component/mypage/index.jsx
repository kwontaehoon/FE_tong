import React from 'react'
import {Div,Info,Left,Icon,H3,P,P2,Reservation,
  InfoBox,List1,Icon2,P3,Comment,Span,
  Wrap} from './styles'
import Header from '../../layout/Header'

const index = () => {
  return (
    <Div>
    <Header noArrow url={"login"} padding='0 20px' />

    <Info>
      <Left>
        <Icon src="./svg/proflie.png" alt='이미지'></Icon>
          <div style={{marginBottom:'10px'}}>
            <P>오늘로 00번 로그인 하였습니다!</P>
            <H3>안녕하세요.000님</H3>
          </div>
      </Left>        
      <P2>내정보관리</P2>
    </Info>

    <InfoBox>
  {/* 리스트1 */}
      <List1>
        <Left style={{gap:'4px'}}>
          <Icon2 src="./svg/uil_comment-alt-plus.png" alt='게시글아이콘'></Icon2>
          <P3>게시글</P3>
        </Left>
        <Left style={{gap:'4px'}}>
          <P3>02</P3>
          <Icon2 src="./svg/gravity-ui_chevron-right.png" alt='더보기아이콘'></Icon2>
        </Left>  
      </List1>
   {/* 리스트2 */}
      <List1>
        <Left style={{gap:'4px'}}>
          <Icon2 src="./svg/uil_comment-search.png" alt='댓글'></Icon2>
          <P3>댓글</P3>
        </Left>
        <Left style={{gap:'4px'}}>
          <P3>00</P3>
          <Icon2 src="./svg/gravity-ui_chevron-right.png" alt='더보기아이콘'></Icon2>
        </Left>  
      </List1>
   {/* 리스트3 */}
       <List1>
        <Left style={{gap:'4px'}}>
          <Icon2 src="./svg/uil_comment-city.png" alt='찜한 시설'></Icon2>
          <P3>찜한 시설</P3>
        </Left>
        <Left style={{gap:'4px'}}>
          <P3>00</P3>
          <Icon2 src="./svg/gravity-ui_chevron-right.png" alt='더보기아이콘'></Icon2>
        </Left>  
      </List1>
  </InfoBox>
  <Comment>
  <P3>더욱 <Span>많은</Span> 활동을 원하신다면 게시판을 이용해보세요!</P3>
  <Icon2 src="./svg/gravity-ui_chevron-right.png" alt='더보기아이콘'></Icon2>
  </Comment>
  <Wrap>
  <h3>나의예약기록</h3> 
    <Left style={{gap:'4px'}}>
      {/* <P3>더보기</P3>
     <Icon2 src="./svg/gravity-ui_chevron-right.png" alt='더보기아이콘'></Icon2> */}
    </Left>  
  </Wrap>
  

    </Div>

    
    
  )
}

export default index