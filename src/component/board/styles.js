import styled from "styled-components";

export const Container = styled.div`
    background-color: #F4F5FA;
    position: relative;
`

export const TabBox = styled.div`
    height: 68px;
    padding: 10px 10px 0px 10px;
    background-color: white;
`
export const Tab = styled.div`
    width: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: ${props => props.$border ? '3px solid #007CFF' : ''};
`