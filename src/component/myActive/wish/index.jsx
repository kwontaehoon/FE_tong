import React, { useEffect, useState } from 'react'
import { Container, TabBox, Tab } from './styles'
import Header from '../../../function/header'
import { useMyWishListQuery, useWishMutation } from '../../../hooks/queries/api/Wish'
import { getToken } from '../../../utill/GetToken'
import Spinner from '../../../function/spinner'
import { useNavigate } from 'react-router-dom'
import { star } from '../../../function/star'
import { myTabText } from '../../../constants/text/api/Board'

const index = () => {

  const navigate = useNavigate();

  const [tab, setTab] = useState(Array(3).fill().map((_, index)=>index === 0));

  const { data, isSuccess, refetch } = useMyWishListQuery({ users: { userId: getToken().userId } });

  const { mutateAsync: wish } = useWishMutation();

  useEffect(() => {
    refetch();
  }, []);

  return isSuccess ? (
    <Container>
       <Header title={myTabText[tab.findIndex(x=>x)].content} padding search arrowUrl={'/mypage'} />
        <TabBox>
        <div className='h-full flex'>
          {myTabText.map((x, index) => {
            return (
              <Tab key={x.id} $border={tab[index]} 
                onClick={()=>{
                  if(index == 1){
                    navigate('/myActive/board');
                  }else if(index == 2){
                    navigate('/myActive/comment');
                  }
                }}>{x.content}
              </Tab>
            )
          })}
        </div>
      </TabBox>
      {data.map((x, index) => {
        return (
          <div key={x.reservationId} className='flex bg-white p-4 mb-ten mx-5 rounded-lg'>
            <div className='flex-1 mr-4 relative'>
              <img src={`https://tong-bucket.s3.ap-northeast-2.amazonaws.com/${x.reservationFiles[0].fileName}`} className='w-full h-full rounded-lg overflow-hidden' />
              <div className='absolute top-3 right-3' onClick={async () => {
                await wish({
                  users: { userId: getToken().userId },
                  reservation: { reservationId: x.reservationId }
                });
                refetch();
              }}>
                {x?.userIdsOfWishes?.includes(getToken().id) ?
                  <img src="/svg/heart_red.svg" className='w-4' /> : <img src="/svg/heart_2.svg" className='w-4' />}
              </div>
            </div>
            <div className='flex-1' onClick={() => navigate(`/reservation/${x.reservationId}`)}>
              <div className='text-lg font-bold'>{x.title}</div>
              <div className='flex'>{star(x.score)}</div>
              {index == 0 && <div className='flex mt-3'>
                <div className='border border-m text-xs rounded text-m' style={{ padding: "2px 4px" }}>역세권</div>
                <div className='ml-1 border border-m text-m text-xs rounded' style={{ padding: "2px 4px" }}>시설 청결</div>
              </div>}
              {index == 1 && <div className='flex mt-3'>
                <div className='border border-m text-xs rounded text-m' style={{ padding: "2px 4px" }}>금주 예약 가능</div>
                <div className='ml-1 border border-m text-m text-xs rounded' style={{ padding: "2px 4px" }}>0 ~ 5명</div>
              </div>}
              <div className='mt-8 text-sm'>{x.location}</div>
            </div>
          </div>
        )
      })}

    </Container>
  ) : <Spinner />
}

export default index