import React from 'react'
import Header from './header'
import Banner from'./banner'
import Help from './help'
import Reservation from './reservation'
import Pick from './pick'
import Recruitment from './recruitment'
import Information from './information'
import Navi from '../../function/navi'


const index = () => {

  return (
    <div className='p-5 pt-0 bg-bg' style={{marginBottom: "72px"}}>
      <Header />
      <Banner />
      <Help />
      <Reservation/>
      <Pick/>
      <Recruitment/>
      <Information/>
      <Navi />
    </div>
  )
}

export default index