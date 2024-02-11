import React from 'react'
import Header from './header'
import Banner from'./banner'
import Help from './help'
import Reservation from './reservation'
import Pick from './pick'
import Recruitment from './recruitment'


const index = () => {

  return (
    <div className='p-5 pt-0'>
      <Header />
      <Banner />
      <Help />
      <Reservation/>
      <Pick/>
      <Recruitment/>
    </div>
  )
}

export default index