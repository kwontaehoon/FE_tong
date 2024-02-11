import React from 'react'
import {
  Container,
  Heather,
  Heather_Text,
  Ikon,
  TITLE,
  TITLE_Box,
  IMG,
  Img_Text,
  Lorem,
  Lorem_Text
} from './styles'


const index = () => {
  return (
    <Container>
      <Heather>
        <Ikon>
          <img src="svg/BackArrow.svg"></img>
        </Ikon>
        <Heather_Text>
          TITLE
        </Heather_Text>
        <Ikon>
          <img style={{ marginLeft: "110px" }} src="svg/search.svg"></img>
        </Ikon>
      </Heather>
      <TITLE_Box>
        <TITLE>TITLE</TITLE>
      </TITLE_Box>

      <IMG>
      <img src ="svg/heart.svg"></img>
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