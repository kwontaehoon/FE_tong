import React from 'react'
import {
  Component,
  Header,
  Header_img,
  Header_Arrow,
  Find_id,
  Information,
  Input,
  Name,
  Mail,
  Pwd,
  ID
} from './styles'

const index = () => {
  return (
    <Component>
      <Header>
        <Header_Arrow>
          <img src="svg/grommet-icons_link-next.svg"></img>
        </Header_Arrow>

        <Header_img>
          <img src="svg/Vector.svg"></img>
        </Header_img>
      </Header>


      <Find_id>아이디 찾기</Find_id>
      <Information>
        아래 정보를 입력하여 아이디 찾기를 완료해주세요.
      </Information>

      <Name>이름</Name>
      <Input></Input>

      <Mail>이메일</Mail>
      <Input></Input>

      <Pwd>비밀번호 찾기</Pwd>
      <ID>아이디 찾기</ID>


    </Component>
  )
}

export default index