import styled from "styled-components";

export const Container = styled.div`
    padding: 29px 33px;
`

export const Header = styled.div`
    height: 15px;
    margin-bottom: 62px;
    display: flex;
    justify-content: right;
`

export const Logo = styled.div`
    height: 56px;
    margin-bottom: 57px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 48px;
    font-weight: 800;
`

export const Id = styled.input`
    border: 1px solid;
    width: 100%;
    height: 35px;
    display: block;
    margin-bottom: 13px;
    border-radius: 15px;
    padding: 0px 13px;
    box-sizing: border-box;
`

export const Pwd = styled.input`
    border: 1px solid;
    width: 100%;
    height: 35px;
    border-radius: 15px;
    padding-left: 13px;
    box-sizing: border-box;
`

export const Login = styled.div`
    border: 1px solid;
    width: 100%;
    height: 35px;
    margin-top: ${props => props.$validation ? '0px' : "21px"};
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    font-weight: 500;
` 

export const Minibox = styled.div`
    display: flex;
    margin: 18px 0px;
    justify-content: center;
`

export const ID_find = styled.div`
    font-size: 10px;
    white-space: nowrap;
    display: flex;
    margin-right: 9px;
    font-weight: 500;
`
export const Pwd_find = styled.div`
    font-size: 10px;
    white-space: nowrap;
    margin-right: 10px;
    margin-left: 11px;
    font-weight: 500;
`

export const Signup = styled.div`
    font-size: 10px;
    white-space: nowrap;
    margin-left: 11px;
    font-weight: 500;
` 

export const Social = styled.div`
    display: flex;
    justify-content: center;
`

export const Social_button = styled.div`
    margin: 0px 22px;
`