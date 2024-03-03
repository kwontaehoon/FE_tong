import React from 'react'
import { useNavigate } from 'react-router-dom'
import { loginFlag } from '../../utill/LoginFlag';

const Header = ({ noBtn, noArrow, noClose, padding, title, search, wish, func, check, closeUrl }) => {

  const navigate = useNavigate();

  return (
    <div className={'h-12 flex items-center justify-center bg-white relative' + (padding ? ' p-5' : '')}>
      <div className={'absolute' + (padding ? ' left-5' : ' left-0')}>
        {!noBtn && !noArrow && <img src="/svg/Header_arrow_left.svg" onClick={() => navigate(-1)} />}
      </div>
      <div className='text-lg font-bold text-center whitespace-nowrap'>{title}</div>
      <div className={'absolute' + (padding ? ' right-5' : ' right-0')}>
        {!noClose && !noBtn && !wish?.open && !search && !check && <img src="/svg/close.svg"
          onClick={() =>
            navigate(closeUrl, { replace: true })
            // navigate(`/${closeUrl}`, { replace: true })
          }
        />}
        {loginFlag() && wish?.open && <div onClick={func}>
          {wish.data ? <img src='/svg/heart_red.svg' /> : <img src='/svg/heart_2.svg' />}
          </div>}
        
        {search && <img src='/svg/search.svg' onClick={()=>navigate("/search")} />}

        {check && <img src='/svg/check.svg' onClick={func} />}
      </div>
    </div>
  )
}

export default Header