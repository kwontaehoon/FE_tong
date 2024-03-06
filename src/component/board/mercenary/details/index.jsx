import React, { useState, useEffect, useRef } from 'react'
import Title from './title'
import Center from './center'
import Bottom from './bottom'
import Header from '../../../../function/header'
import { useBoardDeleteMutation, useBoardDetailsQuery } from '../../../../hooks/queries/api/Board'
import { useParams } from 'react-router-dom'
import { useCommentDeleteMutation, useCommentListQuery, useCommentWriteMutation } from '../../../../hooks/queries/api/Comment'
import { getToken } from '../../../../utill/GetToken'
import { loginFlag } from '../../../../utill/LoginFlag'
import { useLoginStore } from '../../../../store/LoginFlag'

const index = () => {

  const { id } = useParams();
  const inputRef = useRef(null);
  const openLoginModal = useLoginStore((state) => state.setOpen);

  const { data: boardList, isSuccess: boardSuccess, refetch: boardRefetch} = useBoardDetailsQuery({ boardId: id, userId: getToken().userId ? getToken().userId : 0 });

  const { data: commentList, isSuccess: commentSuccess, refetch: commentRefetch } = useCommentListQuery();

  const { mutateAsync: write } = useCommentWriteMutation();

  const { mutateAsync: commentDel } = useCommentDeleteMutation();

  const [info, setInfo] = useState();

  useEffect(()=>{
    boardRefetch();
    commentRefetch();
  }, []);

  return boardSuccess && commentSuccess && (
    <div className='bg-bg h-full flex flex-col'>
        <Header padding title="용병 구하기" noClose />
        <Title boardList={boardList}/>
        <Center id={id} boardList={boardList} />
        <Bottom inputRef={inputRef} boardList={boardList} commentList={commentList?.content?.filter(x=>x.board?.boardId == id)} commentRefetch={commentRefetch}/>
        <div className='bg-white flex items-end py-4 px-3 flex-1'>
          <div className='flex relative w-full items-center'>
            <input className='bg-bg w-full h-14 rounded-full p-4 text-xs' 
              ref={inputRef}
              placeholder='답글을 입력하세요.'
              onChange={(e)=>setInfo(e.target.value)} />
            <img src="/svg/Send.svg" className='absolute right-4'
              onClick={async()=>{
                setInfo('');
                if(loginFlag()){
                  await write({
                    content: info,
                    board: {
                      boardId: id
                    },
                    user: {
                      userId: getToken().userId
                    }
                  });
                  commentRefetch();
                }else openLoginModal(true);
              }}/>
          </div>
        </div>
    </div>
  )
}

export default index