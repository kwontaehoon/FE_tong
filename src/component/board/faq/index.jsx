import React, { useState } from 'react'
import {
  Container,
  TabBox,
  Tab,
  FAQ_Box,
  Besides,
  Reservation_Box,
  Reservation,
} from './styles'
import Header from '../../../function/header';
import Navi from '../../../function/navi'
import { boardTabText, faqCategoryText, faqText } from '../../../constants/text/api/Board';
import { useNavigate } from 'react-router-dom';

const index = () => {

  const navigate = useNavigate();

  const tab = Array(4).fill().map((_, index) => index === 3);

  const [category, setCategory] = useState(Array(8).fill().map((_, index) => index === 0));
  const [categoryContent, setCategoryContent] = useState("자주찾는질문");

  const [dummy, setDummy] = useState(Array(8).fill(false));

  return (
    <Container>
      <Header padding title="FAQ" arrowUrl={"/"} closeUrl={"/"} />
      <TabBox>
        <div className='h-full flex'>
          {boardTabText.map((x, index) => {
            return (
              <Tab key={x.id} $border={tab[index]}
                onClick={() => {
                  switch (index) {
                    case 0: return navigate("/board");
                    case 1: return navigate("/mercenary");
                    case 2: return navigate("/notice");
                  }
                }}>{x.content}
              </Tab>
            )
          })}
        </div>
      </TabBox>
      <FAQ_Box>
        {faqCategoryText.map((x, index) => {
          return (
            <Besides $category={category[index]} key={x.id}
              onClick={() => {
                let arr = Array(4).fill(false);
                arr[index] = true;
                setCategory(arr);
                setCategoryContent(x.content);
              }}>{x.content}
            </Besides>
          )
        })}
      </FAQ_Box>
      {faqText.filter(x => x.category == categoryContent).map((x, index) => {
        return (
          <Reservation_Box key={index}
            onClick={() => {
              let arr = [...dummy];
              arr[index] = !arr[index];
              setDummy(arr);
            }}>
            <div className='flex items-center'>
              <Reservation>{x.title}</Reservation>
              <div>
                {dummy[index] ? <img src="svg/false_arrow.svg" className='w-3' /> : <img src="/svg/Arrow_bottom.svg" className='w-3' />}
              </div>
            </div>
            {dummy[index] && <div className='mt-5 rounded-lg bg-bg px-4 py-5 text-xs text-grey10'>
              {x.content}
            </div>}
          </Reservation_Box>
        )
      })}
      <div className='h-20' />
      <Navi />
    </Container>
  )
}

export default index