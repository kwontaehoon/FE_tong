import React from 'react'
import { Cover,Container,Inner,Bar,Info,Pcoment,Right,Btn1,Btn2,Sec1,Sec2,
  Sec3,Sec1H1,List,Icon,Img,P,Weekley,WeekBox,WeekList,Sec4,H4,CsBox,Cs1,CsSpan} from './styles';
import { ModalSideContainer, ModalSideSubContainer } from '../../../../layout/ModalContainer'
import { useCategoryStore } from '../../../../store/main/Category';
import { usePickListQuery } from '../../../../hooks/queries/api/Main'
import { useNavigate } from 'react-router-dom';

const index = () => {

  const navigate = useNavigate();
  const categoryModal = useCategoryStore((state) => state.open);
  const openCategoryModal = useCategoryStore((state) => state.setOpen);
  const { data, isSuccess } = usePickListQuery();

  return isSuccess && (
    <ModalSideContainer $show={categoryModal}>
      <ModalSideSubContainer $show={categoryModal}>
        <Container>
          <Inner>
            <Bar>
              <img src="/svg/close.svg" onClick={()=>openCategoryModal(false)} />
            </Bar>
            {/* 로긴박스 */}
            <Info>
              <Pcoment>로그인 해주세요 <span style={{ display: 'block' }}>회원이 아니신가요</span></Pcoment>
              <Right style={{ gap: '10px' }}>
                <Btn1 onClick={()=>{ 
                  setTimeout(()=>{
                    navigate("/login"); 
                  }, 1000);
                  openCategoryModal(false); 
                  }}>로그인
                </Btn1>
                <Btn2 onClick={()=>{
                  setTimeout(()=>{
                    navigate("/signup"); 
                  }, 1000);
                  openCategoryModal(false);
                  }}>회원가입
                </Btn2>
              </Right>
            </Info>

            {/* 카테고리 */}

            <Sec1>
              <Sec1H1>Category<span style={{ color: '#9FA4A9', fontSize: '12px', marginLeft: '4px' }}>카테고리</span></Sec1H1>
              <List>
                <Icon>
                  <a href='#' style={{ textDecoration: 'none' }}>
                    <Img></Img>
                    <P>운통장</P>
                  </a>
                </Icon>
                <Icon>
                  <a href='#' style={{ textDecoration: 'none' }}>
                    <Img></Img>
                    <P>예약</P>
                  </a>
                </Icon>
                <Icon>
                  <a href='#' style={{ textDecoration: 'none' }}>
                    <Img></Img>
                    <P>이벤트</P>
                  </a>
                </Icon>
              </List>
            </Sec1>

            {/* 고객센터 */}
            <Sec2>
              <Sec1H1>Customer Center<span style={{ color: '#9FA4A9', fontSize: '12px', marginLeft: '4px' }}>고객센터</span></Sec1H1>
              <List>
                <Icon>
                  <a href='#'>
                    <Img></Img>
                    <P>NOTICE</P>
                  </a>
                </Icon>
                <Icon>
                  <a href='#'>
                    <Img></Img>
                    <P>FAQ</P>
                  </a>
                </Icon>
                <Icon>
                  <a href='#'>
                    <Img></Img>
                    <P>FREE</P>
                  </a>
                </Icon>
              </List>
            </Sec2>
            <Sec3>
              <Weekley>
                <Sec1H1>인기검색어<span style={{ color: '#FF2A6D', fontSize: '14px', marginLeft: '4px' }}>weekley best</span></Sec1H1>
                <WeekBox>
                  {data.map(x => {
                    return (
                      <WeekList key={x.pickId}>{x.content}</WeekList>
                    )
                  })}
                </WeekBox>
              </Weekley>
            </Sec3>
            <Sec4>
              <H4>고객센터</H4>
              <CsBox>
                <Cs1>
                  <CsSpan>운영시간</CsSpan>10:00 ~ 17:00 (주말, 공휴일 휴무)
                </Cs1>
                <Cs1>
                  <CsSpan>점심시간</CsSpan>12:00 ~ 13:30
                </Cs1>
              </CsBox>
            </Sec4>
          </Inner>
        </Container>
      </ModalSideSubContainer>
    </ModalSideContainer>
  )
}

export default index