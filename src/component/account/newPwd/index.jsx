import React from 'react'
import {Component,Header, Header_img,Arrow,
New_Pwd,Information,Input,
Pwd,Pwd_Check,Pwd_Change} from './styles'

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
      <New_Pwd>새 비밀번호</New_Pwd>
      <Information>
        아래 정보를 입력하여 비밀번호를 재설정해주세요.
      </Information>
      <Pwd>비밀번호</Pwd>
      <Input></Input>
      <Pwd_Check>비밀번호 확인</Pwd_Check>
      <Input></Input>
      <Pwd_Change>비밀번호 확인</Pwd_Change>

    </Component>
  )
}

export default index