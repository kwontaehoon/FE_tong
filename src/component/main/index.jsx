import React from 'react'
import Header from './header'
import Banner from'./banner'
import Help from './help'
import Reservation from './reservation'
import Pick from './pick'
import Recruitment from './recruitment'
import Information from './information'
import Recommendation from './recommendation'


const index = () => {

  return (
    <div className='p-5 pt-0 bg-bg-grey05'>
      <Header />
      <Banner />
      <Help />
      <Reservation/>
      <Pick/>
      <Recommendation/>
      <Recruitment/>
      <Information/>
    </div>
  )
}

export default index