import styled from "styled-components";

export const Container = styled.div`
    background-color: white;
    height: 100%;
`
export const TabBox = styled.div`
    height: 68px;
    padding: 10px 10px 0px 10px;
    background-color: white;
`
export const Tab = styled.div`
    width: 33.4%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: ${props => props.$border ? '3px solid #007CFF' : ''};
`
export const Reservation_Box = styled.div`
    padding: 20px 36px;
    border-bottom: 1px solid #E9EBED;
`
export const Reservation = styled.div`
    flex: 1;
    font-size: 14px;
    display: flex;
    align-items: center;
`
export const ListBox = styled.div`
    margin: 30px 0px;
`