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
export const Choice_Box = styled.div`
    display: flex;
    justify-content: right;
    align-items: center;
    margin-top: 10px;
    margin-right: 24px;
`
export const Choice = styled.div`
    color: #73787E;
    font-size: 12px;
    margin-right: 4px;
`
export const Recruitment_Box = styled.div`
    margin: 10px 20px 10px 20px;
    background-color: white;
    padding: 16px 18px;
    border-radius: 8px;
`
export const Recruitment = styled.div`
    display: flex;
    align-items: center;
`
export const Area = styled.div`
    background-color: #E7F3FF;
    font-size: 12px;
    border-radius: 8px;
    color: #007CFF;
    padding: 4px 8px;
    white-space: nowrap;
`
export const Title = styled.div`
    margin-left: 4px;
    font-size: 13px;
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`
export const Text = styled.div`
    padding: 6px 0px;
    padding-left: 6px;
    border-bottom: 1px solid #E9EBED;
    color: #9FA4A9;
    font-size: 11px;
`
export const Time_Box = styled.div`
    display: flex;
    align-items: center;
    margin-top: 12px;
`
export const Time = styled.div`
    flex: 1;
    color: #9FA4A9;
    font-size: 11px;
    padding-left: 6px;
`
export const Comment = styled.div`
    font-size: 13px;
    padding-right: 8px;
`
