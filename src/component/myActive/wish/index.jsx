import React, { useEffect, useState } from 'react'
import { Container, TabBox, Tab } from './styles'
import Header from '../../../function/header'
import { useMyWishListQuery, useWishMutation } from '../../../hooks/queries/api/Wish'
import { getToken } from '../../../utill/GetToken'
import Spinner from '../../../function/spinner'
import { useNavigate } from 'react-router-dom'
import { star } from '../../../function/star'
import { myTabText } from '../../../constants/text/api/Board'
import Navi from '../../../function/navi'

const index = () => {

  const navigate = useNavigate();

  const [tab, setTab] = useState(Array(3).fill().map((_, index) => index === 0));

  const { data, isSuccess, refetch } = useMyWishListQuery({ users: { userId: getToken().userId } });

  const { mutateAsync: wish } = useWishMutation();

  useEffect(() => {
    refetch();
  }, []);

  return (
    <Container> 
      <Header title={myTabText[tab.findIndex(x => x)].content} padding search arrowUrl={"/"} />
      <TabBox>
        <div className='h-full flex'>
          {myTabText.map((x, index) => {
            return (
              <Tab key={x.id} $border={tab[index]}
                onClick={() => {
                  if (index == 1) {
                    navigate('/myActive/board');
                  } else if (index == 2) {
                    navigate('/myActive/comment');
                  }
                }}>{x.content}
              </Tab>
            )
          })}
        </div>
      </TabBox>
      {!isSuccess ? <Spinner /> : data.length === 0 ?
        <div className='mt-40 flex items-center flex-col'>
          <img src="/svg/listNull.svg" />
          <div className='mt-4 text-grey04'>찜한 시설이 없습니다.</div>
        </div> : data.map((x, index) => {
          console.log("x: ", x);
          return (
            <div key={x.reservationId} className='flex bg-white p-4 mb-ten mx-5 rounded-lg h-40'>
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
                <div className='flex font-bold items-center'>
                  <div className='flex'>{star(x.score)}</div>
                  <div className='ml-1'>{x.score}</div>
                </div>
                <div className='flex mt-3'>
                  {x.category1 && <div className='border border-m text-xs rounded text-m mr-1' style={{ padding: "2px 4px" }}>{x.category1}</div>}
                  {x.category2 && <div className='border border-m text-m text-xs rounded mr-1' style={{ padding: "2px 4px" }}>{x.category2}</div>}
                  {x.category3 && <div className='border border-m text-m text-xs rounded mr-1' style={{ padding: "2px 4px" }}>{x.category3}</div>}
                </div>
                <div className='mt-3 text-xs'>{x.subTitle}</div>
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