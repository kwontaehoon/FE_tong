import React from 'react'
import { useNavigate } from 'react-router-dom'
import { loginFlag } from '../../utill/LoginFlag';

const Header = ({ noBtn, noArrow, noClose, padding, title, search, wish, func, check, arrowUrl, closeUrl, borderB }) => {

  const navigate = useNavigate();

  return (
    <div className={'h-12 flex items-center justify-center bg-white relative border-b border-grey07' + (padding ? ' p-5' : '') + (borderB ? ' border-b border-grey07' : '')}>
      <div className={'absolute' + (padding ? ' left-5' : ' left-0')}>
        {!noBtn && !noArrow && <img src="/svg/Header_arrow_left.svg" className='w-5' onClick={() => arrowUrl ? navigate(arrowUrl) : navigate(-1)} />}
      </div>
      <div className='text font-bold text-center whitespace-nowrap'>{title}</div>
      <div className={'absolute' + (padding ? ' right-5' : ' right-0')}>
        {!noClose && !noBtn && !wish?.open && !search && !check && <img src="/svg/close.svg" style={{width: '18px'}}
          onClick={() =>
            navigate(closeUrl, { replace: true })
            // navigate(`/${closeUrl}`, { replace: true })
          }
        />}
        {loginFlag() && wish?.open && <div onClick={func}>
          {wish.data ? <img src='/svg/heart_red.svg' className='w-4' /> : <img src='/svg/heart_2.svg' className='w-4' />}
          </div>}
        
        {search && <img src='/svg/search_grey.svg' className='w-5' onClick={()=>navigate("/search")} />}

        {check && <img src='/svg/check.svg' className='w-5' onClick={func} />}
      </div>
    </div>
  )
}

export default Header