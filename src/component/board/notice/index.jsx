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
import { useNoticeListQuery } from '../../../hooks/queries/api/Notice';
import Spinner from '../../../function/spinner'
import moment from 'moment';

const index = () => {

  const navigate = useNavigate();

  const tab = Array(4).fill().map((_, index) => index === 2);

  const { data, isSuccess } = useNoticeListQuery();

  return (
    <Container>
      <Header padding title="공지사항"  arrowUrl={"/"} />
      <TabBox>
        <div className='h-full flex'>
          {boardTabText.map((x, index) => {
            return (
              <Tab key={x.id} $border={tab[index]}
                onClick={() => {
                  switch (index) {
                    case 0: return navigate("/board");
                    case 1: return navigate("/mercenary");
                    case 3: return navigate("/faq");
                  }
                }}>{x.content}
              </Tab>
            )
          })}
        </div>
      </TabBox>
      <div className='mx-5'>
        {!isSuccess ? <Spinner /> : data.map((x, index) => {
          return (
            <Announcement_Box key={index}>
              <div className='flex items-center w-full'>
                <Update_in>
                  <Update_Box>
                    <Update>[{x.category}]</Update>
                    <Announcement>{x.title}</Announcement>
                  </Update_Box>
                  <Days>{moment(x.createDate).format("YYYY.MM.DD")}</Days>
                </Update_in>
                <img src="/svg/Arrow_right.svg" className='w-3' onClick={() => navigate(`${index}`, { state: x})} />
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