import styled from "styled-components"

export const Component = styled.div`
    padding: 0px 20px 20px 20px;
    background-color: white;
    height: 100%;
`
export const Information = styled.div`
    margin-top: 20px;
    font-weight: 500;
    color: #9FA4A9;
    margin-bottom: 30px;
    font-size: 14px;
`
export const Input = styled.input`
    width: 100%;
    height: 46px;
    border-radius: 8px;
    background-color: #F4F5FA;
    margin-bottom: 20px;
    padding-left: 13px;
    font-size: 10px;
`
export const Name = styled.div`
    font-weight: 500;
    color: #73787E;
    margin-bottom: 8px;
    font-size: 14px;
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