import React from 'react'
import Header from './heather'
import Check from './check'
import Reservation from './reservation' 

const index = () => {
  return (
    <div className='p-5'>
        <Header/>
        <Check/>
        <Reservation/>
    </div>
  )
}

export default index