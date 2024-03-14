import styled from "styled-components";

export const Container = styled.div`
    background-color: white;
    height: 100%;
    display: flex;
    flex-direction: column;
`
export const Information = styled.input`
    width: 100%;
    height: 46px;
    padding: 0px 13px;
    border-radius: 8px;
    background-color: #F4F5FA;
    font-size: 14px;
`
export const Title = styled.div`
    font-size: 14px;
    margin-top: ${props => props.$top ? '30px' : '20px'};
    margin-bottom: 8px;
    color: #73787E;
`
export const Modify = styled.div`
    width: 100%;
    height: 51px;
    margin-top: 36px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    background-color: ${props => props.$ok ? "#007CFF" : "#E9EBED"};
    color: ${props => props.$ok ? "white" : "#73787E"};
` 