import React, { useState } from 'react'
import { useMyCommentListQuery } from '../../../hooks/queries/api/Comment'
import { Container, TabBox, Tab, Area, Title } from './styles'
import Spinner from '../../../function/spinner'
import { getToken } from '../../../utill/GetToken'
import { useNavigate } from 'react-router-dom'
import { myTabText } from '../../../constants/text/api/Board'
import Header from '../../../function/header'
import Navi from '../../../function/navi'

const index = () => {

  const navigate = useNavigate();
  const [tab, setTab] = useState(Array(3).fill().map((_, index) => index === 2));
  const { data, isSuccess } = useMyCommentListQuery({ user: { userId: getToken().userId } });

  return (
    <Container>
      <Header title={myTabText[tab.findIndex(x => x)].content} padding search />
      <TabBox>
        <div className='h-full flex mb-5'>
          {myTabText.map((x, index) => {
            return (
              <Tab key={x.id} $border={tab[index]}
                onClick={() => {
                  if (index == 0) {
                    navigate('/myActive/wish');
                  } else if (index == 1) {
                    navigate('/myActive/board');
                  }
                }}>{x.content}
              </Tab>
            )
          })}
        </div>
      </TabBox>
      {!isSuccess ? <Spinner /> : data.map(x => {
        return (
          <div key={x.commentsId} className='p-4 mx-5 rounded-lg bg-white mb-2' onClick={() => navigate(x.board.category.includes("팀") ? `/board/${x.board.boardId}` : `/mercenary/${x.board.boardId}`)}>
            <div className='flex items-center'>
              <Area $category={x.board.category.includes("팀")}>{x.board.category.includes("팀") ? '팀' : '용병'}</Area>
              <Title>{x.content}</Title>
            </div>
          </div>
        )
      })}
      <div className='h-20' />
      <Navi />
    </Container>
  )
}

export default index