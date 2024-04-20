import React, { useState, useEffect, useRef } from 'react'
import Header from '../../../function/header'
import { Container } from './styles'
import { useBoardUpdateMutation, useBoardWriteMutation } from '../../../hooks/queries/api/Board'
import { useLocation, useNavigate } from 'react-router-dom'
import { getToken } from '../../../utill/GetToken'
import { freeBoardTabText } from '../../../constants/text/api/Board'
import { AiOutlinePicture } from "react-icons/ai";

const index = () => {

  const state = useLocation().state;

  const navigate = useNavigate();

  const imgRef = useRef();

  const [info, setInfo] = useState({
    title: state[0] == "수정" ? state[1].title : '',
    content: state[0] == "수정" ? state[1].content : '',
    user: {
      userId: getToken().userId
    },
    category: (state == '팀' || state[2] == '팀') ? '팀' : (state == '용병' || state[2] == '용병') ? '용병' : '자유',
    sub_category: ""
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

  const [imgFile, setImgFile] = useState([]); // 이미지 파일 리스트, formData로 보낼정보
  const [imgFileList, setImgFileList] = useState([]); // 업로드된 이미지 파일 저장
  const [pickFileIds, setPickFileIds] = useState([]); // pickFileIds
  console.log("imgFile: ", imgFile);
  console.log("imgFileList: ", imgFileList);
  console.log("pickFileIds: ", pickFileIds);

  return (
    <Container>
      <Header title="글쓰기" write={state[0] !== "수정"} update={state[0] == "수정"}
        func={async () => {
          let newValidation = validation;
          if ((state == '자유' || state[2] == '자유') && !freeBoardFilter.some(x => x === true)) {
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
                    onClick={() => {
                      let arr = Array(freeBoardTabText.length - 1).fill(false);
                      arr[index] = true;
                      setFreeBoardFilter(arr);
                      setInfo({ ...info, sub_category: x.content })
                      setValidation({ ...validation, filter: false });
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

      {(state == "자유" || state[2] == "자유") && <div>
        <div className={'flex' + (imgFileList.length == 0 ? '' : ' mt-4')}>
          {imgFileList.map((x, index) => {
            return (
              <div key={index} className='w-20 h-20 rounded mr-2 relative overflow-hidden'>
                <img src={x} className='w-full h-full' />
                <div className='absolute w-4 h-4 right-2 top-2 rounded-full bg-grey900 flex justify-center items-center cursor-pointer'
                  onClick={() => {
                    const arr = [...imgFileList];
                    const arr2 = [...imgFile];
                    if (arr.length == 1 || index == 0) {
                      arr.splice(0, 1);
                      arr2.splice(0, 1);
                    } else {
                      arr.splice(index, index);
                      arr2.splice(index, index);
                    }
                    setImgFile(arr2);
                    setImgFileList(arr);
                  }}>
                  <img src='/svg/close.svg' />
                </div>
              </div>
            )
          })}
        </div>


        <div className='my-4 flex'>
          <label className="flex cursor-pointer items-center" htmlFor='boardImage'>
            <AiOutlinePicture className='w-9 h-9 mr-2' />
            <div className='text-sm'>이미지 첨부</div>
          </label>
          <input
            type="file"
            accept="image/*"
            id='boardImage'
            multiple
            ref={imgRef}
            style={{ display: 'none' }}
            onChange={(e) => {
              let arr = [...imgFileList];
              // arr[imgIndex] = e.target.files[0];
              console.log("eeee: ", e.target.files[0]);

              const ids = [...pickFileIds];
              // if (!ids.includes(y.pickFileId)) {
              //   ids.push(y.pickFileId);
              // }
              console.log("arr: ", arr);
              setPickFileIds(ids);
              setImgFileList(arr);
              const file = imgRef.current.files[0];
              const reader = new FileReader();
              reader.readAsDataURL(e.target.files[0]);
              reader.onload = () => {
                // let arr = [...dataArr];
                // arr[index].pickFiles[imgIndex].imgPath = reader.result;
                // setDataArr(arr);
                e.target.value = "";
                if (imgFileList.length == 3) {
                  window.alert("이미지는 최대 3장까지 등록가능합니다.");
                  return;
                }
                setImgFile([...imgFile, file]);
                setImgFileList(prevState => ([...prevState, reader.result]));
              };
            }}
          />
        </div>
      </div>}
    </Container>
  )
}

export default index