import React from 'react'
import { functionText } from '../../constants/text/api/Introduce'

const index = () => {
    return (
        <div className='leading-6 text-sm pb-10'>
            <div className='text-2xl font-bold mb-2'>⚽TongTong</div>
            <div>기간: 2024.01.28 ~ 2024~03.09</div>
            <div>김포 축구 예약 서비스 Web-based Application</div>

            <div className='mt-7 font-semibold'>[개요]</div>
            <div className='flex'>
                <div className='text-m'>TongTong</div>
                <div>은 김포 지역에 사는 사람들끼리 만든 프로젝트입니다.</div>
            </div>
            <div>김포에서 다양한 스포츠 시설을 활용하고자 하는 사람들에게 편리한 예약 서비스를 제공하기 위해
                만든 예약 시스템입니다.
            </div>

            {/* <div className='mt-4 font-semibold'>[팀 소개]</div> */}

            <div className='mt-4 font-semibold'>[기술 스택]</div>
            <div>- Front-end</div>
            <div className='flex items-center ml-4'>
                <div className='w-2 h-2 rounded-full mr-2 bg-m'></div>
                <div>React.js, TailwindCSS, MUI, React-Query, Zustand, Vite</div>
            </div>
            <div className='mt-2'>- Back-end</div>
            <div className='flex items-center ml-4'>
                <div className='w-2 h-2 rounded-full mr-2 bg-m'></div>
                <div>Java, SpringBoot, JPA, MySQL, AWS EC2 / RDS / S3</div>
            </div>
            <div className='mt-2'>- ETC</div>
            <div className='flex items-center ml-4'>
                <div className='w-2 h-2 rounded-full mr-2 bg-m'></div>
                <div>Figma, Git, Github, Postman</div>
            </div>

            <div className='mt-4 mb-1 font-semibold'>[주요 기능]</div>
            {functionText.map(x => {
                return (
                    <div className='flex items-center ml-4 mb-1' key={x.id}>
                        <div className='w-2 h-2 rounded-full mr-2 bg-m'></div>
                        <div>{x.content}</div>
                    </div>
                )
            })}
            <div className='mt-4 mb-1 font-semibold'>[GitHub]</div>
            <span onClick={()=>window.open('https://github.com/kwontaehoon/FE_tong', '_blank')} className='bg-grey07 mr-4 px-1 cursor-pointer'>Front-end</span>
            <span onClick={()=>window.open('https://github.com/kwontaehoon/BE_tong', '_blank')} className='bg-grey07 px-1 cursor-pointer'>Back-end</span>
        </div>
    )
}

export default index