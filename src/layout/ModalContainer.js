import styled, { keyframes } from 'styled-components'

const slideIn = keyframes`
  from { transform: translateX(100%); }
  to { transform: translateX(20%); }
`;

const slideOut = keyframes`
  from { transform: translateX(20%); }
  to { transform: translateX(100%); }
`;

const slideYIn = keyframes`
  from { transform: translateY(100%); }
  to { transform: translateY(0%); }
`;

const slideYOut = keyframes`
  from { transform: translateY(0%); }
  to { transform: translateY(100%); }
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

    @media (min-width: 768px) {
        top: auto;
        left: auto;
        width: 392px;
        height: 660px;
        overflow: scroll;
        border-radius: 16px;
        position: absolute;
    }
`
const MSC = styled.div`
    position: absolute;
    width: 80%;
    padding: 20px 16px;
    background-color: rgb(255, 255, 255);
    border-radius: 20px;
    box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
    font-size: 14px;
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
    transition: 0.3s;

    @media (min-width: 768px) {
        left: auto;
        width: 392px;
        margin-bottom: 40px;
        overflow: scroll;
        border-radius: 16px;
    }
`
const MCSS = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    right: 0;
    background-color: rgb(255, 255, 255);
    box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
    font-size: 12px;
    animation: ${props => props.$show ? slideIn : slideOut} 0.3s ease-in-out forwards;
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
    z-index: 999;
    visibility: ${props => props.$show ? 'visible' : 'hidden'};
    transition: 0.3s;

    @media (min-width: 768px) {
        top: auto;
        left: auto;
        width: 392px;
        height: 660px;
        overflow: scroll;
        border-radius: 16px;
        position: absolute;
    }
`
const MSCMobile = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px;
    background-color: rgb(255, 255, 255);
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
    font-size: 12px;
    animation: ${props => props.$show ? slideYIn : slideYOut} 0.3s ease-in-out forwards;
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

    @media (min-width: 768px) {
        top: auto;
        left: auto;
        width: 392px;
        height: 660px;
        overflow: scroll;
        border-radius: 16px;
        position: absolute;
    }
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
