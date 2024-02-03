import React from 'react'
import {
  Component, Top, Logo, 
  InputBox,
  Information,Greetings, Myinformation,Mail,
  Center, Center_Box, BoardBox,
  Number,
  Reservation,
  Reservation_A, Input, 
  Srtting, Sign_out,Withdrawal,
  Progrresschart
} from './styles'

const index = () => {
  return (
    <Component>
      <Top>
        <Logo>Logo</Logo>

        <InputBox>
          <Input placeholder = '검색어를 입력해주세요' />
          <img src = "/svg/serach.svg" style={{position: 'absolute', right: '10px '}}></img> 
        </InputBox>
        <img src="/svg/Vector_2.svg"/>
      </Top>
      <Information>
      <Greetings>안녕하세요,000님</Greetings>
      < Myinformation>내정보 관리</Myinformation>

      </Information>
      <Mail>testtest@gmail.com</Mail>
    
      <Center>
        <Center_Box>
          <BoardBox>게시글</BoardBox>
          <Number>12</Number>
        </Center_Box>

        <Center_Box>
          <BoardBox>댓글</BoardBox>
          <Number>12</Number>
        </Center_Box>

        <Center_Box>
          <BoardBox>찜한시설</BoardBox>
          <Number>12</Number>
        </Center_Box>

      </Center>
      <Reservation>나의 예약 기록</Reservation>
      <Reservation_A>
        <Progrresschart>예약0</Progrresschart>
        <img src="/svg/Vector_3.svg"/>
        <Progrresschart>진행0</Progrresschart>
        <img src="/svg/Vector_3.svg"/>
        <Progrresschart>완료0</Progrresschart>
        <img src="/svg/Vector_3.svg"/>
        <Progrresschart>종료0</Progrresschart>
      </Reservation_A>

      <Srtting>설정</Srtting>
      <Sign_out>로그아웃</Sign_out>
      <Withdrawal>회원탈퇴</Withdrawal>

    </Component>
  )
}

export default index