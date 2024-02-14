import React from 'react'
import {
  Container,
  Heather,
  Heather_Text,
  TITLE_Box,
  IMG,
  Img_Text,
  Lorem,
  Lorem_Text,
  Score,
  Heart_Box,

} from './styles'


const index = () => {
  return (
    <Container>
      <Heather>
        <img src="svg/BackArrow.svg"></img>
        <Heather_Text>
          TITLE
        </Heather_Text>
        <img src="svg/search.svg"></img>
      </Heather>
      <TITLE_Box>
        TITLE
      </TITLE_Box>
      <IMG>
        <Heart_Box>
          <img src="svg/heart.svg"></img>
        </Heart_Box>
        <Score>
          <img style={{ marginRight: "6px" }} src="svg/Star.svg"></img>
          4.8</Score>
      </IMG>
      <Img_Text>
        <Lorem>
          Lorem ipsum dolor sit amet
        </Lorem>
        <Lorem_Text>
          Lorem ipsum dolor sit amet consectetur.
        </Lorem_Text>
      </Img_Text>

      <IMG></IMG>
      <Img_Text>
        <Lorem>
          Lorem ipsum dolor sit amet
        </Lorem>
        <Lorem_Text>
          Lorem ipsum dolor sit amet consectetur.
        </Lorem_Text>
      </Img_Text>

      <IMG></IMG>
      <Img_Text>
        <Lorem>
          Lorem ipsum dolor sit amet
        </Lorem>
        <Lorem_Text>
          Lorem ipsum dolor sit amet consectetur.
        </Lorem_Text>
      </Img_Text>

      <IMG></IMG>
      <Img_Text>
        <Lorem>
          Lorem ipsum dolor sit amet
        </Lorem>
        <Lorem_Text>
          Lorem ipsum dolor sit amet consectetur.
        </Lorem_Text>
      </Img_Text>

    </Container>
  )
}

export default index