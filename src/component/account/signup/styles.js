import styled from "styled-components"

export const Container = styled.div`
    padding: 20px;
`
export const Top = styled.div`
    height: 45px;
    display: flex;
    justify-content: right;
`

export const Gimpo = styled.div`
    margin-top: 30px;
    font-size: 24px;
    font-weight: 800;
`

export const Enterinformation = styled.div`
    width: 257px;
    margin-top: 7px;
    margin-bottom: 19px;
    font-size: 13px;
    font-weight: 500;
    white-space: nowrap;
    color: #9FA4A9;
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
    font-size: 16px;
    margin-top: 20px;
    margin-bottom: 10px;
    color: #73787E;
`
export const IdCheck = styled.div`
    width: 101px;
    height: 46px;
    margin-left: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    background-color: #F4F5FA;
    font-size: 16px;
    color: #9FA4A9;
`

export const Terms = styled.div`
    margin-top: 50px;
    margin-bottom: 11px;
`

export const Signup = styled.div`
    height: 51px;
    margin-top: 30px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 8px;
    background-color: ${props => props.$ok ? "#007CFF" : "#E9EBED"};
    color: ${props => props.$ok ? "white" : "#73787E"};
`