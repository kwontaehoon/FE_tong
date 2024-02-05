import React from 'react'

const index = () => {

    const count = Array.from({ length: 4 }, () => "");

  return (
    <>
        <div className='mb-5 font-bold text-xl'>배너</div>
        <div className='flex flex-wrap'>
            {count.map((x, index) => {
                return <div className='border mr-5 mb-5 w-40 h-40'></div>
            })}
        </div>
    </>
  )
}

export default index