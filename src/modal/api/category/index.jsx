import React, { useEffect } from 'react'
import {
  Cover, Container, Inner, Bar, InfoLogin, Info, Pcoment, Right, Btn1, Btn2, Sec1, Sec2,
  Sec3, Sec1H1, List, Icon, Img, P, Weekley, WeekBox, WeekList, Sec4, H4, CsBox, Cs1, CsSpan
} from './styles';
import { ModalSideContainer, ModalSideSubContainer } from '../../../layout/ModalContainer'
import { useCategoryStore } from '../../../store/Category';
import { usePickListQuery } from '../../../hooks/queries/api/Main'
import { useNavigate } from 'react-router-dom';
import { loginFlag } from '../../../utill/LoginFlag'
import { getToken } from '../../../utill/GetToken'
import { useInfoQuery } from '../../../hooks/queries/api/Account';
import { profile } from '../../../function/profile';

const index = () => {

  const navigate = useNavigate();
  const categoryModal = useCategoryStore((state) => state.open);
  const openCategoryModal = useCategoryStore((state) => state.setOpen);
  const { data, isSuccess } = usePickListQuery();

  const { data: info, isSuccess: infoSuccess, refetch } = useInfoQuery({ userId: !getToken().userId ? 0 : getToken().userId });
  useEffect(()=>{
    refetch();
  }, []);

  return isSuccess && infoSuccess && (
    <ModalSideContainer $show={categoryModal}>
      <ModalSideSubContainer $show={categoryModal}>
        <Container>
          <Inner>
            <Bar>
              <img src="/svg/close.svg" style={{ width: "18px" }} onClick={() => openCategoryModal(false)} />
            </Bar>
            {/* 로긴박스 */}
            {loginFlag() ?
              <InfoLogin>
                <div style={{ width: "65px", height: "65px" }} className='rounded-full mr-2 flex justify-center items-center bg-bg'
                  onClick={()=>{ navigate("/mypage"); openCategoryModal("none"); }}>
                  {profile(info?.profile)}
                </div>
                <div className='flex justify-center flex-col'>
                  <div className='text-sm font-bold mb-six'>{info?.name}님</div>
                  <div className='text-grey05 text-xs font-bold'>{info?.email}</div>
                </div>
              </InfoLogin> : <Info>
                <Pcoment>로그인 해주세요 <span style={{ display: 'block' }}>회원이 아니신가요</span></Pcoment>
                <Right style={{ gap: '10px' }}>
                  <Btn1 onClick={() => {
                    navigate("/login");
                    openCategoryModal("none");
                  }}>로그인
                  </Btn1>
                  <Btn2 onClick={() => {
                    navigate("/signup");
                    openCategoryModal("none");
                  }}>회원가입
                  </Btn2>
                </Right>
              </Info>}

            {/* 카테고리 */}

            <Sec1>
              <Sec1H1>Category<span style={{ color: '#9FA4A9', fontSize: '12px', marginLeft: '4px' }}>카테고리</span></Sec1H1>
              <List>
                <Icon>
                  <div onClick={()=>{ navigate("/reservation"); openCategoryModal("none"); }}>
                    <Img><img src="/svg/main_reservation.svg" /></Img>
                    <P>예약</P>
                  </div>
                </Icon>
                <Icon>
                  <div onClick={()=>{ navigate("/reservation"); openCategoryModal("none"); }}>
                    <Img><img src="/svg/main_ground.svg" /></Img>
                    <P>운동장찾기</P>
                  </div>
                </Icon>
                <Icon>
                  <div onClick={()=>{ navigate("/event"); openCategoryModal("none"); }}>
                    <Img><img src="/svg/category_pick.svg" /></Img>
                    <P>이벤트</P>
                  </div>
                </Icon>
              </List>
            </Sec1>

            {/* 고객센터 */}
            <Sec2>
              <Sec1H1>Customer Center<span style={{ color: '#9FA4A9', fontSize: '12px', marginLeft: '4px' }}>고객센터</span></Sec1H1>
              <List style={{marginBottom: "12px"}}>
                <Icon>
                  <div onClick={()=>{ navigate("/board"); openCategoryModal("none"); }}>
                    <Img><img src="/svg/main_team.svg" /></Img>
                    <P>팀구하기</P>
                  </div>
                </Icon>
                <Icon>
                  <div onClick={()=>{ navigate("/mercenary"); openCategoryModal("none"); }}>
                    <Img><img src="/svg/main_mercenary.svg" /></Img>
                    <P>용병구하기</P>
                  </div>
                </Icon>
                <Icon>
                  <div onClick={()=>{ navigate("/notice"); openCategoryModal("none"); }}>
                    <Img><img src="/svg/category_notice.svg" /></Img>
                    <P>공지사항</P>
                  </div>
                </Icon>
              </List>
              <List>
                <Icon>
                  <div onClick={()=>{ navigate("/faq"); openCategoryModal("none"); }}>
                    <Img><img src="/svg/category_faq.svg" /></Img>
                    <P>F&Q</P>
                  </div>
                </Icon>
                <Icon>
                  <a href='#'>
                    <Img $none></Img>
                    <P></P>
                  </a>
                </Icon>
                <Icon>
                  <a href='#'>
                    <Img $none></Img>
                    <P></P>
                  </a>
                </Icon>
              </List>
            </Sec2>
            <Sec3>
              <Weekley>
                <Sec1H1>인기검색어<span style={{ color: '#FF2A6D', fontSize: '14px', marginLeft: '4px' }}>weekley best</span></Sec1H1>
                <WeekBox>
                  {[...new Set(data.map(x => x.title))].map((x, index) => {
                    return (
                      <WeekList key={index}>{x}</WeekList>
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