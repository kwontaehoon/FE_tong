import React, { useState } from 'react'
import {
  Container,
  TabBox,
  Tab,
  Announcement_Box,
  Update_Box,
  Update,
  Update_in,
  Announcement,
  Days
} from './styles'
import { useNavigate } from 'react-router-dom';
import Header from '../../../function/header';
import { boardTabText } from '../../../constants/text/api/Board';
import Navi from '../../../function/navi'

const index = () => {

  const navigate = useNavigate();

  const tab = Array(4).fill().map((_, index) => index === 2);

  const [dummy, setDummy] = useState(Array(10).fill(false));

  return (
    <Container>
      <Header padding title="공지사항" />
      <TabBox>
        <div className='h-full flex'>
          {boardTabText.map((x, index) => {
            return (
              <Tab key={x.id} $border={tab[index]}
                onClick={() => {
                  switch (index) {
                    case 0: return navigate("/board");
                    case 2: return navigate("/notice");
                    case 3: return navigate("/faq");
                  }
                }}>{x.content}
              </Tab>
            )
          })}
        </div>
      </TabBox>
      <div className='mx-5'>
        {dummy.map((_, index) => {
          return (
            <Announcement_Box key={index}>
              <div className='flex items-center w-full'>
                <Update_in>
                  <Update_Box>
                    <Update>[업데이트]</Update>
                    <Announcement>v5.13.0업데이트 안내</Announcement>
                  </Update_Box>
                  <Days>2024.02.23</Days>
                </Update_in>
                <img src="/svg/Arrow_right.svg" onClick={() => navigate(`${index}`)} />
              </div>
            </Announcement_Box>
          )
        })}
      </div>
      <div className='h-24' />
      <Navi />
    </Container>
  )
}

export default index