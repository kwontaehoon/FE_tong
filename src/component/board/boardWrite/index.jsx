import React, { useState, useEffect } from 'react'
import Header from '../../../function/header'
import { Container } from './styles'
import { useBoardUpdateMutation, useBoardWriteMutation } from '../../../hooks/queries/api/Board'
import { useLocation, useNavigate } from 'react-router-dom'
import { getToken } from '../../../utill/GetToken'
import { freeBoardTabText } from '../../../constants/text/api/Board'

const index = () => {

  const state = useLocation().state;

  const navigate = useNavigate();

  console.log("state: ", state);

  const [info, setInfo] = useState({
    title: state[0] == "수정" ? state[1].title : '',
    content: state[0] == "수정" ? state[1].content : '',
    user: {
      userId: getToken().userId
    },
    category: (state == '팀' || state[2] == '팀') ? '팀' : (state == '용병' || state[2] == '용병') ? '용병' : '자유'
  });

  const [freeBoardFilter, setFreeBoardFilter] = useState(Array(freeBoardTabText.length - 1).fill(false));

  const { mutateAsync: write } = useBoardWriteMutation();

  const { mutateAsync: update } = useBoardUpdateMutation();

  const [validation, setValidation] = useState({
    filter: false,
    title: false,
    content: false,
  });
  console.log(info, validation);

  return (
    <Container>
      <Header title="글쓰기" write={state[0] !== "수정"} update={state[0] == "수정"}
        func={async () => {
          let newValidation = validation;
          if ((state == '자유' || state[2] == '자유') && !freeBoardFilter.some(x=> x === true)) {
            newValidation = { ...newValidation, filter: true };
          }
          if (info.title == '') {
            newValidation = { ...newValidation, title: true };
          }
          if (info.content == '') {
            newValidation = { ...newValidation, content: true };
          }
          setValidation(newValidation);

          if ((info.title !== '' && info.content !== '') && state[0] == "수정") {
            const { user, ...infoToSend } = info;
            await update({ ...infoToSend, boardId: state[1].boardId });
            navigate(-1);
          } else if (info.title !== '' && info.content !== '') {
            await write(info);
            navigate(-1);
          }
        }} />

      <div className='mt-10 border-b border-grey06 pb-4 text-lg'>
        {(state == "자유" || state[2] == "자유") && <div>
          <div className='mb-2'>카테고리</div>
          <div className='overflow-x-scroll flex mb-5'>
            <div className='flex'>
              {freeBoardTabText.slice(1, freeBoardTabText.length).map((x, index) => {
                return (
                  <div key={x.id} className={'border text-center px-3 py-1 mr-2 text-sm' + (freeBoardFilter[index] ? ' text-white bg-ms' : '')}
                  style={{ borderRadius: "40px" }}
                  onClick={()=>{
                    let arr = Array(freeBoardTabText.length-1).fill(false);
                    arr[index] = true;
                    setFreeBoardFilter(arr);
                    setValidation({...validation, filter: false});
                  }}>{x.content}</div>
                )
              })}
            </div>
          </div>
        </div>}
        {validation.filter && <div className='text-xs my-3 pl-1 text-valid'>카테고리를 선택해 주세요.</div>}
        <div className='mb-2'>제목</div>
        <input
          className='text-sm px-3 w-full'
          value={info.title} placeholder={'제목을 입력해주세요'}
          onChange={(e) => {
            setValidation({ ...validation, title: false });
            setInfo({ ...info, title: e.target.value });
          }} />
      </div>
      {validation.title && <div className='text-xs my-3 pl-1 text-valid'>제목을 입력해 주세요.</div>}

      <div className='mt-10 text-lg'>
        <div className='mb-2'>내용</div>
        <textarea className='w-full pt-4 px-3 text-sm border border-grey06' style={{ height: "400px" }}
          value={info.content}
          placeholder={'지역의 축구/풋살, 소식, 정보를 공유해보세요.'}
          onChange={(e) => {
            setValidation({ ...validation, content: false })
            setInfo({ ...info, content: e.target.value });
          }} />
      </div>
      {validation.content && <div className='text-xs my-3 pl-1 text-valid'>내용을 입력해 주세요.</div>}


    </Container>
  )
}

export default index