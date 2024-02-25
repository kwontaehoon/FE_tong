import React, { useState, useEffect } from 'react'
import {
  Container,
  Weather_Box,
  Time_Container,
  Personnel_Box,
  Personnel,
  Max,
  Max_Box,
  Number,
} from './styles'
import WeatherFunc from '../../weather'
import { setMonth } from 'date-fns'
import { numberTwo } from '../../../utill/NumberTwo'
import { dayOfWeek } from '../../../utill/DayOfWeek'
import { morningClockText, afterNoonClockText } from '../../../constants/text/api/Reservation'

const index = ({info, setInfo}) => {
  console.log("info: ", info);

  const today = {
    year: new Date().getFullYear(), //오늘 연도
    month: new Date().getMonth() + 1, //오늘 월
    date: new Date().getDate(), //오늘 날짜
    day: new Date().getDay(), //오늘 요일
  };

  const [current, setCurrent] = useState(new Date());
  const [selectedYear, setSelectedYear] = useState(today.year); // 현재 선택된 연도
  const [selectedMonth, setSelectedMonth] = useState(today.month); // 현재 선택된 달

  const dateTotalCount = new Date(selectedYear, selectedMonth, 0).getDate(); // 선택된 연도, 달의 마지막 날짜

  const prevMonthEndDate = new Date(
    current.getFullYear(),
    current.getMonth() + 1,
    0
  ).getDate();

  const [selectDay, setSelectDay] = useState([]);
  const [morningClock, setMorningClock] = useState(Array(3).fill(false));
  const [afterNoonClock, setAfterNoonClock] = useState(Array(6).fill(false));

  console.log("morningClock: ", morningClock);
  console.log("afterNoonClock: ", afterNoonClock);

  const [selectBox, setSelectBox] = useState(false);

  useEffect(() => {
    setSelectDay(Array.from({ length: today.month == current.getMonth()+1 ?  dateTotalCount - today.date : prevMonthEndDate }, () => false));
    setInfo({...info, selectMonth: current.getMonth()+1});
  }, [current]);

  return (
    <Container>
      <Weather_Box>
        <WeatherFunc />
      </Weather_Box>
      <Time_Container>
        <div className='flex items-center mb-8'>
          <div className='flex relative mr-4 shrink-0'>
            {selectBox && <div className='absolute border bg-white top-8 left-0 flex-col z-50 w-full flex justify-center items-center py-2'>
              {Array.from({ length: 12-today.month+1 }).map((_, index)=>{
                return(
                  <div key={index} onClick={()=>{
                      setSelectBox(false);
                      setCurrent(setMonth(current, today.month+index-1));
                    }}>{today.month+index} 월
                  </div>
              )})}
            </div>}
            <div className='mr-2'>{current.getMonth()+1}월</div>
            <img src="/svg/Arrow_bottom.svg" onClick={()=>setSelectBox(!selectBox)}/>
          </div>
          <div className='border-grey07 border h-11 mr-6'></div>
          <div className='overflow-x-scroll flex'>
            <div className='flex'>
              {Array.from({ length: today.month == current.getMonth()+1 ?  dateTotalCount - today.date : prevMonthEndDate }).map((_, index) => {
                const day = new Date(
                  current.getFullYear(),
                  current.getMonth(),
                  today.month == current.getMonth()+1 ? index + today.date : index+1
                ).getDay();
                return (
                  <div key={index} className={'rounded-full' + (selectDay[index] ? ' bg-m text-white' : '')} style={{padding: "10px", marginRight: "10px"}}
                    onClick={()=>{
                      let arr = Array(selectDay.length).fill(false);
                      arr[index] = true;
                      setSelectDay(arr);
                      setInfo({...info, selectDay: today.month == current.getMonth()+1 ? index + today.date : index+1});
                    }}>
                    {today.month == current.getMonth()+1 ? <div>{numberTwo(index + today.date)}</div> : <div>{numberTwo(index+1)}</div>}
                    <div className={'mt-4' + (!selectDay[index] && day == 0 ? ' text-valid' : !selectDay[index] && day == 6 ? ' text-ms' : '' )}>{dayOfWeek(day)}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <div className='flex py-5 border-b border-grey07 mb-5'>
          <div className='flex-1 text-lg font-bold'>시간을 선택하세요.</div>
          <img src="/svg/Arrow_bottom.svg" />
        </div>
        <div>
          <div style={{marginBottom: '10px'}}>오전</div>
          <div className='flex flex-wrap mb-5'>
            {morningClockText.map((x, index) => {
              return (
                <div key={x.id} className='p-4 border rounded-lg mr-2 mb-2'
                  onClick={()=>{
                    const arr = Array(3).fill(false);
                    arr[index] = true;
                    setMorningClock(arr);
                  }}>{x.clock}
                </div>
              )
            })}
          </div>
          <div style={{marginBottom: '10px'}}>오후</div>
          <div className='flex flex-wrap'>
            {afterNoonClockText.map((x, index) => {
              return (
                <div key={x.id} className={'p-4 border rounded-lg mr-2 mb-2' + (afterNoonClock[index] ? '' : '')}
                  onClick={()=>{
                    const arr = Array(6).fill(false);
                    arr[index] = true;
                    setAfterNoonClock(arr);
                  }}>{x.clock}
                </div>
              )
            })}
          </div>
        </div>
      </Time_Container>

      <Personnel_Box>
        <Personnel>인원선택</Personnel>
        <Max_Box>
          <Max>(최대 5명)</Max>
        </Max_Box>
        <img src="/svg/Minus.svg" onClick={()=>info.peopleCount > 0 ? setInfo({...info, peopleCount: info.peopleCount-1}) : ''}></img>
        <Number>{info.peopleCount}명</Number>
        <img src="/svg/Plus.svg" onClick={()=>info.peopleCount < 5 ? setInfo({...info, peopleCount: info.peopleCount+1}) : ''}></img>
      </Personnel_Box>
    </Container>
  )
}

export default index