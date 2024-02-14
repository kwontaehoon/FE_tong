import React from 'react'
import {Container,
    Weather_Box,
Weather,
Sunny,
Temperature} from './styles'

const index = () => {
  return (
   <Container>
    <Weather_Box>
        <img style={{width:"30px", margin: "10px"}} src="svg/weather-sun.svg"></img>
       <Weather>
        <Sunny>Lorem</Sunny>
        <Temperature>23°</Temperature>
       </Weather>
    </Weather_Box>
   </Container>
  )
}

export default index