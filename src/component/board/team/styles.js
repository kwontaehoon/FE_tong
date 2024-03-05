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
export const Choice_Box = styled.div`
    display: flex;
    justify-content: right;
    align-items: end;
    margin-top: 10px;
    margin-right: 20px;
`
export const Choice = styled.div`
    color: #73787E;
    font-size: 14px;
    margin-right: 4px;
`
export const Recruitment_Box = styled.div`
    margin-top: 10px;
    display: flex;
    border-radius: 8px;
    background-color: white;
    padding: 20px;
`
export const FC_Box = styled.div`
    padding-right: 30px;
    width: 80%;
`
export const FC = styled.div`
    font-size: 15px;
    white-space: nowrap;
`
export const Jangi_FC = styled.div`
    font-size: 12px;
    color: #9FA4A9;
    margin-top: 6px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`
export const Comments_Box = styled.div`
    margin-top: 10px;
    display: flex;
    box-sizing: border-box;
`
export const Comment = styled.div`
    font-size: 12px;
    padding-right: 6px;
`
export const Activity = styled.div`
    font-size: 12px;
    color: #00D4EA;
    padding-left: 6px;
`