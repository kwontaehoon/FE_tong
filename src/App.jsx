import React from 'react'
import { Outlet } from 'react-router-dom'
import Modal from './modal'

const App = () => {

  return (
    <div className='bg-bg h-screen'>
      <Modal />
      <Outlet />
    </div>
  )
}

export default App