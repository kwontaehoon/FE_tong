import React from 'react'
import { Inner,Div,Wrap,Left,Imgbox,Img,Right,List,Li,ComenBox,
  P,P2,P3,IcoWrap,IcoList,IcoBox,Img2,Count,Plus,IcoBox2,Span } from './styles'


const index = () => {
  return (
    <Div>
      <Inner>
        <Wrap>
          <Left>
          <Imgbox>
            <Img src='./svg/profile_01.svg' alt='프로필'></Img>
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
                  정보 감사합니다!안녕하세요. 좋은 정보 감사합니다!
                  안녕하세요. 좋은 정보 감사합니다! </P>
              <P2>용병구하기</P2>
            </ComenBox>
            <IcoList>
              <IcoBox>
              <img src='./svg/comment_i01.png' alt='별점아이콘'></img>
              <Count>0</Count>
              </IcoBox>
              <IcoBox>
                  <img src='./svg/comment_i02.png' alt='하트아이콘'></img>
                  <Count>2</Count>
                </IcoBox>
                <IcoBox>
                  <img src='./svg/comment_i03.png' alt='스마일아이콘'></img>
                  <Count>6</Count>
                </IcoBox>
                <IcoBox>
                  <img src='./svg/comment_i04.png' alt='찡그림아이콘'></img>
                  <Count>10</Count>
                </IcoBox>
                <IcoBox>
                  <img src='./svg/comment_i05.png' alt='화남아이콘'></img>
                  <Count>0</Count>
                </IcoBox>
                <Plus>
                  <Img2 src='./svg/add 2.png' alt='플러스아이콘'></Img2>
                  <Count>0</Count>
                </Plus>
                </IcoList>
                <IcoBox2>
                  <img src='./svg/comment 2.png' alt='대댓글아이콘'></img>
                  <P3>4개의 댓글</P3>
              </IcoBox2>
          
            </Right>
        </Wrap>

        {/* 댓글박스 */}
        <Wrap>
        <Left>
            <Imgbox>
            <Img src='./svg/profile_04.svg' alt='프로필'></Img>
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
              <P>안녕하세요.</P>
              <P2>용병구하기</P2>
            </ComenBox>
            <IcoWrap>
              <IcoList>
              {/* 아이콘1 */}
              <IcoBox style={{display:'none'}}>
                  <img src='./svg/comment_i01.png' alt='별점아이콘'></img>
                  <Count>0</Count>
                </IcoBox>
                <IcoBox style={{display:'none'}}>
                  <img src='./svg/comment_i02.png' alt='하트아이콘'></img>
                  <Count>10</Count>
                </IcoBox>
                <IcoBox style={{display:'none'}}>
                  <img src='./svg/comment_i03.png' alt='스마일아이콘'></img>
                  <Count>6</Count>
                </IcoBox>
                <IcoBox style={{display:'none'}}>
                  <img src='./svg/comment_i04.png' alt='찡그림아이콘'></img>
                  <Count>2</Count>
                </IcoBox>
                <IcoBox style={{display:'none'}}>
                  <img src='./svg/comment_i05.png' alt='화남아이콘'></img>
                  <Count>0</Count>
                </IcoBox>
                <Plus>
                  <Img2 src='./svg/add 2.png' alt='플러스아이콘'></Img2>
                  <Count>0</Count>
                </Plus>
              </IcoList>
              <IcoBox2>
                  <img src='./svg/comment 2.png' alt='대댓글아이콘'></img>
                  <P3>0개의 댓글</P3>
              </IcoBox2>
            </IcoWrap>


          </Right>

        </Wrap>
        {/* 댓글박스 */}
        <Wrap>
        <Left>
            <Imgbox>
            <Img src='./svg/profile_05.svg' alt='프로필'></Img>
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
                  <img src='./svg/comment_i01.png' alt='별점아이콘'></img>
                  <Count>0</Count>
                </IcoBox>
                <IcoBox>
                  <img src='./svg/comment_i02.png' alt='하트아이콘'></img>
                  <Count>2</Count>
                </IcoBox>
                <IcoBox>
                  <img src='./svg/comment_i03.png' alt='스마일아이콘'></img>
                  <Count>6</Count>
                </IcoBox>
                <IcoBox>
                  <img src='./svg/comment_i04.png' alt='찡그림아이콘'></img>
                  <Count>10</Count>
                </IcoBox>
                <IcoBox>
                  <img src='./svg/comment_i05.png' alt='화남아이콘'></img>
                  <Count>0</Count>
                </IcoBox>
                <Plus>
                  <Img2 src='./svg/add 2.png' alt='플러스아이콘'></Img2>
                  <Count>0</Count>
                </Plus>
              </IcoList>
              <IcoBox2>
                  <img src='./svg/comment 2.png' alt='대댓글아이콘'></img>
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