import styled from "styled-components";

export const Container = styled.div`
    background-color: white;
    height: 100%;
` 
export const TabBox = styled.div`
    height: 58px;
    padding: 0px 10px 0px 10px;
    background-color: white;
    display: flex;
    justify-content: center;
`
export const Tab = styled.div`
    padding: 0px 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    border-bottom: ${props => props.$border ? '3px solid #007CFF' : ''};
    padding-top: ${props => props.$border ? '3px' : ''};
`
export const FAQ_Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px 20px;
    background-color: white;
    border-bottom: 1px solid #E9EBED;
    border-top: 1px solid #E9EBED;
    background-color: #F4F5FA;
`
export const Besides = styled.div`
    padding: 8px 12px;
    border-radius: 40px;
    margin-right: 8px;
    font-size: 14px;
    background-color: ${props => props.$category ? ' #E9EBED' : ' white'};
    color: ${props => props.$category ? '' : ''};
`
export const Reservation_Box = styled.div`
    padding: 20px 36px;
    border-bottom: 1px solid #E9EBED;
`
export const Reservation = styled.div`
    flex: 1;
    font-size: 13px;
`