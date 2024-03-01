import React from 'react'
import { Container } from './styles'
import Header from '../../../function/header'
import { useMyWishListQuery } from '../../../hooks/queries/api/Wish'
import { getToken } from '../../../utill/GetToken'
import Spinner from '../../../function/spinner'

const index = () => {

  const { data, isSuccess } = useMyWishListQuery({ users: { userId: getToken().userId } });

  return isSuccess ? (
    <Container>
      {data.map(x => {
        return (
          <div key={x.reservationId} className='flex bg-white p-4 rounded-lg'>
            <div className='flex-1 mr-4'>
              <img src={`https://tong-bucket.s3.ap-northeast-2.amazonaws.com/${x.reservationFiles[0].fileName}`} className='w-full h-full' />
            </div>
            <div className='flex-1'>
              <div className='text-lg font-bold'>{x.title}</div>
              <div className='flex'>
                <img src="/svg/Star.svg" />
                <div>{x.score}</div>
              </div>
              <div className='mt-8 text-sm'>{x.location}</div>
            </div>
          </div>
        )
      })}

    </Container>
  ) : <Spinner />
}

export default index