import React, { useEffect } from 'react'
import Title from './title'
import Center from './center'
import Bottom from './bottom'
import Header from '../../function/header'
import { useBoardDetailsQuery } from '../../hooks/queries/api/Board'
import { useParams } from 'react-router-dom'
import { useCommentListQuery } from '../../hooks/queries/api/Comment'

const index = () => {

  const { id } = useParams();

  const { data: boardList, isSuccess: boardSuccess} = useBoardDetailsQuery(id);
  console.log("boardList: ", boardList);

  const { data: commentList, isSuccess: commentSuccess } = useCommentListQuery();

  useEffect(()=>{
    window.scrollTo({
      top: 0,
  })
}, []);

  return boardSuccess && commentSuccess && (
    <div className='bg-bg'>
        <Header padding />
        <Title boardList={boardList}/>
        <Center boardList={boardList} />
        <Bottom commentList={commentList.content.filter(x=>x.board.boardId == id)}/>
        <div className='bg-white flex items-center py-4 px-3'>
          <div className='flex relative w-full items-center'>
            <input className='bg-grey07 w-full h-14 rounded-full p-4'
              placeholder='답글을 입력하세요.'>
            </input>
            <img src="/svg/Send.svg" className='absolute right-4' />
          </div>
        </div>
    </div>
  )
}

export default index