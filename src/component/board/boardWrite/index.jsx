import React, { useState, useEffect } from 'react'
import Header from '../../../function/header'
import { Container } from './styles'
import { useBoardUpdateMutation, useBoardWriteMutation } from '../../../hooks/queries/api/Board'
import { useLocation, useNavigate } from 'react-router-dom'
import { getToken } from '../../../utill/GetToken'

const index = () => {

  const state = useLocation().state;
  console.log('state: ', state);

  const navigate = useNavigate();

  const [info, setInfo] = useState({
    title: state[0] == "수정" ? state[1].title : '',
    content: state[0] == "수정" ? state[1].content : '',
    user: {
      userId: getToken().userId
    },
    category: state == '팀' || state[2] == '팀' ? '팀' : '용병'
  });

  const { mutateAsync: write } = useBoardWriteMutation();

  const { mutateAsync: update } = useBoardUpdateMutation();

  return (
    <Container>
      <Header title="글쓰기" check 
        func={async()=>{
          if(state[0] == "수정"){
            const { user, ...infoToSend } = info;
            console.log("infoToSend: ", infoToSend);
            await update({...infoToSend, boardId: state[1].boardId});
          }else await write(info);
          
          navigate(-1);
        }}/>

      <div className='mt-10 border-b border-grey06 pb-4 text-lg'>
        <div className='mb-2'>제목</div>
        <input className='text-sm' placeholder={state[0] == "수정" ? state[1].title : '제목을 입력해주세요'} onChange={(e)=>setInfo({...info, title: e.target.value})} />
      </div>

      <div className='mt-10 pb-4 text-lg'>
        <div className='mb-2'>내용</div>
        <textarea className='w-full text-sm border border-grey06' style={{height: "400px"}}
          placeholder={state[0] == "수정" ? state[1].content : '지역의 축구/풋살, 소식, 정보를 공유해보세요.'}
          onChange={(e)=>setInfo({...info, content: e.target.value})} />
      </div>

      
    </Container>
  )
}

export default index