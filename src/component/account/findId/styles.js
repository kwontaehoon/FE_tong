import styled from "styled-components"

export const Component = styled.div`
    background-color: white;
    height: 100%;
`
export const Information = styled.div`
    font-size: 12px;
    color: #9FA4A9;
    margin-top: 40px;
    margin-bottom: 30px;
`
export const Input = styled.input`
    width: 100%;
    height: 46px;
    border-radius: 8px;
    background-color: #F4F5FA;
    margin-bottom: ${props => props.$validation ? '8px' : '20px'};
    padding-left: 13px;
    font-size: 10px;
`
export const Name = styled.div`
    font-weight: 500;
    color: #73787E;
    margin-bottom: 8px;
    font-size: 12px;
`

export const ID = styled.div`
    margin-top: 50px;
    height: 51px;
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 8px;
    background-color: ${props => props.$ok ? "#007CFF" : "#E9EBED"};
    color: ${props => props.$ok ? "white" : "#73787E"};
`

export const Pwd = styled.div`
    font-size: 12px;
    color: #26282B;
    margin-top: 10px;
    display: flex;
    justify-content: end;
`