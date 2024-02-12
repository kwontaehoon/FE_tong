import React from 'react'
import Header from './header'
import Banner from './banner'
import Contents from './contents'
import Weather_Box from './weather'
import Facilities from './facilities'

const index = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Contents />
      <Weather_Box/>
      <Facilities/>
    </div>
  )
}

export default index