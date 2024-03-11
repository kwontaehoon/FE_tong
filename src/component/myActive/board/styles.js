import styled from "styled-components";

export const Container = styled.div`
    background-color: #F4F5FA;
    padding-bottom: 20px;
`
export const TabBox = styled.div`
    height: 68px;
    padding: 10px 10px 0px 10px;
    background-color: white;
    margin-bottom: 20px;
`
export const Tab = styled.div`
    width: 33.4%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: ${props => props.$border ? '3px solid #007CFF' : ''};
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
    margin: 0px 20px 10px 20px;
    background-color: white;
    padding: 16px 18px;
    border-radius: 8px;
`
export const Recruitment = styled.div`
    display: flex;
    align-items: center;
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
