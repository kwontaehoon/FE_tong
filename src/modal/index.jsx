import React from 'react'
import ReservationModify from './admin/ReservationModify'
import Category from './api/main/Category'
import { useCategoryStore } from '../store/main/Category'

const index = () => {

  const categoryModal = useCategoryStore((state) => state.open);

  return (
    <>
        {/* <ReservationModify /> */}
        <Category />
    </>
  )
}

export default index