import styled from "styled-components";

export const Container = styled.div`
`
export const TabBox = styled.div`
    height: 58px;
    padding: 0px 10px 0px 10px;
    background-color: white;
    margin-bottom: 10px;
`
export const Tab = styled.div`
    width: 33.4%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: ${props => props.$border ? '3px solid #007CFF' : ''};
    padding-top: ${props => props.$border ? '3px' : ''};
`