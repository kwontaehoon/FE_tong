import React from 'react'
import {Container,Recommendation,
  Recommendation_Box,
  Ground,
  PlayGround,
  Sun,
  Temperature,
  Weather,
  Soccer_Field,
  Img,
  Img_Name,
  Place,
  Soccer

} from './styles'

const index = () => {
  return (
    <Container>
      <Recommendation>
        <Recommendation_Box>
          <Ground></Ground>
          <PlayGround>
            <img src="svg/PlayGround.svg"></img>
            <Sun>
              <img src="svg/sun.svg"></img>
              <Temperature>현재날씨</Temperature>
              < Weather>23º</Weather>
            </Sun>
          </PlayGround>

        </Recommendation_Box>
        <Recommendation_Box>

          <Soccer_Field>
            <Img_Name>
            <Place>여기어때요</Place>
            <Soccer>장기동축구장</Soccer>
            </Img_Name>
            <Img>
            <img src = "svg/Ground-1.svg"></img>
            </Img>
          </Soccer_Field>

          <Soccer_Field>
            <Img_Name>
            <Place>여기어때요</Place>
            <Soccer>장기동축구장</Soccer>
            </Img_Name>
            <Img>
            <img src = "svg/Ground-2.svg"></img></Img>
            </Soccer_Field>
          <Soccer_Field>

            <Img_Name>
            <Place>여기어때요</Place>
            <Soccer>장기동축구장</Soccer>
            </Img_Name>
            <Img>
            <img src = "svg/Ground-3.svg"></img></Img>
          </Soccer_Field>
        </Recommendation_Box>
      </Recommendation>
    </Container>
  )
}

export default index