import React, { useEffect, useState } from 'react'
import {
  Container,
  Soccer_Team_Box,
  Soccer,
  Rescue,
} from './styles'
import { useNavigate } from 'react-router-dom'

const index = ({ data }) => {

  const navigate = useNavigate();
  
  const [dataArr, setDataArr] = useState([]);

  useEffect(()=>{
    setDataArr(data.filter(x=>x.category !== "자유"));
  }, []);

  return (
    <Container>
      <div className='flex mb-3'>
        <div className='text-lg font-bold'>구합니다</div>
        <div className='flex ml-1 flex-col mt-2 text-xs text-grey04'>동호회 및 개인용병 검색</div>
      </div>
      {dataArr.slice(0, 3).map((x, index) => {
        return (
          <div key={x.boardId} className='mb-3 flex relative items-center'>
            <div className='flex w-full items-center bg-white rounded-2xl px-3 py-5'>
                {index == 0 ? <img src="/svg/main_team.svg" /> : <img src={`/svg/main_boardTeam${index + 1}.svg`} />}
                <Soccer_Team_Box>
                  <Soccer>{x.title}</Soccer>
                  <Rescue>{x.content}</Rescue>
                </Soccer_Team_Box>
              <div className='border-b ml-24' style={{ fontSize: "11px", paddingBottom: "2px" }}
                onClick={() => navigate("/board")}>더보기
              </div>
            </div>
          </div>
        )
      })}
    </Container>
  )
}

export default index