import React from 'react'
import {Component, Header,Header_img,Header_Arrow,
ID, Center,Bottom,Login,Pwd} from './styles'

const index = () => {
  return (
    < Component>
      <Header>

        <Header_Arrow>
          <img src="svg/grommet-icons_link-next.svg"></img>
        </Header_Arrow>

        <Header_img>
          <img src="svg/Vector.svg"></img>
        </Header_img>
      </Header>
      <ID>아이디를 찾았어요!</ID>
      <Center></Center>

      <Bottom>
        <Login>로그인</Login>
        <img src="svg/Line 2.svg"></img>
        <Pwd>비밀번호 찾기</Pwd>
      </Bottom>

    </Component>
  )
}

export default index