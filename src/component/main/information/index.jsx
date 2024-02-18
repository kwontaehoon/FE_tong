import React from 'react'
import {Container,
Information_Box,
Inquiry,
Policy,
Policy_Name,
Gimpo,
Information,
Personal_information,
English} from './styles'

const index = () => {
  return (
   <Container>
    <Information_Box>
        <Policy>
          <Inquiry>
            고객센터
          </Inquiry>
          <img src="svg/Line 2.svg"></img>
          <Inquiry>이용약관</Inquiry>
          <img src="svg/Line 2.svg"></img>
                <Policy_Name>
                    개인정보처리방침
                </Policy_Name>
        </Policy>
        <Policy>
            <Gimpo>김포운통장</Gimpo>
        </Policy>
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
            <English>
                
            </English>
    </Information_Box>
   </Container>
  )
}

export default index