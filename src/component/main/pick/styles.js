import styled from "styled-components";

export const Container = styled.div`
    margin-top: 18px;
    background-color: white;
`
export const Ground_Pick = styled.div`
    display: flex;
    align-items: center;
`
export const Ground = styled.div`
    font-size: 20px;
    white-space: nowrap;
    font-weight: 700;
`
export const PickContent = styled.div`
    background-color: ${props => props.$flag ? '#007CFF' : ''};
    border: 1px solid black;
    color: ${props => props.$flag ? 'white' : ''};
    font-size: 16px;
    border-radius: 30px;
    padding: 6px 16px;
    margin-right: 10px;
    margin-bottom: 12px;
`