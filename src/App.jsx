import React, { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Modal from './modal'
import Introduce from './component/introduce'
import { useCategoryStore } from './store/Category'
import Category from './modal/api/category'

const App = () => {

  const pathName = useLocation().pathname;
  const categoryModal = useCategoryStore((state) => state.open);

  useEffect(() => {
    window.scrollTo({
      top: 0,
    })
  }, [pathName]);

  return (
    <div>

      <div className='block md:hidden bg-bg h-screen'>
        <Modal />
        <Outlet />
      </div>

      {pathName.includes("admin") ?  <div>
        <Modal />
        <Outlet />
      </div>
      
      :

      <div className='md:flex hidden h-screen'>
        <div className='w-full mx-10 my-10 flex'>
          <div className='w-pc border-4 rounded-2xl overflow-scroll shadow-custom shrink-0'>
            <Modal />
            <Outlet />
          </div>
          <div className='md:ml-10 lg:ml-40'>
            <Introduce />
          </div>
        </div>
      </div>}
    </div>
  )
}

export default App