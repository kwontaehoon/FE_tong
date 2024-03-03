import styled from "styled-components";

export const Container = styled.div`
    background-color: #F4F5FA;
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
    background-color: white;
    padding: 20px 20px 12px 20px;
`
export const Recruitment = styled.div`
    display: flex;
    align-items: center;
`
export const Area = styled.div`
    background-color: #F4F5FA;
    font-size: 13px;
    border-radius: 8px;
    color: #9FA4A9;
    padding: 4px 8px;
`
export const Title = styled.div`
    margin-left: 4px;
    font-weight: 600;
`
export const Text = styled.div`
    padding: 16px 0px;
    border-bottom: 1px solid #E9EBED;
    color: #9FA4A9;
    font-size: 14px;
`
export const Time_Box = styled.div`
    display: flex;
    align-items: center;
    margin: 12px 0px;
`
export const Time = styled.div`
    flex: 1;
    color: #9FA4A9;
    font-size: 14px;
    padding-left: 6px;
`
export const Comment = styled.div`
    font-size: 13px;
    padding-right: 8px;
`
