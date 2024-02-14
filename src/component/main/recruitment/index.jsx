import React from 'react'
import {
  Container,
  Recruitment,
  Soccer_Team,
  Soccer_Team_Box,
  Img,
  Soccer,
  Gure,
  Rescue,
  Icon,
  Icon_Box,
  Home,
  Home_Box,
  Home_Name,
  House
} from './styles'

const index = () => {
  return (
    <Container>
      <Recruitment>
        <Soccer_Team>
          <Img>
            <img src="svg/Team_1.svg"></img>
          </Img>
          <Soccer_Team_Box>
            <Soccer>김포 갓생 축구단</Soccer>
            <Rescue>
              현재 00명,포지션 0명 구합니다!
            </Rescue>
          </Soccer_Team_Box>
        </Soccer_Team>

        <Soccer_Team>
          <Img>
            <img src="svg/Team_2.svg"></img>
          </Img>
          <Soccer_Team_Box>
            <Soccer>모두의 축구단</Soccer>
            <Rescue>
              현재 00명,포지션 0명 급구!
            </Rescue>
          </Soccer_Team_Box>
        </Soccer_Team>

        <Soccer_Team>
          <Img>
            <img src="svg/Team_3.svg"></img>
          </Img>
          <Soccer_Team_Box>
            <Gure>구래동 슛돌이 축구단</Gure>
            <Rescue>
              축구를 사랑하는 초등학생을 구합니다(성별자유)
            </Rescue>

          </Soccer_Team_Box>
        </Soccer_Team>
        
      </Recruitment>
      <Icon>
          <Icon_Box>
            <img src="svg/Home.svg"></img>
            <House>예약</House>
          </Icon_Box>
          <Icon_Box>
            <img src="svg/Home.svg"></img>
            <House>마이</House>
          </Icon_Box>
          <Home_Box>
            <Home>
              <House>
                <img src="svg/Home_black.svg"></img>
              </House>
            </Home>
            <Home_Name>홈</Home_Name>
          </Home_Box>
          <Icon_Box>
            <img src="svg/Home.svg"></img>
            <House>찜</House>
          </Icon_Box>

          <Icon_Box>
            <img src="svg/Home.svg"></img>
            <House>카테고리</House>
          </Icon_Box>
        </Icon>

    </Container>
  )
}

export default index