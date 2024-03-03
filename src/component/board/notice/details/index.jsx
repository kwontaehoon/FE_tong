import React from 'react'
import { Container } from './styles'
import Header from '../../../../function/header'

const index = () => {
  return (
    <Container>
        <Header noClose title="v5.13.0 업데이트 안내" />
        <div className='mt-12'>
            <div className='flex'>
                <div className='mr-2'>[업데이트]</div>
                <div>[2024.02.24]</div>
            </div>
            <div className='pt-2 pb-4 mb-4 border-b'>v5.13.0 업데이트 안내</div>
            <div>123</div>
        </div>
    </Container>
  )
}

export default index