import styled from "styled-components";

export const Container = styled.div`
    background-color: white;
` 
export const TabBox = styled.div`
    height: 68px;
    padding: 10px 10px 0px 10px;
    background-color: white;
`
export const Tab = styled.div`
    width: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: ${props => props.$border ? '3px solid #007CFF' : ''};
`
export const FAQ_Box = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;
    background-color: #F4F5FA;
`
export const Besides = styled.div`
    border: 1px solid;
    padding: 8px 8px;
    border-radius: 40px;
    margin-right: 8px;
    font-size: 14px;
    background-color: ${props => props.$category ? ' #007CFF' : ''};
    color: ${props => props.$category ? 'white' : ''};
`
export const Reservation_Box = styled.div`
    padding: 20px 36px;
    border-bottom: 1px solid #E9EBED;

`
export const Reservation = styled.div`
    flex: 1;
`