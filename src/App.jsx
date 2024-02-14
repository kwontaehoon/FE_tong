import React from 'react'
import { Outlet } from 'react-router-dom'
import Modal from './modal'

const App = () => {

  return (
    <>
      <Modal />
      <Outlet />
    </>
  )
}

export default App