import styled from "styled-components";

export const Container = styled.div`
    background-color: white;
    height: 100%;
`

export const Header = styled.div`
    margin-bottom: 100px;
    height: 45px;
    display: flex;
    justify-content: right;
`

export const Logo = styled.div`
    margin-bottom: 65px;
    margin-top: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Id = styled.input`
    width: 100%;
    height: 50px;
    display: block;
    margin-bottom: 11px;
    border-radius: 8px;
    padding: 0px 13px;
    box-sizing: border-box;
    background-color: #F4F5FA;
`

export const Pwd = styled.input`
    width: 100%;
    height: 50px;
    border-radius: 8px;
    padding-left: 13px;
    box-sizing: border-box;
    background-color: #F4F5FA;
`
export const Login = styled.div`
    width: 100%;
    height: 51px;
    margin-top: ${props => props.$validation ? '0px' : "20px"};
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    color: white;
    background-color: #007CFF;
`
export const Minibox = styled.div`
    display: flex;
    margin: 20px 0px;
    justify-content: center;
    font-size: 12px;
    font-weight: 350;
    margin-bottom: 50px;
`