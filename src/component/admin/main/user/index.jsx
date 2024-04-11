import React, { useState } from 'react'
import { useUsersListQuery } from '../../../../hooks/queries/admin/Users'
import { FaRegCalendarAlt } from "react-icons/fa";
import moment from 'moment';
import { userListSearchText } from '../../../../constants/text/admin/User'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const index = () => {

    const [searchSelect, setSearchSelect] = useState(false); // 검색어 모달
    
    const [info, setInfo] = useState({
        searchType: '아이디',
        search: '',
        userType: '',
        expire: false,
        signUpDateStart: '',
        signUpDateEnd: ''
    });

    const { data, isSuccess } = useUsersListQuery();

    const [value, onChange] = useState(new Date());

    return isSuccess && (
        <div onClick={()=>{
            if(searchSelect){
                setSearchSelect(false);
            }
        }}>
            <div className='flex mb-5'>
                <div className='font-bold text-xl flex-1'>회원 리스트</div>
            </div>

            <div className='my-5 text-xs rounded-lg'>
                <div className='mb-1 font-extrabold'>회원 검색</div>

                <div className='border-y-2 border-grey04'>
                    <div className='flex border-b border-grey06 items-center'>
                        <div className='w-28 bg-grey07 pl-2 py-4 border-r border-grey07 font-bold'>검색어</div>
                        <div className='pl-2 flex'>
                            <div className='border flex items-center mr-2 text-xxs px-1 relative cursor-pointer' onClick={()=>setSearchSelect(true)}>
                                {searchSelect && <div className='absolute shadow-custom rounded-lg bg-white top-8 left-0 flex-col z-50 w-full flex justify-center p-2'>
                                    {userListSearchText.map(x => {
                                        return (
                                            <div key={x.id} className='' onClick={() => {
                                                setSearchSelect(false);
                                                setInfo({...info, searchType: x.content});
                                            }}>{x.content}
                                            </div>
                                        )
                                    })}
                                </div>}
                                <div>{info.searchType}</div>
                                <img src="/svg/Arrow_bottom.svg" className='w-3 ml-5' />
                            </div>
                            <input className='border px-2 py-1' onChange={(e)=>setInfo({...info, search: e.target.value})} />
                        </div>
                    </div>
                    <div className='flex border-b border-grey06'>
                        <div className='flex flex-1 items-center'>
                            <div className='w-28 bg-grey07 flex pl-2 py-4 border-r border-grey07 font-bold'>회원구분</div>
                            <div className='pl-2 flex items-center'>
                                <div className='border rounded-full w-4 h-4 mr-2 flex justify-center items-center cursor-pointer'>
                                    <div className='bg-grey10 rounded-full w-2 h-2'></div>
                                </div>
                                <div>전체</div>
                            </div>
                        </div>
                        <div className='flex flex-1 items-center'>
                            <div className='w-28 bg-grey07 flex pl-2 py-4 font-bold'>탈퇴구분</div>
                            <div className='pl-2 flex'>
                                <div className='flex mr-2'>
                                    <div className='border rounded-full w-4 h-4 mr-2 flex justify-center items-center cursor-pointer'
                                        onClick={()=>setInfo({...info, expire: false})}>
                                        <div className={'rounded-full w-2 h-2' + (info.expire ? '' : ' bg-grey10')}></div>
                                    </div>
                                    <div>미포함</div>
                                </div>
                                <div className='flex'>
                                    <div className='border rounded-full w-4 h-4 mr-2 flex justify-center items-center cursor-pointer'
                                        onClick={()=>setInfo({...info, expire: true})}>
                                        <div className={'rounded-full w-2 h-2' + (info.expire ? ' bg-grey10' : '')}></div>
                                    </div>
                                    <div>포함</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='w-28 bg-grey07 flex items-center pl-2 py-4 border-r border-grey07 font-bold'>가입일</div>
                        <div className='flex-1 flex items-center pl-2'>
                            <FaRegCalendarAlt className='cursor-pointer' onChange={onChange} value={value} />
                            <div className='border ml-2 px-2 py-3 w-32' />
                            <div className='mx-2'>~</div>
                            <FaRegCalendarAlt className='cursor-pointer' />
                            <div className='border ml-2 px-2 py-3 w-32' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='mb-8 flex justify-end'>
                <div className='p-2 rounded text-xs bg-m text-white cursor-pointer'>검색</div>
            </div>
            {/* <Calendar onChange={onChange} value={value} /> */}

            <div className='flex text-xs mb-2'>
                <div>전체</div>
                <div className='ml-1 font-bold'>{data.length}명</div>
                <div className='mx-2'>/</div>
                <div>검색</div>
                <div className='ml-1 font-bold'>{data.length}명</div>
            </div>
            <div className='overflow-x-scroll flex text-center text-xs' style={{ width: window.innerWidth - 320 }}>
                <div>
                    <div className='flex bg-grey04 text-white py-1'>
                        <div className='w-12'>번호</div>
                        <div className='w-28'>아이디</div>
                        <div className='w-24'>이름</div>
                        <div className='w-28'>닉네임</div>
                        <div className='w-28'>등급</div>
                        <div className='w-32'>최종 로그인</div>
                        <div className='w-20'>생년월일</div>
                        <div className='w-28'>가입일</div>
                        <div className='w-28'>탈퇴일</div>
                        <div className='w-20'>메일 발송</div>
                        <div className='w-20'>수정</div>
                    </div>
                    {data.map(x => {
                        return (
                            <div className='border-b flex'>
                                <div className='w-12 py-1 border-r flex justify-center items-center'>{x.userId}</div>
                                <div className='w-28 py-1 border-r flex justify-center items-center'>{x.id}</div>
                                <div className='w-24 py-1 border-r flex justify-center items-center'>{x.name}</div>
                                <div className='w-28 py-1 border-r flex justify-center items-center'>{x.nickName}</div>
                                <div className='w-28 py-1 border-r flex justify-center items-center'>일반등급</div>
                                <div className='w-32 py-1 border-r flex justify-center items-center'></div>
                                <div className='w-20 py-1 border-r flex justify-center items-center'>{x.birth}</div>
                                <div className='w-28 py-1 border-r flex justify-center items-center'>{moment(x.create_date).format("YYYY-MM-DD")}</div>
                                <div className='w-28 py-1 border-r flex justify-center items-center'></div>
                                <div className='w-20 py-1 border-r flex justify-center items-center'>
                                    <div className='border rounded-lg px-2 py-1 cursor-pointer'>메일</div>
                                </div>
                                <div className='w-12 py-1 flex-1 flex justify-center items-center'>
                                    <div className='border rounded-lg px-2 py-1 cursor-pointer'>수정</div>
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