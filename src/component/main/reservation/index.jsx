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
  Soccer,
  Recommended_Ground,
  Explanation,
  Star,
  Horoscope,
  Arrow,
  Recommended_Ground_Bix,
  Soccer_Field_Box

} from './styles'

const index = () => {
  return (
    <Container>
      <Recommendation>
        <Recommendation_Box>
          <Ground>
            <Recommended_Ground>
              < Recommended_Ground_Bix>
                추천운통장
              </Recommended_Ground_Bix>
              <Arrow>
                <img src="svg/Right Arrow.svg"></img>
              </Arrow>
            </Recommended_Ground>


            <Explanation>
              김포 마산 축구장
              금일예약*인원 가능
            </Explanation>
            <Star>
              <img src="svg/Star.svg"></img>
              <img src="svg/Star.svg"></img>
              <img src="svg/Star.svg"></img>
              <img src="svg/Star.svg"></img>
              <img src="svg/Star.svg"></img>
              <Horoscope>4.8</Horoscope>
            </Star>

          </Ground>
          <PlayGround>
            <img src="svg/PlayGround.svg"></img>
            <Sun>
              <img src="svg/sun.svg"></img>
              <Temperature>현재날씨</Temperature>
              < Weather>23º</Weather>
            </Sun>
          </PlayGround>

        </Recommendation_Box>
        <Soccer_Field_Box>

          <Soccer_Field>
            <Img_Name>
              <Place>여기어때요</Place>
              <Soccer>장기동축구장</Soccer>
            </Img_Name>
            <Img>
              <img src="svg/Ground-1.svg"></img>
            </Img>
          </Soccer_Field>

          <Soccer_Field>
            <Img_Name>
              <Place>여기어때요</Place>
              <Soccer>장기동축구장</Soccer>
            </Img_Name>
            <Img>
              <img src="svg/Ground-2.svg"></img></Img>
          </Soccer_Field>
          <Soccer_Field>

            <Img_Name>
              <Place>여기어때요</Place>
              <Soccer>장기동축구장</Soccer>
            </Img_Name>
            <Img>
              <img src="svg/Ground-3.svg"></img></Img>
          </Soccer_Field>
        </Soccer_Field_Box>
      </Recommendation>
    </Container>
  )
}

export default index