import React from 'react'
import { Container } from './styles'
import Header from '../../../../function/header'
import { useLocation } from 'react-router-dom'
import moment from 'moment'

const index = () => {

  const state = useLocation().state;
  console.log("state: ", state);
  
  return (
    <Container>
        <Header noClose title="v5.13.0 업데이트 안내" />
        <div className='mt-12'>
            <div className='flex items-center'>
                <div className='mr-2 test-sm text-ms font-500'>[{state.category}]</div>
                <div className='text-xs'>{moment(state.createDate).format("YYYY.MM.DD")}</div>
            </div>
            <div className='pt-2 pb-4 mb-4 border-b border-grey06 font-bold text-lg'>{state.title}</div>
            <div>{state.content}</div>
        </div>
    </Container>
  )
}

export default index