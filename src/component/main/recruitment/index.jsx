import React from 'react'
import {
  Container,
  Soccer_Team,
  Soccer_Team_Box,
  Soccer,
  Rescue,
} from './styles'
import { useNavigate } from 'react-router-dom'

const index = ({ data }) => {

  const navigate = useNavigate();

  return (
    <Container>
      <div className='flex ml-5 mb-3'>
        <div className='text-lg font-bold mr-1'>구합니다</div>
        <div className='flex flex-col justify-end text-xs text-grey04'>동호회 및 개인용병을 서치</div>
      </div>
      {data.content.slice(0, 3).map((x, index) => {
        return (
          <div key={x.boardId} className='mb-3 flex relative items-center'>
            <div className='flex-1'>
              <Soccer_Team>
                {index == 0 ? <img src="/svg/main_team.svg" /> : <img src={`/svg/main_boardTeam${index + 1}.svg`} />}
                <Soccer_Team_Box>
                  <Soccer>{x.title}</Soccer>
                  <Rescue>{x.content}</Rescue>
                </Soccer_Team_Box>
              </Soccer_Team>
            </div>
            <div className='absolute right-5 border-b' style={{fontSize: "11px", paddingBottom: "2px"}}
              onClick={()=>navigate("/board")}>더보기</div>
          </div>
        )
      })}
    </Container>
  )
}

export default index