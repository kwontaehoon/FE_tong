import styled from "styled-components";

export const Container = styled.div`
    background-color: #F4F5FA;
` 
export const TabBox = styled.div`
    height: 58px;
    padding: 0px 10px 0px 10px;
    background-color: white;
    display: flex;
    justify-content: center;
`
export const Tab = styled.div`
    padding: 0px 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    border-bottom: ${props => props.$border ? '3px solid #007CFF' : ''};
    padding-top: ${props => props.$border ? '3px' : ''};
`
export const Announcement_Box = styled.div`
    padding: 20px;
    margin: 10px 0px;
    border-radius: 8px;
    background-color: white;
`
export const Announcement = styled.div`
    font-size: 14px;
    padding-left: 6px;
    flex: 1;
`
export const Update_Box = styled.div`
    display: flex;
    align-items: center;
`
export const Update = styled.div`
    color: #00D4EA;
    font-size: 12px;
    font-weight: 500;
` 
export const Update_in = styled.div`
    flex: 1;
`
export const Days = styled.div`
    color: #9FA4A9;
    font-size: 11px;
`