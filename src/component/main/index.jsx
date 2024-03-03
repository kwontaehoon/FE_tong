import React from 'react'
import Header from './header'
import Banner from'./banner'
import Help from './help'
import Reservation from './reservation'
import Pick from './pick'
import Recruitment from './recruitment'
import Information from './information'
import Navi from '../../function/navi'
import { useBannerListQuery, usePickListQuery, useReservationListQuery } from '../../hooks/queries/api/Main'
import Spinner from '../../function/spinner'

const index = () => {

  const { data: bannerList, isSuccess: bannerSuccess } = useBannerListQuery();
  const { data: reservationList, isSuccess: reservationSuccess } = useReservationListQuery();
  const { data: pickList, isSuccess: pickSuccess } = usePickListQuery();

  return (
    <div className='p-5 pt-0 bg-bg'>
      <Header />
      {bannerSuccess && pickSuccess && reservationSuccess ? 
      <div>
        <Banner data={bannerList} />
        <Help />
        <Reservation data={reservationList} />
        <Pick data={pickList} />
        <Recruitment />
        <Information />
      </div> : <Spinner />}
      <div className='h-24' />
      <Navi />
    </div>
  )
}

export default index