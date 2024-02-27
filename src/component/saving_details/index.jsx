import React from 'react'
import Title from './title'
import Center from './center'
import Bottom from './bottom'
import Header from '../../function/header'
import { useBoardDetailsQuery } from '../../hooks/queries/api/Board'
import { useParams } from 'react-router-dom'

const index = () => {

  const { id } = useParams();
  console.log("id: ", id);

  // const { data } = useBoardDetailsQuery(id);
  // console.log("data: ", data);

  return (
    <div className='bg-bg'>
        <Header padding />
        <Title />
        <Center />
        <Bottom />
        <div className='bg-white flex items-center py-4 px-3'>
          <div className='flex relative w-full items-center'>
            <input className='bg-grey07 w-full h-14 rounded-full p-4'
              placeholder='답글을 입력하세요.'>
            </input>
            <img src="/svg/Send.svg" className='absolute right-4' />
          </div>
        </div>
    </div>
  )
}

export default index