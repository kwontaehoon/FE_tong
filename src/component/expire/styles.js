import styled from "styled-components";

export const Cotainer = styled.div`
width: 100%;

background: #F4F5FA;
`
export const Sec1 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px 20px;
    background: #fff;
    margin-top: ${props => props.$mt};
`
export const Section2 = styled(Sec1)`
background: #F4F5FA;
`

export const H1 = styled.h1`
color: #1B1D1F;
text-align: center;
font-family: "Noto Sans KR";
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: 26px;
letter-spacing: -1px;
margin-bottom: ${props => props.$mb};
`
export const P1 = styled.p`
color: #ff0000;
font-family: "Noto Sans KR";
font-size: 12px;
font-style: normal;
font-weight: 500;
letter-spacing: -0.07px;
padding: 0;
margin: 0;
margin-bottom: 4px;
`
export const Ul = styled.ul`
width: ${props => props.$wd};
margin: 0;
padding: ${props => props.$pa};
border-radius: 8px;
background: #F4F5FA;
margin-top: ${ props => props.mt};

`
export const Li = styled.li`
color: #73787E;
font-family: "Noto Sans KR";
font-size: 13px;
font-style: normal;
font-weight: 700;
letter-spacing: -0.07px;
padding: 0;
margin: 0;
margin-bottom: 2px;
list-style: none;
`
export const Li2 = styled(Li)`
margin-bottom: 6px;
`
export const Span = styled.span`
color: #007CFF;
`
export const BtnOut = styled.button`
display: flex;
width: 390px;
padding: 21px 10px;
justify-content: center;
align-items: center;
font-family: "Noto Sans KR";
font-size: 20px;
font-weight: 700;
border-radius: 8px;
background: #E9EBED;
color: #73787E;
box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.05);
border: 1px solid var(--point-Grayscale-07, #E9EBED);
`

