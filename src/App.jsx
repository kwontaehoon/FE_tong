import React, { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Modal from './modal'

const App = () => {

  const pathName = useLocation().pathname;

  useEffect(() => {
    window.scrollTo({
      top: 0,
    })
  }, [pathName]);

  return (
    <div className='bg-bg h-screen'>
      <Modal />
      <Outlet />
    </div>
  )
}

export default App