import React from 'react'
import { useUsersListQuery } from '../../../../hooks/queries/admin/Users'
import moment from 'moment';

const index = () => {

    const { data, isSuccess } = useUsersListQuery();

    return isSuccess && (
        <div>
            <div className='flex mb-5'>
                <div className='font-bold text-xl flex-1'>회원</div>
            </div>
            {data.map(x => {
                return (
                    <div key={x.userId} className='border p-5 rounded-xl mb-4 lg:text-base text-sm'>
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
                            <div className='mr-2 font-bold'>접속수:</div>
                            <div>0</div>
                        </div>
                        <div className='flex'>
                            <div className='mr-2 font-bold'>가입일:</div>
                            <div>{moment(x.create_date).format("YYYY-MM-DD")}</div>
                        </div>
                        <div className='flex'>
                            <div className='mr-2 font-bold'>탈퇴일: </div>
                            <div>{x.expire}</div>
                        </div>
                    </div>
                )
            })}


        </div>
    )
}

export default index