import React, { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Modal from './modal'
import Introduce from './component/introduce'
import { useCategoryStore } from './store/Category'
import Category from './modal/api/category'
import { useFetchNoteStore } from './store/FetchNote'

const App = () => {

  const pathName = useLocation().pathname;
  const openFetchNoteModal = useFetchNoteStore((state) => state.setOpen);

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });

    if(window.innerWidth < 720){
      openFetchNoteModal(true);
    }

    if(pathName.includes('admin')){
      openFetchNoteModal(false);
    }
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