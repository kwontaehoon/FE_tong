import React from 'react'
import {Container,
  Recruitment,
  Soccer_Team,
  Soccer_Team_Box,
  Img,
  Soccer,
  Gure,
  Rescue
} from './styles'

const index = () => {
  return (
    <Container>
      <Recruitment>
        <Soccer_Team>
          <Img>
          <img src= "svg/Team_1.svg"></img>
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
          <img src= "svg/Team_2.svg"></img>
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
          <img src= "svg/Team_3.svg"></img>
          </Img>
          <Soccer_Team_Box>
            <Gure>구래동 슛돌이 축구단</Gure>
            <Rescue>
            축구를 사랑하는 초등학생을 구합니다(성별자유)
            </Rescue>
          </Soccer_Team_Box>
        </Soccer_Team>
      </Recruitment>
    </Container>
  )
}

export default index