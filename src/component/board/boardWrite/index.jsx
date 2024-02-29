import React, { useState, useEffect } from 'react'
import Header from '../../../function/header'
import { Container } from './styles'
import { useBoardWriteMutation } from '../../../hooks/queries/api/Board'
import { useLocation, useNavigate } from 'react-router-dom'
import { getToken } from '../../../utill/GetToken'

const index = () => {

  const state = useLocation().state;

  const navigate = useNavigate();

  const [info, setInfo] = useState({
    title: '',
    content: '',
    user: {
      userId: getToken().userId
    },
    category: state == '팀' ? '팀' : '용병'
  });

  const { mutateAsync: write } = useBoardWriteMutation();

  useEffect(()=>{
    window.scrollTo({
      top: 0,
  })
}, []);

  return (
    <Container>
      <Header title="글쓰기" check 
        func={async()=>{
          await write(info);
          navigate(-1);
        }}/>

      <div className='mt-10 border-b px-4 pb-4 text-lg'>
        <input placeholder='제목' onChange={(e)=>setInfo({...info, title: e.target.value})} />
      </div>
      <textarea className='w-full h-full mt-4 px-4'
        placeholder='지역의 축구/풋살, 소식, 정보를 공유해보세요.'
        onChange={(e)=>setInfo({...info, content: e.target.value})} />
    </Container>
  )
}

export default index