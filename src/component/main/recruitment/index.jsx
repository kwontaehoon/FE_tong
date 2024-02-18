import React from 'react'
import {
  Container,
  Recruitment,
  Soccer_Team,
  Soccer_Team_Box,
  Soccer,
  Rescue,
  Icon,
  Icon_Box,
  Home,
  House
} from './styles'

const index = () => {
  return (
    <Container>
      <Recruitment>
        <Soccer_Team>
            <img src="svg/Team_1.svg"></img>
          <Soccer_Team_Box>
            <Soccer>김포 갓생 축구단</Soccer>
            <Rescue>
              현재 00명,포지션 0명 구합니다!
            </Rescue>
          </Soccer_Team_Box>
        </Soccer_Team>

        <Soccer_Team>
            <img src="svg/Team_2.svg"></img>
          <Soccer_Team_Box>
            <Soccer>모두의 축구단</Soccer>
            <Rescue>
              현재 00명,포지션 0명 급구!
            </Rescue>
          </Soccer_Team_Box>
        </Soccer_Team>

        <Soccer_Team>
            <img src="svg/Team_3.svg"></img>
          <Soccer_Team_Box>
            <Soccer>구래동 슛돌이 축구단</Soccer>
            <Rescue>
              축구를 사랑하는 초등학생을 구합니다
            </Rescue>

          </Soccer_Team_Box>
        </Soccer_Team>

      </Recruitment>
      <Icon>
        <Icon_Box>
          <img src="/svg/Nav_reservation.svg"></img>
          <House>예약</House>
        </Icon_Box>
        <Icon_Box>
          <img src="/svg/Nav_mypage.svg"></img>
          <House>마이</House>
        </Icon_Box>
        <Icon_Box>
          <div className='absolute left-25% -top-6 flex justify-center items-center flex-col'>
            <Home>
              <img src="/svg/Nav_home.svg"></img>
            </Home>
            <House>홈</House>
          </div>
          <House></House>
        </Icon_Box>
        <Icon_Box>
          <img src="/svg/Nav_wish.svg"></img>
          <House>찜</House>
        </Icon_Box>

        <Icon_Box>
          <img src="/svg/Nav_category.svg"></img>
          <House>카테고리</House>
        </Icon_Box>
      </Icon>

    </Container>
  )
}

export default index