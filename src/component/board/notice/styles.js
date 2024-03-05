import styled from "styled-components";

export const Container = styled.div`
    background-color: #F4F5FA;
` 
export const TabBox = styled.div`
    height: 68px;
    padding: 10px 10px 0px 10px;
    background-color: white;
    display: flex;
    justify-content: center;
`
export const Tab = styled.div`
    padding: 0px 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: ${props => props.$border ? '3px solid #007CFF' : ''};
`
export const Announcement_Box = styled.div`
    padding: 20px;
    margin-bottom: 10px;
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
    font-size: 14px;
` 
export const Update_in = styled.div`
    flex: 1;
`
export const Days = styled.div`
    color: #9FA4A9;
    font-size: 12px;
`