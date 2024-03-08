import styled from "styled-components";

export const Div = styled.div`
width: 100%;
background: #F4F5FA;

padding-top: 50px;
`
export const Inner = styled.div`
width: 100%;
border-radius: 30px 30px var(--num, 0px) var(--num, 0px);
background: #fff;
margin-top: 50px;
height: 100%;
padding-bottom: 50px;
`
export const Wrap = styled.div`
display: flex;
justify-content: flex-start;
gap: 9px;
margin: 0 20px;
padding-top: 50px;
`
export const Left = styled.div`
`


export const Img = styled.img`
width: 100%;
`
export const Imgbox = styled.div`
padding: 12px;
border-radius: 999px;
background: #E9F8F5;
width: 48px;
`

export const Right = styled.div`

`
export const List = styled.div`
display: flex;
margin-bottom: 10px;
`
export const Li = styled.div`
margin-left: 10px;
font-size: 12px;
font-style: normal;
font-weight: 500;
line-height: normal;
letter-spacing: -0.24px;
color: #73787E;
`
export const Span = styled.span`
position: relative;
&::before{
content: '';
width: 1px;
height: 10px;
background: #CACDD2;
position: absolute;
right: -6px;
top: 50%;
transform: translateY(-50%);
}

`
export const ComenBox = styled.div`
padding: 16px;
background: #F4F5FA;
border-radius: 20px;
box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.05);
text-align: left;
`
export const P = styled.div`
font-size: 12px;
font-style: normal;
font-weight: 500;
line-height: normal;
letter-spacing: -0.11px;
text-align: left;
color: #464C52;
`
export const P2 = styled.div`
font-size: 11px;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: -0.24px;
color: #9FA4A9;
margin-top: 10px;
`
export const IcoWrap = styled.div`
margin-top: 10px;
`
export const IcoList = styled.div`
display: flex;
gap: 4px;
height: 18px;
margin-top: 10px;
`
export const IcoBox = styled.div`
display: flex;
gap: 3px;
margin-left: 10px;
`
export const Img2 = styled.img`
width: 18px;
height: 18px;
`

export const Count = styled.div`
font-size: 11px;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: -0.11px;
color: #73787E;
`
export const Plus = styled.div`
display: flex;
gap: 3px;
margin-left: 10px;
`
export const IcoBox2 = styled.div`
display: flex;
gap: 3px;
margin-top: 12px;
margin-left: 10px;
`
export const P3 = styled.div`
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: 18px; /* 128.571% */
letter-spacing: -0.24px;
color: #007CFF;
`
