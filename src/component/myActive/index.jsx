import React, { useState, useEffect } from 'react'
import Header from '../../function/header'
import { Container, TabBox, Tab } from './styles'
import { myTabText } from '../../constants/text/api/Board'
import Wish from './wish'
import Board from './board'
import Comment from './comment'
import Navi from '../../function/navi'
import { useLocation } from 'react-router-dom'

const index = () => {

    const [tab, setTab] = useState(Array(3).fill().map((_, index)=>index === 0));

    const state = useLocation().state;

    useEffect(()=>{
      let arr = Array(3).fill(false);
      if(state == "board"){
        arr[1] = true;
        setTab(arr);
      }else if(state == "comments"){
        arr[2] = true;
        setTab(arr);
      }
    }, [state])

  return (
    <Container>
        <Header title={myTabText[tab.findIndex(x=>x)].content} padding search />
        <TabBox>
        <div className='h-full flex mb-5'>
          {myTabText.map((x, index) => {
            return (
              <Tab key={x.id} $border={tab[index]} 
                onClick={()=>{
                  let arr = Array(3).fill(false);
                  arr[index] = true;
                  setTab(arr);
                }}>{x.content}
              </Tab>
            )
          })}
        </div>
      </TabBox>
      {tab[0] && <Wish />}
      {tab[1] && <Board />}
      {tab[2] && <Comment />}
      
      <div className='h-24' />
      <Navi />
    </Container>
  )
}

export default index