import React from 'react'
import {
  Container,
  Inquiry,
  Policy,
  Gimpo,
  Information,
  Personal_information,
  PrivatePolicy,
  English
} from './styles'
import { useNavigate } from 'react-router-dom'

const index = () => {

  const navigate = useNavigate();

  return (
    <Container>
        <Policy>
          <Inquiry onClick={()=>navigate("/term")}>이용약관</Inquiry>
          <div className='text-grey06' style={{margin: "0px 10px"}}>|</div>
          <PrivatePolicy onClick={()=>navigate("/privacy")}>개인정보처리방침</PrivatePolicy>
        </Policy>
        <Gimpo>김포운통장</Gimpo>
        <Personal_information>
          <Information>
            정보처리 관리자: 홍성혁
          </Information>
          <Information>
            사업자등록번호: 000-00-00-00000
          </Information>

          <Information>
            주소: 경기도 김포시 사우동000 000
          </Information>
          <English>
            Copyright Gimpo. Co.,Ltd All rights reserved Design
            by TongTong
          </English>
        </Personal_information>
    </Container>
  )
}

export default index