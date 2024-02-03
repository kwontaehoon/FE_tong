import React from 'react'
import {Component,Header,Header_img,Arrow,
Pwd,Login} from './styles'

const index = () => {
  return (
      <Component>
          <Header>
              <Arrow>
                  <img src="svg/grommet-icons_link-next.svg"></img>
              </Arrow>
              <Header_img>
                  <img src="svg/Vector.svg"></img>
              </Header_img>
          </Header>
          <Pwd>비밀번호를 변경했어요!</Pwd>
          <Login>로그인 하기</Login>
      </Component>
  )
}

export default index