import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0%);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const MC = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
    &::-webkit-scrollbar{
      display: none;
    }
`
const MSC = styled.div`
    position: absolute;
    padding: 50px;
    background-color: rgb(255, 255, 255);
    border-radius: 20px;
    box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
    font-size: 12px;
`
const MCS = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    z-index: 999;
    visibility: ${props => props.$show ? 'visible' : 'hidden'};
    transition: 1s;
    animation: ${props => props.$show ? fadeIn : fadeOut} 1s ease-in-out forwards;
`
const MCSS = styled.div`
    position: absolute;
    height: 100%;
    right: 0;
    padding: 50px;
    background-color: rgb(255, 255, 255);
    box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
    font-size: 12px;
    
`
const MCMobile = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: end;
    z-index: 900;
`
const MSCMobile = styled.div`
    position: absolute;
    width: 100%;
    padding: 30px 20px;
    padding-bottom: 20px;
    background-color: rgb(255, 255, 255);
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
`
const MCCMobile = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 800;
`
const MSCCMobile = styled.div`
    position: absolute;
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px;
    background-color: rgb(255, 255, 255);
    border-radius: 20px;
    box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
`

export const ModalContainer = MC;
export const ModalSubContainer = MSC;
export const ModalSideContainer = MCS; // PC 옆에서 나오는 모달
export const ModalSideSubContainer = MCSS; // PC 옆에서 나오는 서브 모달
export const ModalMobileContainer = MCMobile; // 밑에서 나오는 모바일 모달
export const ModalMobileSubContainer = MSCMobile; // 밑에서 나오는 모바일 서브 모달
export const ModalCenterMobileContainer = MCCMobile; // 센터 모바일 모달
export const ModalCenterMobileSubContainer = MSCCMobile; // 센터 모바일 서브 모달
