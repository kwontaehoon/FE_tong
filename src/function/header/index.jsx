import React from 'react'
import { useNavigate } from 'react-router-dom'
import { loginFlag } from '../../utill/LoginFlag';

const Header = ({ noBtn, noArrow, padding, title, search, wish, func }) => {

  const navigate = useNavigate();

  return (
    <div className={'h-12 flex items-center bg-white justify-between' + (padding ? ' p-5' : '')}>
      <div>
        {!noBtn && !noArrow && <img src="/svg/Header_arrow_left.svg" onClick={() => navigate(-1)} />}
      </div>
      <div className='text-lg font-bold'>{title}</div>
      <div>
        {!noBtn && !wish?.open && <img src="/svg/close.svg"
          onClick={() =>
            // navigate(`/${url}`, { replace: true })
            navigate(-1)
          }
        />}
        {loginFlag() && !noBtn && wish?.open && <div onClick={func}>
          {wish.data ? <img src='/svg/heart_red.svg' /> : <img src='/svg/heart_2.svg' />}
          </div>}
      </div>
    </div>
  )
}

export default Header