import React, { useEffect, useState } from 'react'
import {
  Container, Recommendation,
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
  Popularity

} from './styles'
import { useReservationListQuery } from '../../../hooks/queries/api/Main'

const index = () => {

  const { data, isSuccess } = useReservationListQuery();
  console.log("reservation data: ", data);

  const [dataArr, setDataArr] = useState();
  console.log("dataArr: ", dataArr);

  useEffect(() => {
    if (data) {
      const arr = data.filter((_, index) => index !== 0);
      setDataArr(arr);
    }
  }, [isSuccess]);

  return isSuccess && (
    <Container>
      <Recommendation>
        <Recommendation_Box>
          <Ground>
            <Recommended_Ground>
              <Recommended_Ground_Bix>
                {data[0].title}
              </Recommended_Ground_Bix>
              <Arrow>
                <img src="svg/Right Arrow.svg"></img>
              </Arrow>
            </Recommended_Ground>

            <Explanation>
              {data[0].subTitle}
            </Explanation>
            <Star>
              <img src="svg/Star.svg"></img>
              <img src="svg/Star.svg"></img>
              <img src="svg/Star.svg"></img>
              <img src="svg/Star.svg"></img>
              <img src="svg/Star.svg"></img>
              <Horoscope>{data[0].score}</Horoscope>
            </Star>

          </Ground>
          <PlayGround>
            <img style={{ width: "151px", height: "110px", borderRadius: "20px" }} className="overflow-hidden" src={`https://tong-bucket.s3.ap-northeast-2.amazonaws.com/${data[0].reservationFiles[0].fileName}`} />
          </PlayGround>
          <Sun>
            <img src="svg/weather-sun.svg"></img>
            <Temperature>현재날씨</Temperature>
            < Weather>23º</Weather>
          </Sun>

        </Recommendation_Box>
        <Popularity>
          {dataArr?.map((x, index) => {
            return (
              <Soccer_Field key={index}>
                <Img_Name>
                  <Place>{x.title}</Place>
                  <Soccer>{x.subTitle}</Soccer>
                </Img_Name>
                <Img>
                  <img src={`https://tong-bucket.s3.ap-northeast-2.amazonaws.com/${x.reservationFiles[0].fileName}`} />
                </Img>
              </Soccer_Field>
            )
          })}
        </Popularity>
      </Recommendation>
    </Container>
  )
}

export default index