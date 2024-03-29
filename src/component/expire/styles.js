import styled from "styled-components";

export const Cotainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
height: 100%;

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
    padding-bottom: ${props => props.$pb ? '40px' : ''};
`
export const Section2 = styled(Sec1)`
background: #F4F5FA;
justify-content: flex-start;
`

export const H1 = styled.h1`
color: #1B1D1F;
text-align: center;
font-family: "Noto Sans KR";
font-size: 18px;
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
margin-bottom: 20px;
text-align: center;
`
export const Ul = styled.ul`
width: ${props => props.$wd};
margin: 0;
padding: ${props => props.$pa};
border-radius: 8px;
background: #F4F5FA;
margin-top: ${props => props.mt};
`
export const Li = styled.li`
font-family: "Noto Sans KR";
font-size: 12px;
font-style: normal;
letter-spacing: -0.07px;
padding: 0;
margin: 0;
margin-bottom: 2px;
list-style: none;
`
export const Li2 = styled(Li)`
margin-bottom: 12px;
display: flex;
align-items: center;
`
export const Span = styled.span`
    line-height: 30px;
    color: ${props => props.$main ? '#007CFF' : ''};
`
export const BtnOut = styled.button`
display: flex;
width: 100%;
height: 51px;
justify-content: center;
align-items: center;
font-family: "Noto Sans KR";
border-radius: 8px;
background-color: ${props => props.$bg ? "#007CFF" : "#E9EBED"};
color: ${props => props.$bg ? 'white' : '#9FA4A9'};
box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.05);
border: 1px solid var(--point-Grayscale-07, #E9EBED);
`

