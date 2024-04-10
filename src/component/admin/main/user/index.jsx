import React from 'react'
import { useUsersListQuery } from '../../../../hooks/queries/admin/Users'
import { FaRegCalendarAlt } from "react-icons/fa";
import moment from 'moment';

const index = () => {

    const { data, isSuccess } = useUsersListQuery();

    return isSuccess && (
        <div>
            <div className='flex mb-5'>
                <div className='font-bold text-xl flex-1'>회원 리스트</div>
            </div>

            <div className='border p-5 text-xs rounded-lg mb-20'>
                <div className='border-b pb-1 mb-5'>회원 검색</div>

                <div className='border'>
                    <div className='flex border-b items-center'>
                        <div className='w-28 bg-grey07 pl-2 py-3 border-r font-bold'>검색어</div>
                        <div className='pl-2 flex'>
                            <div className='border flex mr-2 rounded text-xxs px-1'>
                                <div>아이디</div>
                                <img src="/svg/Arrow_bottom.svg" className='w-3 ml-5' />
                            </div>
                            <input className='border rounded px-2'/>
                        </div>
                    </div>
                    <div className='flex border-b'>
                        <div className='flex flex-1 items-center'>
                            <div className='w-28 bg-grey07 flex pl-2 py-3 border-r font-bold'>회원구분</div>
                            <div className='pl-2 flex items-center'>
                                <div className='border rounded-full w-4 h-4 mr-2 flex justify-center items-center'>
                                    <div className='bg-grey10 rounded-full w-2 h-2'></div>
                                </div>
                                <div>전체</div>
                            </div>
                        </div>
                        <div className='flex flex-1 items-center'>
                            <div className='w-28 bg-grey07 flex pl-2 py-3 border-x font-bold'>탈퇴구분</div>
                            <div className='pl-2'>456</div>
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='w-28 bg-grey07 flex items-center pl-2 py-3 border-r font-bold'>회원가입일</div>
                        <div className='flex-1 flex items-center pl-2'>
                            <FaRegCalendarAlt />
                            <input className='border ml-2' />
                            <div className='mx-2'>~</div>
                            <FaRegCalendarAlt />
                            <input className='border ml-2' />
                        </div>
                    </div>
                </div>
            </div>
            <div>123</div>
            {data.map(x => {
                return (
                    <div key={x.userId} className='border p-5 rounded-lg mb-4 lg:text-base text-sm'>
                        <div className='flex'>
                            <div className='mr-2 font-bold'>회원 번호:</div>
                            <div>{x.userId}</div>
                        </div>
                        <div className='flex'>
                            <div className='mr-2 font-bold'>아이디:</div>
                            <div>{x.id}</div>
                        </div>
                        <div className='flex'>
                            <div className='mr-2 font-bold'>이름:</div>
                            <div>{x.name}</div>
                        </div>
                        <div className='flex'>
                            <div className='mr-2 font-bold'>이메일:</div>
                            <div>{x.email}</div>
                        </div>
                        <div className='flex'>
                            <div className='mr-2 font-bold'>생년월일:</div>
                            <div>{x.birth}</div>
                        </div>
                        <div className='flex'>
                            <div className='mr-2 font-bold'>가입일:</div>
                            <div>{moment(x.create_date).format("YYYY-MM-DD")}</div>
                        </div>
                    </div>
                )
            })}


        </div>
    )
}

export default index