import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header = ({noBtn, noArrow, padding, title}) => {

  const navigate = useNavigate();
  
  return (
    <div className={'h-12 flex items-center bg-white' + (padding ? ' p-5' : '')}>
      <div className='flex-1'>
        {!noBtn && !noArrow && <img src="/svg/Header_arrow_left.svg" onClick={()=>navigate(-1)} />}
      </div>
      <div className='flex-1 text-lg font-bold'>{title}</div>
      <div>
        {!noBtn && <img src="/svg/close.svg"
          onClick={()=>
          // navigate(`/${url}`, { replace: true })
            navigate(-1)
        }
          />}
      </div>
    </div>
  )
}

export default Header