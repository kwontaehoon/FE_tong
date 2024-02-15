import React from 'react'
import {
    Container,
    Gimpo_Playground
} from './styles'
import { useBannerListQuery } from '../../../hooks/queries/api/Main'

const index = () => {

  const { data } = useBannerListQuery();
  console.log("bannerList: ", data);

  return (
    <Container>
        <Gimpo_Playground>
            <img src="svg/Palyground.svg" className='w-full'/>
        </Gimpo_Playground>
    </Container>

  )
}

export default index