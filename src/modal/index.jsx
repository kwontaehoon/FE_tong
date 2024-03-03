import React, { useEffect } from 'react'
import ReservationModify from './admin/ReservationModify'
import Category from './api/category'
import Expire from './api/expire'
import LoginFlag from './api/login'
import Term from './api/account/term'
import Privacy from './api/account/privacy'
import { useCategoryStore } from '../store/Category';
import { useExpireStore } from '../store/Expire';
import { useLoginStore } from '../store/LoginFlag'
import { usePrivacyStore, useTermStore } from '../store/Account'

const index = () => {

  const categoryModal = useCategoryStore((state) => state.open);
  const expireModal = useExpireStore((state) => state.open);
  const loginModal = useLoginStore((state) => state.open);
  const termModal = useTermStore((state) => state.open);
  const privacyModal = usePrivacyStore((state) => state.open);

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
        {expireModal && <Expire />}
        {loginModal && <LoginFlag />}
        {termModal && <Term />}
        {privacyModal && <Privacy />}
    </>
  )
}

export default index