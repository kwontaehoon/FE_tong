import React from 'react'

const Header = ({noBtn}) => {
  return (
    <div className='h-12 flex items-center mb-4'>
      {!noBtn && <div className='flex-1'>12</div>}
      {!noBtn && <div>13</div>}
    </div>
  )
}

export default Header