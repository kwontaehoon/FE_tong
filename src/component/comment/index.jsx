import React from 'react'
import { Inner,Div,Wrap,Left,Imgbox,Img,Right,List,Li,ComenBox,
  P,P2,P3,IcoWrap,IcoList,IcoBox,Img2,Count,Plus,IcoBox2,Span } from './styles'


const index = () => {
  return (
    <Div>
      <Inner>
        {/* 댓글박스 */}
        <Wrap>
        <Left>
            <Imgbox>
            <Img src='./svg/profile0.svg' alt='프로필'></Img>
            </Imgbox>
          </Left>
          <Right>
            <List>
              <Li>호날랄리오</Li>
              <Li>3.4 오전 11:17</Li>
              <Li>수정</Li><Span></Span>
              <Li>삭제</Li>
            </List>
            <ComenBox>
              <P>안녕하세요. 좋은 정보 감사합니다!안녕하세요. 좋은 
                  정보 감사합니다! </P>
              <P2>용병구하기</P2>
            </ComenBox>
            <IcoWrap>
              <IcoList>
              {/* 아이콘1 */}
              <IcoBox style={{display:'none'}}>
                  <img src='/svg/response0.svg' alt='별점아이콘'></img>
                  <Count>0</Count>
                </IcoBox>
                <IcoBox>
                  <img src='/svg/response1.svg' alt='하트아이콘'></img>
                  <Count>2</Count>
                </IcoBox>
                <IcoBox>
                  <img src='/svg/response2.svg' alt='스마일아이콘'></img>
                  <Count>6</Count>
                </IcoBox>
                <IcoBox>
                  <img src='/svg/response3.svg' alt='찡그림아이콘'></img>
                  <Count>10</Count>
                </IcoBox>
                <IcoBox>
                  <img src='/svg/response4.svg' alt='화남아이콘'></img>
                  <Count>0</Count>
                </IcoBox>
                <Plus>
                  <Img2 src='/svg/response_plus.svg' alt='플러스아이콘'></Img2>
                  <Count>0</Count>
                </Plus>
              </IcoList>
              <IcoBox2>
                  <img src='/svg/comment_comment.svg' alt='대댓글아이콘'></img>
                  <P3>1개의 댓글</P3>
              </IcoBox2>
            </IcoWrap>
          </Right>
        </Wrap>
      </Inner>
    </Div>
  )
}

export default index