import React from 'react'
import { Container, PickBox } from './styles'
import Header from '../../function/header'
import { usePickListQuery } from '../../hooks/queries/api/Main'
import Navi from '../../function/navi'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Spinner from '../../function/spinner'

const index = () => {
    AOS.init();

    const { data, isSuccess } = usePickListQuery();

    return (
        <Container>
            <Header padding title="이벤트" noClose arrowUrl={-1} />

            <div className='mx-5 my-ten'>
                <div className='flex flex-wrap'>
                    {!isSuccess ? <Spinner /> : data.map((x, index) => {
                        return (
                            <PickBox
                                key={x.pickId}
                                data-aos="flip-up"
                                className={'w-1/2 mb-4 h-48 shadow-custom' + (index % 2 === 0 ? ' pr-2' : ' pl-2')}>
                                <div className='absolute w-full text-white py-4 px-2 text-center bottom-0 text-xs flex justify-center flex-col items-center'>
                                    <div>{x.title}</div>
                                    <div>{x.content}</div>
                                </div>
                                <img src={`https://tong-bucket.s3.ap-northeast-2.amazonaws.com/${x.pickFiles[0]?.fileName}`} className='w-full h-full' />
                            </PickBox>
                        )
                    })}
                </div>
            </div>
            <div className='h-20' />
            <Navi />
        </Container>
    )
}

export default index