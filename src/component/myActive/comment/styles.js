import styled from "styled-components";

export const Container = styled.div`
    padding-bottom: 20px;
    background-color: #F4F5FA;
`
export const TabBox = styled.div`
    height: 58px;
    padding: 0px 10px 0px 10px;
    background-color: white;
    margin-bottom: 20px;
`
export const Tab = styled.div`
    width: 33.4%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: ${props => props.$border ? '3px solid #007CFF' : ''};
    padding-top: ${props => props.$border ? '3px' : ''};
`
export const Area = styled.div`
    background-color: ${props => props.$category ? '#E7F3FF' : '#F7E7E8'};
    font-size: 13px;
    border-radius: 8px;
    color: ${props => props.$category ? '#007CFF' : '#F15922'};
    padding: 4px 8px;
`
export const Title = styled.div`
    margin-left: 4px;
    font-size: 13px;
    font-weight: 600;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
`