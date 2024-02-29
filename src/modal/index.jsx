import React, { useEffect } from 'react'
import ReservationModify from './admin/ReservationModify'
import Category from './api/main/category'
import { useCategoryStore } from '../store/main/Category';

const index = () => {

  const categoryModal = useCategoryStore((state) => state.open);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    if(categoryModal == "none" || !categoryModal){
      document.body.style.overflow = 'auto';
    }
  }, [categoryModal]);

  return (
    <>
        {/* <ReservationModify /> */}
        {categoryModal == "none" ? '' : <Category />}
    </>
  )
}

export default index