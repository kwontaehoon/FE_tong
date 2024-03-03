import React, { useState } from 'react'
import {
  Cotainer, Sec1, H1, P1, Ul, Li, Li2,
  Section2, Span, BtnOut
} from './styles'
import Header from '../../function/header'
import { expireText } from '../../constants/text/api/Account'

const index = () => {

  const [check, setCheck] = useState(Array(5).fill(false));

  return (
    <Cotainer>

      <Header padding noClose title="회원탈퇴" />
      {/* 섹션1 */}
      <Sec1 $mt={"20px"}>
        <H1 $mb={"20px"}><Span>OOO</Span>님이 떠나신다니 아쉬워요!</H1>
        <P1>탈퇴일 포함 3일 동안 재가입이 불가하며,<br />재가입 시에도 이용 내역을 복구되지 않습니다.</P1>
        <Ul $pa={"20px"} $wd={"90%"} $mt={"20px"}>
          <Li>- 회원 탈퇴 후 30일간 재가입이 불가능합니다.</Li>
          <Li>- 예약하신 모든 데이터는 삭제됩니다.</Li>
          <Li>- 계정 및 프로필 정보가 삭제됩니다.</Li>
        </Ul>
      </Sec1>
      {/* 섹션2 */}
      <Section2 $mt={"0px"}>
        <H1 $mb={"0px"}><Span>회원 탈퇴</Span>하는 이유가 궁금해요.<br />무엇이 불편하셨나요?</H1>


        <Ul className="ListBox" $mt={"0px"} $wd={"100%"} $pa={"20px 20px 0px"}>
          {expireText.map((x, index) => {
            return (
              <Li2 key={x.id}>
               <div className='w-4 h-4 rounded-full border mr-2 flex justify-center items-center'
                onClick={()=>{
                  let arr = Array(5).fill(false);
                  arr[index] = true;
                  setCheck(arr);
                }}>
                {check[index] && <div className='w-2 h-2 rounded-full bg-m'></div>}
               </div>
               <div>{x.content}</div>
              </Li2>
            )
          })}
        </Ul>
      </Section2>
      <div className='flex-1 flex items-end m-5'>
        <BtnOut $bg={check.filter(x=>x).length !== 0}>탈퇴하기</BtnOut>
      </div>
    </Cotainer>
  )
}

export default index