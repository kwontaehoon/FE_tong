import React from 'react'
import { Cotainer,Sec1,H1,P1,Ul,Li,Li2,
  Section2,Span,BtnOut } from './styles'


const index = () => {
  return (
    <Cotainer>
     
      {/* 섹션1 */}
      <Sec1 $mt={"20px"}>
        <H1 $mb={"20px"}><Span>OOO</Span>님이 떠나신다니 아쉬워요!</H1>
        <P1>탈퇴일 포함 3일 동안 재가입이 불가하며,<br/>재가입 시에도 이용 내역을 복구되지 않습니다.</P1>
        <Ul $pa={"20px"} $wd={"90%"} $mt={"20px"}>
          <Li>- 회원 탈퇴 후 30일간 재가입이 불가능합니다.</Li>
          <Li>- 예약하신 모든 데이터는 삭제됩니다.</Li>
          <Li>- 계정 및 프로필 정보가 삭제됩니다.</Li>
        </Ul>
      </Sec1>
  {/* 섹션2 */}
  <Section2 $mt={"0px"}>
        <H1 $mb={"0px"}><Span>회원 탈퇴</Span>하는 이유가 궁금해요.<br/>무엇이 불편하셨나요?</H1>


        <Ul className="ListBox" $mt={"0px"} $wd={"100%"} $pa={"20px 20px 100px"}>
          <Li2>
            <input type='radio' name='chk' checked='checked'></input><span>&nbsp;&nbsp;</span>
            자주 사용하지 않아요.
          </Li2>
          <Li2>
            <input type='radio' name='chk' ></input><span>&nbsp;&nbsp;</span>
            서비스에 오류가 많아요.
          </Li2>          
          <Li2>
            <input type='radio' name='chk' ></input><span>&nbsp;&nbsp;</span>
            쓸만한 서비스가 없어요.
          </Li2>
          <Li2>
            <input type='radio' name='chk' ></input><span>&nbsp;&nbsp;</span>
            다른 계정이 있어요.
          </Li2>          
          <Li2>
            <input type='radio' name='chk' ></input><span>&nbsp;&nbsp;</span>
            다른 서비스를 이용할게요.
          </Li2>
        </Ul>

        <BtnOut>탈퇴하기</BtnOut>
      </Section2>





    </Cotainer>
  )
}

export default index