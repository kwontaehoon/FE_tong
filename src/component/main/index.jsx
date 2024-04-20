import React from 'react'
import Header from './header'
import Banner from'./banner'
import Help from './help'
import Reservation from './reservation'
import Pick from './pick'
import Recruitment from './recruitment'
import Information from './information'
import FreeBoard from './freeBoard'
import Navi from '../../function/navi'
import { useBannerListQuery, usePickListQuery, useReservationListQuery } from '../../hooks/queries/api/Main'
import { useBoardListQuery } from '../../hooks/queries/api/Board'
import Spinner from '../../function/spinner'

const index = () => {

  const { data: bannerList, isSuccess: bannerSuccess } = useBannerListQuery();
  const { data: reservationList, isSuccess: reservationSuccess } = useReservationListQuery();
  const { data: pickList, isSuccess: pickSuccess } = usePickListQuery();
  const { data: boardList, isSuccess: boardSuccess } = useBoardListQuery();

  return (
    <div className='pt-0 bg-bg'>
      <Header />
      {bannerSuccess && pickSuccess && reservationSuccess && boardSuccess ? 
      <div>
        <Banner data={bannerList} />
        <Help />
        <Reservation data={reservationList} />
        <Pick data={pickList} />
        <Recruitment data={boardList} />
        <FreeBoard data={boardList} />
        <Information />
      </div> : <Spinner />}
      <div className='h-24' />
      <Navi />
    </div>
  )
}

export default index