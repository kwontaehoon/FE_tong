import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header = ({noBtn, noArrow, url, padding}) => {

  const navigate = useNavigate();
  
  return (
    <div className={'h-12 flex items-center bg-white' + (padding ? ' p-5' : '')}>
      <div className='flex-1'>
        {!noBtn && !noArrow && <img src="/svg/Header_arrow_left.svg" onClick={()=>navigate(`/${url}`)} />}
        </div>
      {!noBtn && <img src="/svg/close.svg" onClick={()=>navigate(`/${url}`, { replace: true })} />}
    </div>
  )
}

export default Header