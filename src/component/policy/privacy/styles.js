import styled from "styled-components";

export const Div = styled.div`
padding:  0 0 29px;
`
export const Top = styled.div`
background:#fff;
display: flex;
justify-content: center;
align-items: center;
height: 45px;
border-bottom: 1px solid #E9EBED;
`
export const Img = styled.img`
width: ${props => props.$wd};
`

export const MallTerm = styled.div`
margin:14px 7px 0; 
padding:14px; 
color:#777; 
font-size:11px; 
line-height:1.5; 
border:1px solid #dddddd; 
background:#fff; 
text-align: justify;
`
export const Quick = styled.div`
position: fixed;
    bottom: 20px;
    right: 5%;
    z-index: 100;
    margin: 0 0 0 -36px;
    border-top: 0;
    opacity: 0.6;
    padding: 4px;
    color: #fff;
    font-size: 10px;
    background: #E9EBED;
`
export const BtnArea = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 12px;
    height: 30px;
`
export const Button = styled.div`
    color: #222;
    background-color: #F7F8FE;
    padding: 4px 16px;
    border:1px solid #dddddd; 
    /* border-radius: 12px; */
    color:#777;
    font-size: 14px;
    line-height: 30px;
`