import styled from "styled-components";

export const Cover = styled.div`
width: 100%;
height: 100%;
position: fixed;
z-index: 1;
background:rgba(0,0,0,0.5);

`
export const Bar = styled.div`
position: relative;
width: 100%;
height:50px;
margin:0 auto;
background:#f5f5f5;
&::before {
    content: '';
    width: 24px;
    height: 24px;
    background: url('/svg.close.svg')no-repeat;
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
}
`

export  const Container = styled.body `
width: 100%;
`
export  const Inner = styled.div `
width: 80%;
height: 100%;
position: fixed;
left: 0;
top: 0;
background: #fff;
z-index: 10;
`

export const H1Tit= styled.h1`
color: #BF4F74;
margin:0 auto;
`

export const Info = styled.div`
padding: 30px 20px;
display:flex;
margin: 0 auto;
justify-content: space-between;
align-items: center;
`
export const Pcoment = styled.p`
font-family: "Noto Sans KR";
font-size: 10px;
font-style: normal;
font-weight: 400;
line-height: 12px; /* 120% */
letter-spacing: -0.1px;
color: var(--Grayscale-05, #9FA4A9);
`

export const Right = styled.ul`
display:flex;

`
export const Btn1 = styled.li`
position: relative;
font-size:11px;
padding: 4px 12px;
background:#F4F5FA;
list-style: none;
border-radius: 999px;
&::before {
    content: '';
    width: 13px;
    height: 13px;
    background-image: url('/iconamoon_arrow-up-2-light.svg');
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
}
`
export const Btn2 = styled(Btn1)`
position: relative;
&::before {
    content: '';
    width: 13px;
    height: 13px;
    background-image: url('/iconamoon_arrow-up-2-light.svg');
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
}

`


// 카테고리
export const Sec1 = styled.div`
width: auto;
padding: 20px 20px 10px;
`
export const Sec1H1 = styled.h1`
font-family: "Noto Sans KR";
font-size: 16px;
font-weight: 700;
color:#1B1D1F;
letter-spacing: -0.08px;
margin-bottom: 20px;
`
export const Sec2 = styled(Sec1)`
`
export const Sec3 = styled(Sec1)`
`

export const List = styled.ul`
list-style: none;
display: flex;
justify-content: center;
/* border: 1px solid red; */
padding: 0px;
gap: 40px;
`

export const Icon = styled.li`
width: 56px;
color:#1B1D1F;
font-size: 12px;

`
export const Img = styled.div`
width: 56px;
height: 56px;
border-radius: 999px;
background: #f5f5f5;
margin-bottom: 5px;
`
export const P = styled.p`
color:#1B1D1F;
font-size: 12px;
text-align: center;
text-decoration: none;
`
// 검색어
export const Weekley = styled.div`
width: auto;
padding: 20px 0px;

`
export const WeekBox = styled.ul`
display: flex;
flex-wrap: wrap;
align-items: center;
`
export const WeekList = styled.li`
    width: auto;
    display: inline-block;
    margin: 0 3px 6px;
    padding: 2px 20px;
    border: 1px solid #1B1D1F;
    border-radius: 40px;
    font-size: 12px;
    &:nth-child(1) {
        border:1px solid #FF2A6D;
    }
`
export const Sec4 = styled.div`
width: auto;
padding: 50px 20px;
border-top: 10px solid #F4F5FA;
`
export const H4 = styled.h4`
font-size: 13px;
font-style: normal;
font-weight: 350;
line-height: 16px; 
letter-spacing: -0.24px;
color: #26282B ;
`
export const CsBox = styled.ul`
width: 100%;
`
export const Cs1 = styled.li`
font-size: 12px;
font-style: normal;
font-weight: 350;
line-height: 16px; 
letter-spacing: -0.24px;
color: #464C52 ;
margin-top: 13px;
`
export const CsSpan = styled.span`
background: #F4F5FA;
padding: 4px;
margin-right: 4px;
`

