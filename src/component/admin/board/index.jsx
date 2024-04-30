import React, { useState, useEffect } from 'react'
import { FaRegCalendarAlt } from "react-icons/fa";
import moment from 'moment';
import 'react-calendar/dist/Calendar.css';
import { useAdminCalendarStore } from '../../../store/Calendar';
import { useAdminBoardModifyStore } from '../../../store/Admin';
import { adminBoardListText, adminBoardCategoryText } from '../../../constants/text/admin/Board'
import { freeBoardTabText } from '../../../constants/text/api/Board'
import { useBoardListQuery } from '../../../hooks/queries/admin/Board'
import Chart from '../../../function/chart'

const index = () => {

    const [searchSelect, setSearchSelect] = useState(false); // 검색어 모달

    const [info, setInfo] = useState({
        searchType: '제목',
        search: '',
        category: '전체',
        sub_category: '',
        createDateStart: moment('2023-03-01').format("YYYY-MM-DDTHH:mm:ss"),
        createDateEnd: moment(new Date()).format("YYYY-MM-DDTHH:mm:ss")
    });

    const [chartData, setChartData] = useState([]);

    const [categorySelect, setCategorySelect] = useState(Array(3).fill(false).map((_, index) => index === 0));
    const [subCategorySelect, setSubCategorySelect] = useState(Array(4).fill(false).map((_, index) => index === 0));

    const { data, isSuccess, refetch } = useBoardListQuery(info);

    const openAdminCalendarModal = useAdminCalendarStore((state) => state.setOpen);

    const flagAdminCalendarModal = useAdminCalendarStore((state) => state.setFlag);

    const startDate = useAdminCalendarStore((state) => state.startDate);

    const endDate = useAdminCalendarStore((state) => state.endDate);

    const setOpenAdminBoardModifyModal = useAdminBoardModifyStore((state) => state.setOpen);
    const setInfoAdminBoardModifyModal = useAdminBoardModifyStore((state) => state.setInfo);

    useEffect(() => {
        if (startDate == '') {
            return;
        } else setInfo({ ...info, createDateStart: moment(startDate).format("YYYY-MM-DDTHH:mm:ss") });
    }, [startDate]);

    useEffect(() => {
        if (endDate == '') {
            return;
        } else setInfo({ ...info, createDateEnd: moment(endDate).format("YYYY-MM-DDTHH:mm:ss") });
    }, [endDate]);

    useEffect(() => {
        if(data){
            let arr = Array(12).fill(0);
            data.map(x => {
                arr[Number(moment(x.createDate).format("MM"))-1]++;
            });
            setChartData(arr);
        }
    }, [data]); 

    return isSuccess && (
        <div onClick={() => {
            if (searchSelect) {
                setSearchSelect(false);
            }
        }}>
 
            <div className='mb-5 text-xs rounded-lg'>
                <div className='flex items-center mb-2'>
                    <div className='flex-1 font-bold text-base'>게시판 검색</div>
                    <div className='px-3 py-1 rounded text-xs bg-m text-white cursor-pointer' onClick={() => refetch()}>검색</div>
                </div>


                <div className='border-y-2 border-grey04'>
                    <div className='flex border-b border-grey06 items-center'>
                        <div className='w-28 bg-grey07 pl-2 py-4 border-r border-grey07 font-bold'>검색어</div>
                        <div className='pl-2 flex'>
                            <div className='border relative flex items-center w-20 mr-2 text-xxs px-1 cursor-pointer' onClick={() => setSearchSelect(true)}>
                                {searchSelect && <div className='absolute shadow-custom rounded-lg bg-white top-8 left-0 flex-col z-50 w-full flex justify-center p-2'>
                                    {adminBoardListText.map(x => {
                                        return (
                                            <div key={x.id} className='py-1' onClick={() => {
                                                setSearchSelect(false);
                                                setInfo({ ...info, searchType: x.content });
                                            }}>{x.content}
                                            </div>
                                        )
                                    })}
                                </div>}
                                <div className='flex-1 whitespace-nowrap'>{info.searchType}</div>
                                <img src="/svg/Arrow_bottom.svg" className='w-3 absolute right-1' />
                            </div>
                            <input className='border px-2 py-1' onChange={(e) => setInfo({ ...info, search: e.target.value })} />
                        </div>
                    </div>
                    <div className='flex border-b border-grey06'>
                        <div className='flex flex-1 items-center'>
                            <div className='w-28 bg-grey07 flex pl-2 py-4 border-r border-grey07 font-bold'>카테고리</div>
                            <div className='pl-2 flex items-center'>
                                {adminBoardCategoryText.map((x, index) => {
                                    return (
                                        <div className='flex' key={x.id}>
                                            <div className='border rounded-full w-4 h-4 mr-1 flex justify-center items-center cursor-pointer'
                                                onClick={() => {
                                                    let arr = Array(3).fill(false);
                                                    arr[index] = true;
                                                    setCategorySelect(arr);
                                                    setInfo({ ...info, category: x.content })
                                                }}>
                                                {categorySelect[index] && <div className='bg-grey10 rounded-full w-2 h-2'></div>}
                                            </div>
                                            <div className='mr-2'>{x.content}</div>
                                        </div>
                                    )
                                })}

                            </div>
                        </div>
                        {categorySelect[3] && <div className='flex flex-1 items-center'>
                            <div className='w-28 bg-grey07 flex pl-2 py-4 font-bold'>서브 카테고리</div>
                            <div className='pl-2 flex'>
                                {freeBoardTabText.map((x, index) => {
                                    return (
                                        <div className='flex mr-2' key={x.id}>
                                            <div className='border rounded-full w-4 h-4 mr-2 flex justify-center items-center cursor-pointer'
                                                onClick={() => {
                                                    let arr = Array(4).fill(false);
                                                    arr[index] = true;
                                                    setSubCategorySelect(arr);
                                                    setInfo({ ...info, sub_category: x.content });
                                                }}>
                                                {subCategorySelect[index] && <div className={'rounded-full w-2 h-2 bg-grey10'}></div>}
                                            </div>
                                            <div>{x.content}</div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>}
                    </div>
                    <div className='flex'>
                        <div className='w-28 bg-grey07 flex items-center pl-2 py-4 border-r border-grey07 font-bold'>생성일</div>
                        <div className='flex-1 flex items-center pl-2'>
                            <FaRegCalendarAlt className='cursor-pointer' onClick={() => { flagAdminCalendarModal("start"); openAdminCalendarModal(true) }} />
                            <div className='border ml-2 px-2 py-1 w-32 min-h-6 cursor-pointer' onClick={() => { flagAdminCalendarModal("start"); openAdminCalendarModal(true); }} disabled>{startDate == '' ? '' : moment(startDate).format("YYYY-MM-DD")}</div>
                            <div className='mx-2'>~</div>
                            <FaRegCalendarAlt className='cursor-pointer' onClick={() => { flagAdminCalendarModal("end"); openAdminCalendarModal(true); }} />
                            <div className='border ml-2 px-2 py-1 w-32 min-h-6 cursor-pointer' onClick={() => { flagAdminCalendarModal("end"); openAdminCalendarModal(true); }} disabled>{endDate == '' ? '' : moment(endDate).format("YYYY-MM-DD")}</div>
                        </div>
                    </div>
                </div>
            </div>

        {chartData.length == 0 ? '' : <div className='my-8'>
            <div className='w-full border'>
                <Chart chartData={chartData}/>
            </div>
            <div className='flex justify-end'>설명</div>
        </div>}
            <div className='flex text-xs mb-2'>
                <div>전체</div>
                <div className='ml-1 font-bold'>{data.length}명</div>
                <div className='mx-2'>/</div>
                <div>검색</div>
                <div className='ml-1 font-bold'>{data.length}명</div>
            </div>
            <div className='overflow-x-scroll flex text-center text-xs' style={{ width: window.innerWidth - 305 }}>
                <div>
                    <div className='flex bg-grey04 text-white py-2'>
                        <div className='w-12'>번호</div>
                        <div className='w-28'>제목</div>
                        <div className='w-24'>내용</div>
                        <div className='w-28'>카테고리</div>
                        <div className='w-24'>서브 카테고리</div>
                        <div className='w-32'>댓글수</div>
                        <div className='w-20'>조회수</div>
                        <div className='w-28'>생성일</div>
                        {/* <div className='w-28'>탈퇴일</div> */}
                        {/* <div className='w-20'>메일 발송</div> */}
                        <div className='w-20'>수정</div>
                        <div className='w-48'>비고</div>
                    </div>
                    {data.length == 0 ? <div className='flex items-center justify-center font-bold' style={{ height: "400px" }}>데이터가 없습니다.</div>
                        :
                        data.map(x => {
                            return (
                                <div className='border-b flex'>
                                    <div className='w-12 py-1 border-r flex justify-center items-center'>{x.boardId}</div>
                                    <div className='w-28 py-1 border-r flex justify-center items-center'>{x.title}</div>
                                    <div className='w-24 py-1 border-r flex justify-center items-center'>{x.content}</div>
                                    <div className='w-28 py-1 border-r flex justify-center items-center'>{x.category}</div>
                                    <div className='w-24 py-1 border-r flex justify-center items-center'>{x.sub_category}</div>
                                    <div className='w-32 py-1 border-r flex justify-center items-center'>{x.commentCount}</div>
                                    <div className='w-20 py-1 border-r flex justify-center items-center'>{x.hits}</div>
                                    <div className='w-28 py-1 border-r flex justify-center items-center'>{moment(x.createDate).format("YYYY-MM-DD")}</div>
                                    <div className='w-20 py-1 border-r flex justify-center items-center'>
                                        <div className='border rounded-lg px-2 py-0.5 cursor-pointer' onClick={() => { setOpenAdminBoardModifyModal(true); setInfoAdminBoardModifyModal(x) }}>수정</div>
                                    </div>
                                    <div className='w-48 py-1 flex-1 flex justify-center items-center'>
                                        <div></div>
                                    </div>
                                </div>
                            )
                        })}
                </div>
            </div>
        </div>
    )
}

export default index