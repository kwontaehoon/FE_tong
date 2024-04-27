import React, { useEffect } from 'react'
import ReservationModify from './admin/ReservationModify'
import Category from './api/category'
import Expire from './api/expire'
import ExpireLogin from './api/expire/expireLogin'
import LoginFlag from './api/login'
import Term from './api/account/term'
import Privacy from './api/account/privacy'
import ReservationCancel from './api/reservationCancel'
import Recomments from './api/recomments'
import Calendar from './admin/Calendar'
import AdminUserModify from './admin/UserModify'
import AdminBoardModify from './admin/BoardModify'
import { useCategoryStore } from '../store/Category';
import { useExpireLoginStore, useExpireStore } from '../store/Expire';
import { useLoginStore } from '../store/LoginFlag'
import { usePrivacyStore, useTermStore } from '../store/Account'
import { useReservationCancelStore } from '../store/ReservationCancel'
import { useRecommentsStore } from '../store/Recomments'
import { useFetchNoteStore } from '../store/FetchNote'
import { useAdminCalendarStore } from '../store/Calendar'
import { useAdminUserModifyStore, useAdminBoardModifyStore } from '../store/Admin'

const index = () => {

  const categoryModal = useCategoryStore((state) => state.open);
  const expireModal = useExpireStore((state) => state.open);
  const expireLoginModal = useExpireLoginStore((state) => state.open);
  const loginModal = useLoginStore((state) => state.open);
  const termModal = useTermStore((state) => state.open);
  const privacyModal = usePrivacyStore((state) => state.open);
  const reservationCancelModal = useReservationCancelStore((state) => state.open);
  const recommentsModal = useRecommentsStore((state) => state.open);
  const calendarModal = useAdminCalendarStore((state) => state.open);
  const adminUserModifyModal = useAdminUserModifyStore((state) => state.open);
  const adminBoardModifyModal = useAdminBoardModifyStore((state) => state.open);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    if(
      // !fetchNoteModal &&
      !adminUserModifyModal && (categoryModal == "none" || !categoryModal)){
      document.body.style.overflow = 'auto';
    }
  }, [categoryModal,
    // fetchNoteModal,
    adminUserModifyModal]);

  return (
    <>
        {/* <ReservationModify /> */}
        {categoryModal == "none" ? '' : <Category />}
        {expireModal && <Expire />}
        {loginModal && <LoginFlag />}
        {termModal && <Term />}
        {privacyModal && <Privacy />}
        {reservationCancelModal && <ReservationCancel />}
        {expireLoginModal && <ExpireLogin />}
        {recommentsModal && <Recomments />}
        {/* {fetchNoteModal && <FetchNote />} */}
        {calendarModal && <Calendar />}
        {adminUserModifyModal && <AdminUserModify />}
        {adminBoardModifyModal && <AdminBoardModify />}
    </>
  )
}

export default index