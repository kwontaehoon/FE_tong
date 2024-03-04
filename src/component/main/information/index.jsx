import React from 'react'
import {
  Container,
  Information_Box,
  Inquiry,
  Policy,
  Gimpo,
  Information,
  Personal_information,
  PrivatePolicy,
  English
} from './styles'

const index = () => {
  return (
    <Container>
      <Information_Box>
        <Policy>
          <Inquiry>이용약관</Inquiry>
          <div className='text-grey06' style={{margin: "0px 10px"}}>|</div>
          <PrivatePolicy>개인정보처리방침</PrivatePolicy>
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
      </Information_Box>
    </Container>
  )
}

export default index