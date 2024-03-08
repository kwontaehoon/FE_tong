import styled from "styled-components";

export const Container = styled.div`
    padding: 20px;
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