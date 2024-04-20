import React, { useEffect, useState } from 'react'
import {
    Container,
    Soccer_Team_Box,
    Soccer,
    Rescue,
} from './styles'
import { useNavigate } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';

const index = ({ data }) => {

    AOS.init();

    const navigate = useNavigate();

    const [dataArr, setDataArr] = useState([]);

    useEffect(() => {
        setDataArr(data.filter(x => x.category == "자유"));
    }, []);

    return (
        <Container>
            <div className='flex mb-3'>
                <div className='text-lg font-bold mr-1'>자유게시판</div>
                <div className='flex flex-col justify-end text-xs text-grey04'>동호회 및 개인용병 서치</div>
            </div>
            {dataArr.slice(0, 3).map((x, index) => {
                return (
                    <div key={x.boardId} 
                        data-aos={window.innerWidth > 768 ? '' : "fade-up"}
                        data-aos-duration={window.innerWidth > 768 ? '' : "2000"}>
                        <div className='border-grey07 rounded-t-2xl overflow-hidden' style={{width: "100%", maxHeight: "200px"}}>
                            {index == 0 && <img src="/images/testImg.png" />}
                            {index == 1 && <img src="/images/testImg2.jpg" />}
                            {index == 2 && <img src="/images/readme.png" />}
                        </div>
                        <div className='mb-8 flex relative items-center'>
                            <div className='flex w-full items-center bg-white rounded-b-2xl px-3 py-5'>
                                <Soccer_Team_Box>
                                    <Soccer>{x.title}</Soccer>
                                    <Rescue>{x.content}</Rescue>
                                </Soccer_Team_Box>
                                <div className='border-b ml-24' style={{ fontSize: "11px", paddingBottom: "2px" }}
                                    onClick={() => navigate("/freeBoard")}>더보기
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </Container>
    )
}

export default index