import React, { useState } from 'react'
import Team from './team'
import Mercenary from './mercenary'
import Notice from './notice'
import Faq from './faq'
import Header from '../../function/header'
import { Container, TabBox, Tab } from './styles'
import { boardTabText } from '../../constants/text/api/Board'
import Navi from '../../function/navi'

const index = () => {

  const [tab, setTab] = useState(Array(4).fill().map((_, index)=>index === 0));

  return (
    <Container>
      <Header padding title="게시판" />
      <TabBox>
        <div className='h-full flex'>
          {boardTabText.map((x, index) => {
            return (
              <Tab key={x.id} $border={tab[index]} 
                onClick={()=>{
                  let arr = Array(4).fill(false);
                  arr[index] = true;
                  setTab(arr);
                }}>{x.content}
              </Tab>
            )
          })}
        </div>
      </TabBox>
      {tab[0] && <Team />}
      {tab[1] && <Mercenary />}
      {tab[2] && <Notice />}
      {tab[3] && <Faq />}

      <div className='h-20' />
      <Navi />
    </Container>
  )
}

export default index