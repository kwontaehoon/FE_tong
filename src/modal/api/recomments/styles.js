import styled from "styled-components"

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