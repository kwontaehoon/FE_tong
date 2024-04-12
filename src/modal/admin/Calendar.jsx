import React, { useState } from 'react'
import { ModalContainer, ModalSubContainer } from '../../layout/ModalContainer'
import { useLocation } from 'react-router-dom'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useAdminCalendarStore } from '../../store/Calendar';

const index = () => {

    const pathName = useLocation().pathname;

    const [selectDate, setSelectDate] = useState();
    console.log('selectDate: ', selectDate);

    const openAdminCalendarModal = useAdminCalendarStore((state) => state.setOpen);

    return (
        <ModalContainer $admin={pathName.includes('admin')}>
            <ModalSubContainer $admin={pathName.includes('admin')}>
                <div>
                    <div className='flex justify-end mb-2'>
                        <img src="/svg/close.svg" className='cursor-pointer' onClick={()=>openAdminCalendarModal(false)} />
                    </div>
                    <Calendar className='border'
                        onChange={setSelectDate} 
                        value={selectDate}
                        onClickDay={(e)=>{
                            if(calendarModal.type == 'regular' && (moment(e).diff(new Date(), 'day') < 1)){
                                setCalendarModal({...calendarModal, open: false});
                                setNormalAlert({...normalAlert, open: true, content: '조회 기간을 다시 설정해 주세요.', isReload: () => setCalendarModal({...calendarModal, open: true})});
                            }
                            // else if(calendarModal.type == 'regular' && moment(e).day() == 0 || moment(e).day() == 6){
                            //     setCalendarModal({...calendarModal, open: false});
                            //     setNormalAlert({...normalAlert, open: true, content: '조회 기간을 다시 설정해 주세요.', isReload: () => setCalendarModal({...calendarModal, open: true})});
                            // }
                            else{
                                setCalendarModal(prevState => ({...prevState, open: false, startDate: calendarModal.flag == 'start' ? e :  calendarModal.startDate, endDate: calendarModal.flag == 'end' ? e : calendarModal.endDate}))
                            }
                            }} />
                </div>
            </ModalSubContainer>
        </ModalContainer>
    )
}

export default index